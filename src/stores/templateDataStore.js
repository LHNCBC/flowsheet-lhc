
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
  dateList = new Map();

  setTemplate(template) {
    //console.log(template)
    this.template = template;
    this.templateTree = this.preProcessTemplate();
    //console.log(this.templateTree)
    this.addEquivlaneClassRow();
    //console.log(this.templateTree)

  }

  /**
   * Remove items in the hierarchy that have no code (LOINC, in E) while keeping the hierachy structure.
   * Group header items do not have to have the code.
   * This is done before the user data is loaded.
   */
  preProcessTemplate() {
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
        }
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
  postProcessTemplateTree() {
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
  filterDataByTemplate(newData) {
    let list = newData.entry;
    
    for(let i=0; i<list.length; i++) {
      let item = list[i];
      let code = this._getCode(item);
      let date = this._getDate(item);
      let value = this._getValue(item);
      let unit = this._getUnit(item);
      let interpretationCode = this._getInterpretation(item);
      let displayValue = interpretationCode && interpretationCode !== 'N' ? value + ' *' + interpretationCode : value;

      let valueWithUnit = unit && unit.code ? value + ' ' + unit.code : value;
      let displayValueWithUnit = interpretationCode && interpretationCode !== 'N' ? valueWithUnit + ' *' + interpretationCode : valueWithUnit;
      let cellData = {value: displayValue, valueWithUnit: displayValueWithUnit};

      let range = this._getReferenceRange(item);

      for(let j=0; j<this.templateTree.length; j++) {
        let node = this.templateTree[j];
        if (!node.sparklineData) {
          node.sparklineData = [];
        }
        if (node.isEqClassRow) {
          for (let k=0; k<node.loincList.length; k++) {
            if (node.loincList[k] === code) {
              node.hasData = true;
              this.dateList.set(date);
              if (!node[date]) {
                node[date] = cellData;
              }
              else {
                node[date].value = node[date].value + "; " + cellData.value;
                node[date].valueWithUnit = node[date].valueWithUnit + "; " + cellData.valueWithUnit;
              }
            }
          }
        }
        else if (node.E === code) {
          node.sparklineData.push(value);
          node.hasData = true;
          node[date] = cellData;
          this.dateList.set(date);

          if(range && Array.isArray(range)) {
            if (range[0].low) {
              node.low = range[0].low.value;
            }
            if (range[0].high) {
              node.high = range[0].high.value;  
            }            
          }    
        }
      }
    }

  }

  /**
   * Export the filtered user data
   */
  exportTableData() {
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