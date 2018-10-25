import React from 'react';
import moment from 'moment';
import dcopy from 'deep-copy';
 
class TemplateDataStore {

  // {
  //     "A": "LVL",
  //     "B": "INDENTEDNAME",
  //     "C": "EquivalenceClass",
  //     "D": "CODE",
  //     "E": "LOINC_MERGED",
  //     "F": "LONG_COMMON_NAME_LOINC",
  //     "G": "LOINC_DISPLAY",
  //     "H": "UCUM_EX",
  //     "I": "norm_range",
  //     "J": "norm_high",
  //     "K": "norm_low",
  //     "L": "danger_high",
  //     "M": "danger_low"
  // },

  template = null;
  templateTree = [];
  tsList = new Map();  
  dateList = new Map();
  dayList = new Map();
  weekList = new Map();
  monthList = new Map();
  yearList = new Map();
  zoomLevel = ['day', 'week', 'month', 'quarter', 'year', 'date'];

  setTemplate(template) {
    this.tsList = new Map();
    this.dateList = new Map();
    this.dayList = new Map();
    this.weekList = new Map();
    this.monthList = new Map();
    this.quarterList = new Map();
    this.yearList = new Map();

    //console.log(template)
    this.template = dcopy(template);
    this.templateTree = this._preProcessTemplate();
    //console.log(this.templateTree)
    this.addEquivlaneClassRow();
    //console.log(this.templateTree)

  }


  getTableData(fhirData) {

    this._filterDataByTemplate(fhirData);
    this._addAggregatedData();
    this._postProcessTemplateTree();
    this._sortColumnHeaders();
    let tableData = this._exportTableData();
    let columnInfo = {
      date: this.dateList,
      day: this.dayList,
      week: this.weekList,
      month: this.monthList,
      quarter: this.quarterList,
      year: this.yearList
    }
    return [tableData, columnInfo]
  }


  /**
   * Remove items in the hierarchy that have no code (LOINC, in E) while keeping the hierachy structure.
   * Group header items do not have to have the code.
   * This is done before the user data is loaded.
   */
  _preProcessTemplate() {
    let levelStatus = [];
    let start = this.template.length - 1;

    // initial setup of the levelStatus
    let lastLevel = this.template[start].A;
    let i = 1,
      n = parseInt(lastLevel);
    while (i <= n) {
      let status = {};
      status[i + ''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the template starting from the end
    for (let i = start; i >= 0; i--) {
      //console.log(levelStatus);

      let item = this.template[i];
      // same level
      if (item.A === lastLevel) {
        if (item.E !== "") {
          levelStatus[levelStatus.length - 1][lastLevel] = true;
          item.keep = true;
        }
      }
      // upper level (item.A === lastLevel - 1)
      else if (item.A < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length - 1][lastLevel]) {
          item.keep = true;
          item.isHeader = true;
          levelStatus[levelStatus.length - 2][item.A] = true;
        } else if (item.E != "") {
          // do we need to keep a group header who has code but all its children are not kept?
          //item.isHeader = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = item.A;
      }
      // lower level (item.A === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel) + 1,
          n = parseInt(item.A);
        while (i <= n) {
          let status = {};
          status[i + ''] = false;
          levelStatus.push(status);
          i++;
        }

        if (item.E !== "") {
          item.keep = true;
          levelStatus[levelStatus.length - 1][item.A] = true;
        }
        lastLevel = item.A;
      }
    }

    let newTemplate = this.template.filter(item => item.keep)
    newTemplate.forEach(function (item, index) {
      item.key = 'K' + index
    });

    return newTemplate;

  }

  /**
   * Add a row for equivalence class before the rows that have more than one rows with the same equivalence class
   */
  addEquivlaneClassRow() {
    let eqClassList = [], codeList = [], loincList = [];
    let repeats = 1;    
    let eqClass = '';
    // loop through the items in the template starting from the end
    for (let i = this.templateTree.length-1; i >= 0; i--) {
      let item = this.templateTree[i];
      // repeating eq class
      if (item.C && item.C == eqClass ) {
        repeats +=1;
        // insert at the beginning of the list
        codeList.unshift(item.D);
        loincList.unshift(item.E);
      }
      // new eq class
      else {
        // found previous repeating eq class
        if (repeats > 1) {
          let preItem = this.templateTree[i+1];
          let eqClassRow = Object.assign({}, preItem);
          eqClassRow.isEqClassRow = true; 
          eqClassRow.codeList = codeList;
          eqClassRow.loincList = loincList;
          eqClassRow.G = eqClass;
          eqClassRow.B = eqClass;
          eqClassRow.key = eqClassRow.key + '_EQ';
          eqClassRow.commonUCUM = ''; // ?
          eqClassList.push(
            { index: i+1, 
              row: eqClassRow
            }
          )
          // add flags to the items that belong to this equivalence class
          for (let j=0; j<codeList.length; j++) {
            this.templateTree[i+1+j].isItemInEqClass = true;
          }
        }

        // reset variables
        repeats = 1;
        codeList = [item.D];
        loincList = [item.E];
      }
      eqClass = item.C;
    }

    //console.log(eqClassList)
    // insert the eq class row
    for(let i=0; i < eqClassList.length; i++) {
      this.templateTree.splice(eqClassList[i].index, 0, eqClassList[i].row);
    }
  }


  /**
   * Reprocess the hierachy after user data is loaded.
   * to remove items that have no user data while keeping the hierachy structure.
   */
  _postProcessTemplateTree() {
    let levelStatus = [];
    let start = this.templateTree.length - 1;

    // initial setup of the levelStatus
    let lastLevel = this.templateTree[start].A;
    let i = 1,
      n = parseInt(lastLevel);
    while (i <= n) {
      let status = {};
      status[i + ''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the templateTree starting from the end
    for (let i = start; i >= 0; i--) {
      //console.log(levelStatus);

      let item = this.templateTree[i];
      // same level
      if (item.A === lastLevel) {
        if (item.hasData) {
          levelStatus[levelStatus.length - 1][lastLevel] = true;
        }
      }
      // upper level (item.A === lastLevel - 1)
      else if (item.A < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length - 1][lastLevel]) {
          item.hasData = true;
          item.isSectionHeader = true;
          levelStatus[levelStatus.length - 2][item.A] = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = item.A;
      }
      // lower level (item.A === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel) + 1,
          n = parseInt(item.A);
        while (i <= n) {
          let status = {};
          status[i + ''] = false;
          levelStatus.push(status);
          i++;
        }

        if (item.hasData) {
          levelStatus[levelStatus.length - 1][item.A] = true;
        }
        lastLevel = item.A;

      }
    }
  }

  /**
   * Filter user data with the hierachy.
   * @param {*} newData user data from FHIR server.
   */
  _filterDataByTemplate(newData) {
    let list = newData.entry;
    if (list) {
      for(let i=0; i<list.length; i++) {    
        let item = list[i];
        let code = this._getCode(item);
        let date = this._getDate(item);
        let value = this._getValue(item);
        let unit = this._getUnit(item);
        let interpretationCode = this._getInterpretation(item);
  
  //      let range = this._getReferenceRange(item);
  
        for(let j=0; j<this.templateTree.length; j++) {
          let node = this.templateTree[j];
          if (!node.sparklineData) {
            node.sparklineData = [];
          }
          if (node.isEqClassRow) {
            for (let k=0; k<node.loincList.length; k++) {
              if (node.loincList[k] === code) {
                node.hasData = true;
                this.tsList.set(date);
                if (!node.data) {
                  node.data = {};
                }
                if (!node.data[date]) {
                  node.data[date] = [{value: value, unit: unit, normalFlag: interpretationCode}];
                }
                else {
                  node.data[date].push({value: value, unit: unit, normalFlag: interpretationCode});
                }
              }
            }
          }
          else if (node.E === code) {
            node.sparklineData.push(value);
            node.hasData = true;
            if (!node.data) {
              node.data = {};
            }
            node.data[date] = {value: value, unit: unit, normalFlag: interpretationCode};
            this.tsList.set(date);
  
            // if(range && Array.isArray(range)) {
            //   if (range[0].low) {
            //     node.low = range[0].low.value;
            //   }
            //   if (range[0].high) {
            //     node.high = range[0].high.value;  
            //   }            
            // }    
          }
        }
      }  
    }
  }


  // TODO: 
  _getAverageValue(itemValue) {
    let totalValue;
    if (Array.isArray(itemValue)) {
      itemValue.forEach((itemVal) => {totalValue += itemVal;})
      let val = totalValue / itemValue.length;
    }
  }

  // TODO: use ucum js lib
  _convertToUnit(itemValue, toUnit) {
    return itemValue;
  }

  _getDisplayValue(itemValue) {
    let displayValue = [], displayValueWithUnit = [];

    if (Array.isArray(itemValue)) {
      itemValue.forEach((val) => {
        let displayVal = val.interpretationCode && val.interpretationCode !== 'N' ? val.value + ' *' + val.interpretationCode : val.value;
        let valWithUnit = val.unit && val.unit.code ? val.value + ' ' + val.unit.code : val.value;
        let displayValWithUnit = val.interpretationCode && val.interpretationCode !== 'N' ? valWithUnit + ' *' + val.interpretationCode : valWithUnit;
        displayValue.push(displayVal);
        displayValueWithUnit.push(displayValWithUnit);
      })
    }
    else {
      let val = itemValue;
      let displayVal = val.interpretationCode && val.interpretationCode !== 'N' ? val.value + ' *' + val.interpretationCode : val.value;
      let valWithUnit = val.unit && val.unit.code ? val.value + ' ' + val.unit.code : val.value;
      let displayValWithUnit = val.interpretationCode && val.interpretationCode !== 'N' ? valWithUnit + ' *' + val.interpretationCode : valWithUnit;
      displayValue.push(displayVal);
      displayValueWithUnit.push(displayValWithUnit);

    }
    return  {value: displayValue.join('; '), valueWithUnit: displayValueWithUnit.join('; ')}
  }

  _setNodeAggregatedData(node) {

    let dateArray = Object.keys(node.data);//.reverse();  
    for (var date of dateArray) {
      //console.log(date);
      let dateObj = new Date(date);
      let mntDate  = moment(dateObj);
      let itemValue = node.data[date];
      let dateKey, columnLabel;
      this.zoomLevel.forEach((type) => {
        switch (type) {
          case 'day':
            columnLabel = mntDate.format("YYYY/MM/DD");
            dateKey = 'day_' + columnLabel;
            this.dayList.set(dateKey, columnLabel);        
            break;
          case 'week':
            // use a separate moment objct becuase startOf and endOf change the value
            let mntDate2 = moment(dateObj);
            let startOfWeek = mntDate2.startOf('week').format('MM/DD') 
            let startYear = mntDate2.startOf('week').year();
            let endOfWeek = mntDate2.endOf('week').format('MM/DD') 
            let endYear = mntDate2.endOf('week').year();
            if (startYear === endYear) {
              columnLabel = startOfWeek + '--' + endOfWeek + ', ' + startYear
            }
            else {
              columnLabel = startOfWeek + '/' + startYear + '--' + endOfWeek + '/' + startYear
            }
            dateKey = 'week_' + mntDate.year() + '-' + mntDate.weeks();
            this.weekList.set(dateKey, columnLabel);
            break;
          case 'month':
            columnLabel =  mntDate.format("YYYY/MM")
            dateKey = 'month_' + columnLabel;
            this.monthList.set(dateKey, columnLabel);
            break;
          case 'quarter':
            columnLabel = 'Q' + mntDate.quarters() + ', ' + mntDate.year();
            dateKey = 'quarter_' + mntDate.year() + '-' + mntDate.quarters();
            this.quarterList.set(dateKey, columnLabel);
            break;
          case 'year':
            columnLabel = mntDate.year();
            dateKey = 'year_' + columnLabel;
            this.yearList.set(dateKey, columnLabel);
            break;
          case 'date':
          default: 
            columnLabel = <div><div>{mntDate.format("YYYY/MM/DD")}</div><div>{mntDate.format("HH:mm:ss")}</div></div>;
            dateKey = 'date_' + date;
            this.dateList.set(dateKey, columnLabel);
        }
        // use the most recent value
        if (!node[dateKey]) {
          node[dateKey] = this._getDisplayValue(itemValue);  
        }  
        
      })
    }

    // TODO

  }


  /**
   * sort data by the keys in reverse order, in dateList, dayList, weekList and etc, so that columns are display with the most recent date first. 
   */
  _sortColumnHeaders() {

    //console.log(this.dateList)
    this.dateList = new Map([...this.dateList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.dayList = new Map([...this.dayList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.weekList = new Map([...this.weekList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.monthList = new Map([...this.monthList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.quarterList = new Map([...this.quarterList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.yearList = new Map([...this.yearList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    
    console.log(this.dateList)
  }

  /**
   * create aggregated data on day, week, month and year level, after the data is loaded and process on date (timestamp)
   */
  _addAggregatedData() {
    for(let j=0; j<this.templateTree.length; j++) {
      let node = this.templateTree[j];
      if (node.hasData && node.data) {
        this._setNodeAggregatedData(node)
      }
      
    }

  }

  /**
   * Export the filtered user data
   */
  _exportTableData() {
    return this.templateTree.filter(node => node.hasData);
  }


  _getCode(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.code && resource.code.coding && resource.code.coding.length>0) {
      ret = resource.code.coding[0].code;
    }
    return ret;
  }

  _getDate(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.effectiveDateTime) {
      ret = resource.effectiveDateTime;
    }
    return ret;
  }

  _formatDate(date, type) {
    let dateObj = new Date(date);
    let mntDate  = moment(dateObj);
      
    let dateKey, columnLabel;
    switch (type) {
      case 'day':
        columnLabel = mntDate.format("YYYY-MM-DD");
        dateKey = 'day.' + columnLabel;
        break;
      case 'week':
        columnLabel = mntDate.weeks();
        dateKey = 'week.' + columnLabel
        break;
      case 'month':
        columnLabel =  mntDate.format("YYYY-MM")
        dateKey = 'month.' + columnLabel;
        break;
      case 'year':
        columnLabel = mntDate.year();
        dateKey = 'year.' + columnLabel;
        break;
      case 'date':
      default: 
        columnLabel = <div><div>mntDate.format("YYYY-MM-DD")</div><div>mntDate.format("HH:mm:ss")</div></div>;
        dateKey = 'date.' + date;
    }

    return {dateKey, columnLabel};

  }
  _getValue(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.valueQuantity) {
      ret = resource.valueQuantity.value;
    }
    return ret;
  }

  _getUnit(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.valueQuantity) {
      ret = { unit: resource.valueQuantity.unit,
              code: resource.valueQuantity.code,
              system: resource.valueQuantity.system
      };
    }
    return ret;
  }

  // "interpretation": {
  //   "coding": [
  //     {
  //       "system": "http://hl7.org/fhir/v2/0078",
  //       "code": "N",
  //       "display": "Normal"
  //     }
  //   ]
  // },
  _getInterpretation(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.interpretation && resource.interpretation.coding[0]) {
      ret = resource.interpretation.coding[0].code;
    }
    return ret;
  }

  // "referenceRange": [
  //   {
  //     "low": {
  //       "value": 800,
  //       "unit": "mL",
  //       "code": "mL"
  //     },
  //     "high": {
  //       "value": 2000,
  //       "unit": "mL",
  //       "code": "mL"
  //     },
  //     "text": "800 to 2000"
  //   }
  // ]
  _getReferenceRange(entry) {
    return entry.resource && entry.resource.referenceRange ? entry.resource.referenceRange : null;
  }


}

export default new TemplateDataStore();