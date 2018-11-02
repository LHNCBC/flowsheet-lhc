import React from 'react';
import moment from 'moment';
import dcopy from 'deep-copy';

const ucum = require('@lhncbc/ucum-lhc');

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

  ucumUtils = ucum.UcumLhcUtils.getInstance();

  setTemplate(template) {
    this.tsList = new Map();
    this.dateList = new Map();
    this.dayList = new Map();
    this.weekList = new Map();
    this.monthList = new Map();
    this.quarterList = new Map();
    this.yearList = new Map();

    this.template = dcopy(template);
    this.templateTree = this._preProcessTemplate();
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
    //console.log(this.templateTree)

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
    let i = 1, n = parseInt(lastLevel, 10);
    while (i <= n) {
      let status = {};
      status[i + ''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the template starting from the end
    for (let i = start; i >= 0; i--) {
      
      let item = this.template[i];
      // make RI CODE a string
      item.D = item.D + '';

      // reset the range
      item.low = item.J;
      item.high = item.K;

      let itemLevel = item.A, 
          itemCode = item.O === "RI" ? item.D : item.E;

      // same level
      if (itemLevel === lastLevel) {
        if (itemCode !== "") {
          levelStatus[levelStatus.length - 1][lastLevel] = true;
          item.keep = true;
        }
      }
      // upper level (itemLevel === lastLevel - 1)
      else if (itemLevel < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length - 1][lastLevel]) {
          item.keep = true;
          item.isHeader = true;
          levelStatus[levelStatus.length - 2][itemLevel] = true;
        } else if (itemCode !== "") {
          // do we need to keep a group header who has code but all its children are not kept?
          //item.isHeader = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = itemLevel;
      }
      // lower level (itemLevel === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel, 10) + 1,
          n = parseInt(itemLevel, 10);
        while (i <= n) {
          let status = {};
          status[i + ''] = false;
          levelStatus.push(status);
          i++;
        }

        if (itemCode !== "") {
          item.keep = true;
          levelStatus[levelStatus.length - 1][itemLevel] = true;
        }
        lastLevel = itemLevel;
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
    let eqClassList = [], codeList = [];// loincList = [];
    let repeats = 1;    
    let eqClass = '';
    // loop through the items in the template starting from the end
    for (let i = this.templateTree.length-1; i >= 0; i--) {
      let item = this.templateTree[i];
      let itemEqClass = item.C,
          itemCode = item.O === "RI" ? item.D : item.E;

      // repeating eq class
      if (itemEqClass && itemEqClass === eqClass ) {
        repeats +=1;
        // insert at the beginning of the list
        codeList.unshift(itemCode);
       // loincList.unshift(item.E);
      }
      // new eq class
      else {
        // found previous repeating eq class
        if (repeats > 1) {
          let preItem = this.templateTree[i+1];
          let eqClassRow = Object.assign({}, preItem);
          eqClassRow.isEqClassRow = true; 
          eqClassRow.codeList = codeList;
          //eqClassRow.loincList = loincList;
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
        codeList = [itemCode];
        //loincList = [item.E];
      }
      eqClass = itemEqClass;
    }

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
      n = parseInt(lastLevel, 10);
    while (i <= n) {
      let status = {};
      status[i + ''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the templateTree starting from the end
    for (let i = start; i >= 0; i--) {

      let item = this.templateTree[i];
      let itemLevel = item.A;

      // same level
      if (itemLevel === lastLevel) {
        if (item.hasData) {
          levelStatus[levelStatus.length - 1][lastLevel] = true;
        }
      }
      // upper level (itemLevel === lastLevel - 1)
      else if (itemLevel < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length - 1][lastLevel]) {
          item.hasData = true;
          item.isSectionHeader = true;
          levelStatus[levelStatus.length - 2][itemLevel] = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = itemLevel;
      }
      // lower level (itemLevel === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel, 10) + 1,
          n = parseInt(itemLevel, 10);
        while (i <= n) {
          let status = {};
          status[i + ''] = false;
          levelStatus.push(status);
          i++;
        }

        if (item.hasData) {
          levelStatus[levelStatus.length - 1][itemLevel] = true;
        }
        lastLevel = itemLevel;

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
        let loinc = this._getCode(item);
        let riCode = this._getIdentifier(item);
        let date = this._getDate(item);
        let value = this._getValue(item);
        let unit = this._getUnit(item);
        let interpretationCode = this._getInterpretation(item);
          
        // let range = this._getReferenceRange(item);
  
        for(let j=0; j<this.templateTree.length; j++) {
          let node = this.templateTree[j];
          // use LOINC or RI CODE for the identifier of the record
          let itemCode = node.O === "RI" ? node.D : node.E;

          let code = node.O === 'RI' ? riCode : loinc; 

          if (!node.sparklineData) {
            node.sparklineData = [];
          }
          if (node.isEqClassRow) {
            // add a counter of how many item in the eq class has data
            if (!node.eqClassItems) {
              node.eqClassItems = {};
            }
            for (let k=0; k<node.codeList.length; k++) {
              if (node.codeList[k] === code) {
                node.hasData = true;
                node.eqClassItems[code] = true; // the item has data
                this.tsList.set(date);
                if (!node.data) {
                  node.data = {};
                }
                if (!node.data[date]) {
                  node.data[date] = [{value: value, unit: unit, normalFlag: interpretationCode, code: code}];
                }
                else {
                  node.data[date].push({value: value, unit: unit, normalFlag: interpretationCode, code: code});
                }
              }
            }
          }
          else if (itemCode === code) {
            node.sparklineData.push(value);
            node.hasData = true;
            if (!node.data) {
              node.data = {};
            }
            node.data[date] = {value: value, unit: unit, normalFlag: interpretationCode, code: code};
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


  
  _getDisplayValue(itemValue) {

    let unit = this._getUnitName(itemValue);
    let displayVal = itemValue.interpretationCode && itemValue.interpretationCode !== 'N' ? itemValue.value + ' *' + itemValue.interpretationCode : itemValue.value;
    let valWithUnit = unit ? itemValue.value + ' ' + unit : itemValue.value;
    let displayValWithUnit = itemValue.interpretationCode && itemValue.interpretationCode !== 'N' ? valWithUnit + ' *' + itemValue.interpretationCode : valWithUnit;

    return  {value: displayVal, valueWithUnit: displayValWithUnit}
  }

  
  _getDisplayValueForEqClassRow(commonUnit, commonUCUM, itemValues) {
    
    let ret = {}, displayValue = [], displayValueWithUnit = [];
    
    itemValues.forEach((val) => {

      if (commonUCUM && val.unit.code !== commonUCUM) {
        let result = this.ucumUtils.convertUnitTo(val.unit.code, val.value, commonUCUM, false);              
        if (result.status === 'succeeded') {
          let unitName = commonUnit ? commonUnit : result.printSymbol;
          let toVal = Math.round(result.toVal * 100)/100;

          let displayVal = val.interpretationCode && val.interpretationCode !== 'N' ? toVal + ' *' + val.interpretationCode : toVal;
          let valWithUnit = unitName ? toVal + ' ' + unitName : toVal;
          let displayValWithUnit = val.interpretationCode && val.interpretationCode !== 'N' ? valWithUnit + ' *' + val.interpretationCode : valWithUnit;
          displayValue.push(displayVal);
          displayValueWithUnit.push(displayValWithUnit);    
        }
        // failed or error in unit conversion
        else {
          let dispVal = this._getDisplayValue(val);
          displayValue.push(dispVal.displayValue);
          displayValueWithUnit.push(dispVal.displayValueWithUnit);
        }
      }
      else {
        let dispVal = this._getDisplayValue(val);
        displayValue.push(dispVal.value);
        displayValueWithUnit.push(dispVal.valueWithUnit);
      }
    })
    ret =  {value: displayValue.join('; '), valueWithUnit: displayValueWithUnit.join('; ')}

    return ret;
  }


  _setNodeAggregatedData(node) {

    let dateKeyCounts = {};

    let dateArray = Object.keys(node.data);
    for (var date of dateArray) {

      let dateObj = new Date(date);
      let mntDate  = moment(dateObj);
      let dateKey, columnLabel;

      this.zoomLevel.forEach((type) => {
        switch (type) {
          case 'day':
            columnLabel = <div><div>{mntDate.format("YYYY")}</div><div>{mntDate.format("MM/DD")}</div></div>;
            dateKey = 'day_' + mntDate.format("YYYY/MM/DD");
            this.dayList.set(dateKey, columnLabel);        
            if (dateKeyCounts[dateKey]) {
              dateKeyCounts[dateKey] += 1;
            }
            break;
          case 'week':
            // use a separate moment objct becuase startOf and endOf change the value
            let mntDate2 = moment(dateObj);
            let startOfWeek = mntDate2.startOf('week').format('MM/DD') 
            let startYear = mntDate2.startOf('week').year();
            let endOfWeek = mntDate2.endOf('week').format('MM/DD') 
            let endYear = mntDate2.endOf('week').year();
            if (startYear === endYear) {
              columnLabel =<div><div> {startOfWeek}</div><div> {'-' + endOfWeek}</div><div>{startYear}</div></div>
            }
            else {
              columnLabel =<div><div> {startOfWeek + '/' + startYear}</div><div> {'-' + endOfWeek + '/' + startYear}</div></div>
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
            columnLabel = mntDate.year() + ' Q' + mntDate.quarters();
            dateKey = 'quarter_' + mntDate.year() + '-' + mntDate.quarters();
            this.quarterList.set(dateKey, columnLabel);
            break;
          case 'year':
            columnLabel = mntDate.year();
            dateKey = 'year_' + mntDate.year();
            this.yearList.set(dateKey, columnLabel);
            break;
          case 'date':
          default: 
            columnLabel = <div><div>{mntDate.format("YYYY")}</div><div>{mntDate.format("MM/DD")}</div><div>{mntDate.format("HH:mm")}</div></div>;
            dateKey = 'date_' + date;
            this.dateList.set(dateKey, columnLabel);
        }
        // count dateKeys
        dateKeyCounts[dateKey] = dateKeyCounts[dateKey] ? dateKeyCounts[dateKey] + 1 : 1;            

        // use the most recent value (just update once)
        if (!node[dateKey]) {
          if (node.isEqClassRow) {
            // filter duplate codes (when such data at the same timestamp are retrieved from fhir server)
            if (Array.isArray(node.data[date])) {
              let newMap = {};
              node.data[date].forEach((dp) => { newMap[dp.code] = dp });
              node.data[date] = Object.values(newMap);  
            }
            node[dateKey] = this._getDisplayValueForEqClassRow(node.P, node.Q, node.data[date]);              
          }
          else {
            node[dateKey] = this._getDisplayValue(node.data[date]);  
          }          
        }  
        
      })

    }

    // add decorator for zoom levels that have more than one data points
    for (let dateKey in dateKeyCounts) {
      if (dateKeyCounts[dateKey] > 1 && !node[dateKey].dotAdded && !dateKey.match(/^date/)) {
        node[dateKey].value += ' ...';
        node[dateKey].valueWithUnit += ' ...';
        node[dateKey].dotAdded = true;
      }
    }

  }


  /**
   * sort data by the keys in reverse order, in dateList, dayList, weekList and etc, so that columns are display with the most recent date first. 
   */
  _sortColumnHeaders() {

    this.dateList = new Map([...this.dateList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.dayList = new Map([...this.dayList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.weekList = new Map([...this.weekList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.monthList = new Map([...this.monthList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.quarterList = new Map([...this.quarterList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    this.yearList = new Map([...this.yearList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    
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

  _getIdentifier(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.identifier && Array.isArray(resource.identifier) && resource.identifier[0]) {
      ret = resource.identifier[0].value;
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

  _getUnitName(value) {
    let unit = ''
    if (value.unit) {
      if (value.unit.unit) {
        unit = value.unit.unit;
      }
      else if (value.unit.code) {
        unit = value.unit.code;
      }
    }

    return unit;
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
