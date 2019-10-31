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


  // template = null;
  // templateTree = [];
  // tsList = new Map();
  // dateList = new Map();
  // dayList = new Map();
  // weekList = new Map();
  // monthList = new Map();
  // yearList = new Map();
  // zoomLevel = ['day', 'week', 'month', 'quarter', 'year', 'date'];

  ucumUtils = ucum.UcumLhcUtils.getInstance();

  setTemplate(template) {
    // this.tsList = new Map();
    // this.dateList = new Map();
    // this.dayList = new Map();
    // this.weekList = new Map();
    // this.monthList = new Map();
    // this.quarterList = new Map();
    // this.yearList = new Map();
    //
    // this.template = dcopy(template);
    // this.templateTree = this._preProcessTemplate();
    // this._addEquivlaneClassRow();
    //console.log(this.templateTree)


    let templateInfo = {
      zoomLevel: ['day', 'week', 'month', 'quarter', 'year', 'date'],
//      tsList: new Map(),
      dateList: new Map(),
      dayList: new Map(),
      weekList: new Map(),
      monthList: new Map(),
      quarterList: new Map(),
      yearList: new Map(),
      template: dcopy(template),
      templateTree: null
    }

    this._preProcessTemplate(templateInfo);
    this._addEquivlaneClassRow(templateInfo);

    return templateInfo;
  }


  getTableData(templateInfo, fhirData, showEqClass) {

    this._filterDataByTemplate(templateInfo, fhirData);
    this._countItemsInEqClass(templateInfo);
    this._addAggregatedData(templateInfo);
    this._postProcessTemplateTree(templateInfo);
    this._sortColumnHeaders(templateInfo);
    let tableData = this._exportTableData(templateInfo, showEqClass);
    let columnInfo = {
      date: templateInfo.dateList,
      day: templateInfo.dayList,
      week: templateInfo.weekList,
      month: templateInfo.monthList,
      quarter: templateInfo.quarterList,
      year: templateInfo.yearList
    };

    return [tableData, columnInfo]
  }

  resetTableData(templateInfo, showEqClass, force) {

    let tableData = this._exportTableData(templateInfo, showEqClass, force);

    if (force) {
      for(let j=0; j<templateInfo.templateTree.length; j++) {
        let item = templateInfo.templateTree[j];
        if (item.isEqClassRow && (item.eqClassRowHidden === false || item.eqClassRowHidden === true)) {
          delete item.eqClassRowHidden
        }
        if (item.isTempItemInEqClass && (item.itemInEqClassHidden === false || item.itemInEqClassHidden === true)) {
          delete item.itemInEqClassHidden
        }
      }
    }
//    console.log(tableData)
    return tableData
  }


  expandCollapseAHeader(templateInfo, itemKey) {

    let changed = false;
    let clickedItemIndex = templateInfo.templateTree.findIndex(item => item.key === itemKey);

    // not found
    if (clickedItemIndex === -1) {
      changed = false;
    }

    let clickedItem = templateInfo.templateTree[clickedItemIndex];
    if (clickedItem.sectionCollapsed) {
      changed = this.expandAHeader(templateInfo, clickedItem, clickedItemIndex);
    }
    else {
      changed = this.collapseAHeader(templateInfo, clickedItem, clickedItemIndex)
    }

    return changed;
  }

  expandAHeader(templateInfo, clickedItem, clickedItemIndex) {

    let clickedItemLevel = clickedItem.A;

    // if it's already expanded, do nothing
    if (!clickedItem.sectionCollapsed) {
      return false;
    }
    else {
      clickedItem.sectionCollapsed = false;
    }

    // check all its decedents
    for(let i=clickedItemIndex+1; i<templateInfo.templateTree.length && templateInfo.templateTree[i].A > clickedItemLevel; i++) {
      let item = templateInfo.templateTree[i];
      if (!item.sectionCollapsed) {
        item.itemHidden = false;
      }
      // skip the items in this collapsed section
      else {
        item.itemHidden = false;

        let subHeaderItemLevel = item.A;

        let j=i+1; // first item in the sub section
        while (templateInfo.templateTree[j].A > subHeaderItemLevel && j<templateInfo.templateTree.length) {
          j++;
        }
        i = j-1; // move back one item (i++ runs after this) and let the main loop continue
      }
    }
    return true;
  }

  collapseAHeader(templateInfo, clickedItem, clickedItemIndex) {

    let clickedItemLevel = clickedItem.A;

    // if it's already collapsed, do nothing
    if (clickedItem.sectionCollapsed) {
      return false;
    }
    else {
      clickedItem.sectionCollapsed = true;
    }

    // check all its decedents
    for(let i=clickedItemIndex+1; i<templateInfo.templateTree.length && templateInfo.templateTree[i].A > clickedItemLevel; i++) {
      let item = templateInfo.templateTree[i];
      item.itemHidden = true;
    }

    return true;
  }

  expandCollapseAnEqClassRow(templateInfo, itemKey) {

    let changed = false;
    let clickedItemIndex = templateInfo.templateTree.findIndex(item => item.key === itemKey);

    // not found
    if (clickedItemIndex === -1) {
      changed = false;
    }

    let clickedItem = templateInfo.templateTree[clickedItemIndex];

    if (clickedItem.isEqClassRow && !clickedItem.eqClassRowHidden) {
      changed = this.expandAnEqClassRow(templateInfo, clickedItem, clickedItemIndex);
    }
    if (clickedItem.isMultipleItemsInEqClass && !clickedItem.itemInEqClassHidden) {
      changed = this.collapseAnEqClassRow(templateInfo, clickedItem, clickedItemIndex);
    }

    return changed;

  }

  expandAnEqClassRow(templateInfo, clickedItem, clickedItemIndex) {

    clickedItem.eqClassRowHidden = true;

    let k = 1;
    while(k<=clickedItem.codeList.length && clickedItemIndex+k < templateInfo.templateTree.length && templateInfo.templateTree[clickedItemIndex+k].isTempItemInEqClass) {
      let nextItem = templateInfo.templateTree[clickedItemIndex+k];
      nextItem.itemInEqClassHidden = false;
      k++;
    }

    return true;
  }


  // only on the first item in eq class
  collapseAnEqClassRow(templateInfo, clickedItem, clickedItemIndex) {

    // find the eq class item
    let k = clickedItemIndex-1;
    while(k >=0) {
      let preItem = templateInfo.templateTree[k];
      if (preItem.isEqClassRow) {
        let eqClassRow = preItem;
        let eqClassRowIndex = k;

        // change hidden status
        if (eqClassRow.eqClassRowHidden || eqClassRow.eqClassRowHidden === undefined) {
          // show eq class row
          eqClassRow.eqClassRowHidden = false;
          // hide all items in eq class
          let i = 1;
          while(i<=eqClassRow.codeList.length && eqClassRowIndex+i < templateInfo.templateTree.length && templateInfo.templateTree[eqClassRowIndex+i].isTempItemInEqClass) {
            let nextItem = templateInfo.templateTree[eqClassRowIndex+i];
            nextItem.itemInEqClassHidden = true;
            i++;
          }
        }
        break;
      }
      k--;
    }
    return true;
  }


  /**
   * Remove items in the hierarchy that have no code (LOINC or RI) while keeping the hierarchy structure.
   * Group header items do not have to have the code.
   * This is done before the user data is loaded.
   * @param templateInfo an object that contains template info
   * @private
   */
  _preProcessTemplate(templateInfo) {
    let levelStatus = [];
    let start = templateInfo.template.length - 1;

    // initial setup of the levelStatus
    let lastLevel = templateInfo.template[start].A;
    let i = 1, n = parseInt(lastLevel, 10);
    while (i <= n) {
      let status = {};
      status[i + ''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the template starting from the end
    for (let i = start; i >= 0; i--) {
      
      let item = templateInfo.template[i];
      // make RI CODE a string
      item.D = item.D + '';

      // reset the range
      item.low = item.J;
      item.high = item.K;

      // set display name
      item.displayName = this._getDisplayName(item);

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
          item.isTempHeader = true;
          levelStatus[levelStatus.length - 2][itemLevel] = true;
        } else if (itemCode !== "") {
          // do we need to keep a group header who has code but all its children are not kept?
          //item.isTempHeader = true;
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


    let newTemplate = templateInfo.template.filter(item => item.keep)
    newTemplate.forEach(function (item, index) {
      item.key = 'K' + index
    });

    templateInfo.templateTree = newTemplate;

  }


  _getDisplayName(item) {
    //if there is a LOINC number
    //   LOINC_DISPLAY > SHORT_NAME > LONG_COMMON_NAME > RI NAME
    //else
    //   RI NAME
    let name = '';
    if (item.O === 'RI') {
      name = item.G ? item.G : item.B ? item.B : '';
    }
    else {
      name = item.G ? item.G : item.N ? item.N : item.F ? item.F : item.B ? item.B : '';
      //name = item.G ? item.G : item.F ? item.F : item.B ? item.B : '';
    }

    // add code?
    //name = name + '(' + (item.O === 'RI' ? item.D : item.E) + ')'
    return name;
  }

  /**
   * Add a row for equivalence class before the rows that have more than one rows with the same equivalence class
   * @param templateInfo an object that contains template info
   * @private
   */
  _addEquivlaneClassRow(templateInfo) {
    let eqClassList = [], codeList = [];// loincList = [];
    let repeats = 1;    
    let eqClass = '';
    // loop through the items in the template starting from the end
    for (let i = templateInfo.templateTree.length-1; i >= 0; i--) {
      let item = templateInfo.templateTree[i];
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
          let preItem = templateInfo.templateTree[i+1];
          let eqClassRow = Object.assign({}, preItem);
          eqClassRow.isEqClassRow = true; 
          eqClassRow.codeList = codeList;
          //eqClassRow.loincList = loincList;
          // set display name
          eqClassRow.G = eqClass;
          eqClassRow.displayName = eqClass;
          eqClassRow.key = eqClassRow.key + '_EQ';
          eqClassRow.commonUCUM = ''; // ?
          eqClassList.push(
            { index: i+1, 
              row: eqClassRow
            }
          );
          // add flags to the items that belong to this equivalence class
          for (let j=0; j<codeList.length; j++) {
            templateInfo.templateTree[i+1+j].isTempItemInEqClass = true;
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
      templateInfo.templateTree.splice(eqClassList[i].index, 0, eqClassList[i].row);
    }
  }


  // /**
  //  * Reprocess the hierarchy after user data is loaded.
  //  * to remove items that have no user data while keeping the hierarchy structure.
  //  * @param templateInfo an object that contains template info
  //  */
  // _postProcessTemplateTree() {
  //   let levelStatus = [];
  //   let start = this.templateTree.length - 1;
  //
  //   // initial setup of the levelStatus
  //   let lastLevel = this.templateTree[start].A;
  //   let lastLevelStatus = this.templateTree[start].hasData;
  //
  //   // loop through the items in the templateTree starting from the end
  //   for (let i = start; i >= 0; i--) {
  //
  //     let item = this.templateTree[i];
  //     let itemLevel = item.A;
  //
  //     // same level
  //     if (itemLevel === lastLevel) {
  //       if (item.hasData) {
  //         lastLevelStatus = true;
  //       }
  //     }
  //     // upper level (itemLevel === lastLevel - 1)
  //     else if (itemLevel < lastLevel) {
  //       // at least a lower level item is kept
  //       if (lastLevelStatus) {
  //         item.hasData = true;
  //         item.isSectionHeader = true;
  //         levelStatus[levelStatus.length - 1 - k][itemLevel] = true;
  //       }
  //       // remove the previous level info
  //       while(k>0) {
  //         levelStatus.pop();
  //         k--;
  //       }
  //       lastLevel = itemLevel;
  //     }
  //     // lower level (itemLevel === lastLevel + n, where n >= 1)
  //     else {
  //       // initial setup of the levelStatus of the new branch
  //       let i = parseInt(lastLevel, 10) + 1,
  //         n = parseInt(itemLevel, 10);
  //       while (i <= n) {
  //         let status = {};
  //         status[i + ''] = false;
  //         levelStatus.push(status);
  //         i++;
  //       }
  //
  //       if (item.hasData) {
  //         levelStatus[levelStatus.length - 1][itemLevel] = true;
  //       }
  //       lastLevel = itemLevel;
  //
  //     }
  //   }
  // }
  //

  /**
   * Reprocess the hierarchy after user data is loaded.
   * to remove items that have no user data while keeping the hierarchy structure.
   * @param templateInfo an object that contains template info
   * @private
   */
  _postProcessTemplateTree(templateInfo) {
    let levelStatus = [];
    let start = templateInfo.templateTree.length - 1;

    // initial setup of the levelStatus
    let lastLevel = templateInfo.templateTree[start].A;
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

      let item = templateInfo.templateTree[i];
      let itemLevel = item.A;

      // same level
      if (itemLevel === lastLevel) {
        if (item.hasData) {
          levelStatus[levelStatus.length - 1][lastLevel] = true;
        }
      }
      // upper level (itemLevel === lastLevel - 1)
      else if (itemLevel < lastLevel) {
        let k = lastLevel - itemLevel;
        if (k > 1) {
          // console.log(item)
          // console.log(lastLevel)
        }
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length - 1][lastLevel]) {
          item.hasData = true;
          item.isSectionHeader = true;
          levelStatus[levelStatus.length - 1 - k][itemLevel] = true;
        }
        // remove the previous level info
        while(k>0) {
          levelStatus.pop();
          k--;
        }
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
   * Filter user data with the hierarchy.
   * @param templateInfo an object that contains template info
   * @param {*} newData user data from FHIR server.
   * @private
   */
  _filterDataByTemplate(templateInfo, newData) {
    let list = newData.entry;
    if (list) {
      for(let i=0; i<list.length; i++) {    
        let item = list[i];
        let loinc = this._getCode(item);
        let riCode = this._getIdentifier(item);
        let date = this._getDate(item);
        let value = this._getValue(item);
        let unit = this._getUnit(item);
        let valueType = this._getValueType(item);
        let interpretationCode = this._getInterpretation(item);

        // let range = this._getReferenceRange(item);
  
        for(let j=0; j<templateInfo.templateTree.length; j++) {
          let node = templateInfo.templateTree[j];
          // if there is normal range in the hierarchy file
          let abnormal, normalFlag, normalFlagClass;
          if (node.I) {
            if (interpretationCode !== undefined && interpretationCode!=='N') {
              abnormal = true;
              switch (interpretationCode) {
                case "H":
                  //normalFlag = "&#xe601;"; // "\u{1f845}"; //\u{1f809}";
                  normalFlag = "\u{e601}"; // "\u{1f845}"; //\u{1f809}";
                  normalFlagClass = "lf-abnormal-h";
                  break;
                case "L":
                  normalFlag = "\u{e600}"; //"\u{1f847}"; //"\u{1f80b}";
                  normalFlagClass = "lf-abnormal-l";
                  break;
                case "HH":
                  normalFlag = "\u{e603}"; //"\u{2bed}";
                  normalFlagClass = "lf-abnormal-hh";
                  break;
                case "LL":
                  normalFlag = "\u{e602}"; //\u{2bef}";
                  normalFlagClass = "lf-abnormal-ll";
                  break;
                default:
                  normalFlag = "";
              }
            }
            else {
              abnormal = false;
              normalFlag = '';
            }
          }
          // use LOINC or RI CODE for the identifier of the record
          let itemCode = node.O === "RI" ? node.D : node.E;

          let code = node.O === 'RI' ? riCode : loinc; 

          if (!node.sparklineData) {
            node.sparklineData = [];
          }
          if (!node.sparklineData2) {
            node.sparklineData2 = [];
          }


          if (node.isEqClassRow) {
            // add a counter of how many item in the eq class has data
            if (!node.eqClassItems) {
              node.eqClassItems = {};
            }
            for (let k=0; k<node.codeList.length; k++) {
              if (node.codeList[k] === code) {
                node.hasData = true;
                node.eqClassItems[code]=true; // the item has data
//                templateInfo.tsList.set(date);
                if (!node.data) {
                  node.data = {};
                }
                if (!node.data[date]) {
                  node.data[date] = [{value: value, unit: unit, normalFlag: normalFlag,
                    normalFlagClass: normalFlagClass, code: code, abnormal: abnormal}];
                }
                else {
                  node.data[date].push({value: value, unit: unit, normalFlag: normalFlag,
                    normalFlagClass: normalFlagClass, code: code, abnormal: abnormal});
                }
              }
            }
          }
          else if (itemCode === code) {
            if (valueType === "valueQuantity") {
              node.sparklineData.push(value);
              node.sparklineData2.push({x: (new Date(date)).getTime(), y: value});
            }
            node.hasData = true;
            if (!node.data) {
              node.data = {};
            }
            node.data[date] = {value: value, unit: unit, normalFlag: normalFlag,
              normalFlagClass: normalFlagClass, code: code, abnormal: abnormal};
 //           templateInfo.tsList.set(date);
            //   if (range[0].low) {
            //     node.low = range[0].low.value;
            //   }
            //   if (range[0].high) {
            //     node.high = range[0].high.value;  
            //   }            
            // }    
          }
          else if (!node.isTempHeader) {
            //node.sparklineData.push("");
          }
        }
      }  
    }
  }

  /**
   * Precess items that belong to same equivalence classes
   * @param templateInfo an object that contains template info
   * @private
   */
  _countItemsInEqClass(templateInfo) {
    for(let j=0; j<templateInfo.templateTree.length; j++) {
      let item = templateInfo.templateTree[j];
      // has items in this eq class that have values      
      if (item.isEqClassRow && item.eqClassItems && Object.keys(item.eqClassItems).length > 0 ) {
        let itemCodes = Object.keys(item.eqClassItems);
        if (itemCodes.length > 1) {
          item.hasMultipleItemsInEqClass = true;
        }

        let k = 1;
        let firstItemIndex=null, lastItemIndex=null;
        let foundFirst = false;
        while(k<=item.codeList.length && j+k < templateInfo.templateTree.length && templateInfo.templateTree[j+k].isTempItemInEqClass) {
          let nextItem = templateInfo.templateTree[j+k];
          let nextCode = nextItem.O === "RI" ? nextItem.D : nextItem.E;

          // reset status
          nextItem.firstItemInEqClass = false;
          nextItem.lastItemInEqClass = false;

          itemCodes.forEach((code) => {
            if (code === nextCode) {
              nextItem.isMultipleItemsInEqClass = itemCodes.length > 1;
              if (!foundFirst) {
                firstItemIndex = j+k;
                foundFirst = true;
              }
              lastItemIndex = j+k;
            }
          });
          k++;
        }

        if (firstItemIndex !==null) {
          templateInfo.templateTree[firstItemIndex].firstItemInEqClass = true;
        }
        if (lastItemIndex !==null) {
          templateInfo.templateTree[lastItemIndex].lastItemInEqClass = true;
        }

      }
    }
  }
  
  _getDisplayValue(itemValue, key) {

    let unit = this._getUnitName(itemValue);
    //let displayVal = itemValue.normalFlag && itemValue.normalFlag !== 'N' ? itemValue.value + ' *' + itemValue.normalFlag : itemValue.value;
    //let displayVal = itemValue.abnormal ? itemValue.value + ' *' + itemValue.normalFlag : itemValue.value;

    let displayVal = <span key={key}>{itemValue.value} {itemValue.abnormal && <i className={`iconfont ${itemValue.normalFlagClass}`}>{itemValue.normalFlag}</i>}</span>;

    let valWithUnit = unit ? itemValue.value + ' ' + unit : itemValue.value;

    //let displayValWithUnit = itemValue.normalFlag && itemValue.normalFlag !== 'N' ? valWithUnit + ' *' + itemValue.normalFlag : valWithUnit;
    //let displayValWithUnit = itemValue.abnormal ? valWithUnit + ' *' + itemValue.normalFlag : valWithUnit;
    let displayValWithUnit = <span key={key}> {valWithUnit} {itemValue.abnormal && <i className={`iconfont ${itemValue.normalFlagClass}`}>{itemValue.normalFlag}</i>}</span>;

    return  {value: displayVal, valueWithUnit: displayValWithUnit, abnormal: itemValue.abnormal}
  }

  
  _getDisplayValueForEqClassRow(commonUnit, commonUCUM, itemValues, node) {
    
    let ret, displayValue = [], displayValueWithUnit = [];

    itemValues.forEach((val, index) => {

      if (commonUCUM && val.unit && val.unit.code !== commonUCUM) {
        // special handling for mass unit conversion
        if (node.R && node.S === 'x') {
          let result = this._msUnitConvert(node.D, val.value, val.unit.code, commonUCUM, node.R);
          if (result && !isNaN(result)) {
            let toVal = Math.round(result * 100) / 100;
            let unitName = commonUnit ? commonUnit : commonUCUM;

            //let displayVal = val.interpretationCode && val.interpretationCode !== 'N' ? toVal + ' *' + val.interpretationCode : toVal;
            //let displayVal = val.abnormal ? toVal + ' *' + val.normalFlag : toVal;
            let displayVal = <span key={index}>{toVal} {val.abnormal && <i className={`iconfont ${val.normalFlagClass}`}>{val.normalFlag}</i>}</span>;

            let valWithUnit = unitName ? toVal + ' ' + unitName : toVal;
            //let displayValWithUnit = val.interpretationCode && val.interpretationCode !== 'N' ? valWithUnit + ' *' + val.interpretationCode : valWithUnit;
            //let displayValWithUnit = val.abnormal ? valWithUnit + ' *' + val.normalFlag : valWithUnit;
            let displayValWithUnit = <span key={index}>{valWithUnit} {val.abnormal && <i className={`iconfont ${val.normalFlagClass}`}>{val.normalFlag}</i>}</span>;

            displayValue.push(displayVal);
            displayValueWithUnit.push(displayValWithUnit);
          }
          // failed or error in unit conversion
          else {
            let dispVal = this._getDisplayValue(val, index);
            displayValue.push(dispVal.displayValue);
            displayValueWithUnit.push(dispVal.displayValueWithUnit);
          }
        }
        // other units
        else {
          let result = this.ucumUtils.convertUnitTo(val.unit.code, val.value, commonUCUM, false);
          if (result.status === 'succeeded') {
            let unitName = commonUnit ? commonUnit : result.printSymbol;
            let toVal = Math.round(result.toVal * 100)/100;

            //let displayVal = val.interpretationCode && val.interpretationCode !== 'N' ? toVal + ' *' + val.interpretationCode : toVal;
            //let displayVal = val.abnormal ? toVal + ' *' + val.normalFlag : toVal;
            let displayVal = <span key={index}>{toVal} {val.abnormal && <i className={`iconfont ${val.normalFlagClass}`}>{val.normalFlag}</i>}</span>;

            let valWithUnit = unitName ? toVal + ' ' + unitName : toVal;

            //let displayValWithUnit = val.interpretationCode && val.interpretationCode !== 'N' ? valWithUnit + ' *' + val.interpretationCode : valWithUnit;
            //let displayValWithUnit = val.abnormal ? valWithUnit + ' *' + val.normalFlag : valWithUnit;
            let displayValWithUnit = <span key={index}>{valWithUnit} {val.abnormal && <i className={`iconfont ${val.normalFlagClass}`}>{val.normalFlag}</i>}</span>;

            displayValue.push(displayVal);
            displayValueWithUnit.push(displayValWithUnit);
          }
          // failed or error in unit conversion
          else {
            let dispVal = this._getDisplayValue(val, index);
            displayValue.push(dispVal.displayValue);
            displayValueWithUnit.push(dispVal.displayValueWithUnit);
          }
        }
      }
      else {
        let dispVal = this._getDisplayValue(val, index);
        displayValue.push(dispVal.value);
        displayValueWithUnit.push(dispVal.valueWithUnit);
      }
    });

    let value = displayValue
        .reduce((prev, curr) => [prev, ', ', curr]);
    let valueWithUnit = displayValueWithUnit
        .reduce((prev, curr) => [prev, ', ', curr]);

    ret =  {
      value: <span>{value}</span>,
      valueWithUnit: <span>{valueWithUnit}</span>
    };

    return ret;
  }


  _setNodeAggregatedData(templateInfo, node) {

    let dateKeyCounts = {};

    let dateArray = Object.keys(node.data);
    for (var date of dateArray) {

      let mntDate  = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS");
      let dateKey, columnLabel;

      templateInfo.zoomLevel.forEach((type) => {
        let mntDate2 = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS");
        let colInfo = {
          start: type==='date' ?  mntDate2.valueOf() : mntDate2.startOf(type).valueOf(),
          end: type==='date' ? mntDate2.valueOf() : mntDate2.endOf(type).valueOf()
        };

        switch (type) {
          case 'day':
            columnLabel = <div><div>{mntDate.format("YYYY")}</div><div>{mntDate.format("MM/DD")}</div></div>;
            dateKey = 'day_' + mntDate.format("YYYY/MM/DD");
            colInfo.label = columnLabel;
            colInfo.tsLabel = mntDate.format("YYYY/MM/DD");
            templateInfo.dayList.set(dateKey, colInfo);
            if (dateKeyCounts[dateKey]) {
              dateKeyCounts[dateKey] += 1;
            }
            break;
          case 'week':
            // use a separate moment object because startOf and endOf change the value
            let mntDate2 = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS");
            let startOfWeek = mntDate2.startOf('week').format('MM/DD');
            let startYear = mntDate2.startOf('week').year();
            let endOfWeek = mntDate2.endOf('week').format('MM/DD');
            let endYear = mntDate2.endOf('week').year();
            if (startYear === endYear) {
              columnLabel =<div><div> {startOfWeek}</div><div> {'-' + endOfWeek}</div><div>{startYear}</div></div>
            }
            else {
              columnLabel =<div><div> {startOfWeek + '/' + startYear}</div><div> {'-' + endOfWeek + '/' + startYear}</div></div>
            }
            dateKey = 'week_' + mntDate.format("YYYY-WW");
            colInfo.label = columnLabel;
            colInfo.tsLabel = startYear === endYear ? startOfWeek + "-" + endOfWeek + ", " + startYear : startOfWeek + "/" + startYear + "-" + endOfWeek + '/' + startYear;
            templateInfo.weekList.set(dateKey, colInfo);
            break;
          case 'month':
            columnLabel =  mntDate.format("YYYY/MM")
            dateKey = 'month_' + columnLabel;
            colInfo.label = columnLabel;
            colInfo.tsLabel = columnLabel;
            templateInfo.monthList.set(dateKey, colInfo);
            break;
          case 'quarter':
            columnLabel = mntDate.year() + ' Q' + mntDate.quarters();
            dateKey = 'quarter_' + mntDate.year() + '-' + mntDate.quarters();
            colInfo.label = columnLabel;
            colInfo.tsLabel = columnLabel;
            templateInfo.quarterList.set(dateKey, colInfo);
            break;
          case 'year':
            columnLabel = mntDate.year();
            dateKey = 'year_' + mntDate.year();
            colInfo.label = columnLabel;
            colInfo.tsLabel = columnLabel;
            templateInfo.yearList.set(dateKey, colInfo);
            break;
          case 'date':
          default: 
            columnLabel = <div><div>{mntDate.format("YYYY")}</div><div>{mntDate.format("MM/DD")}</div><div>{mntDate.format("HH:mm")}</div></div>;
            dateKey = 'date_' + date;
            colInfo.label = columnLabel;
            colInfo.tsLabel = mntDate.format("YYYY/MM/DD HH:mm");

            templateInfo.dateList.set(dateKey, colInfo);
        }
        // count dateKeys
        dateKeyCounts[dateKey] = dateKeyCounts[dateKey] ? dateKeyCounts[dateKey] + 1 : 1;            

        // use the most recent value (just update once)
        if (!node[dateKey]) {
          if (node.isEqClassRow) {
            // filter duplicated codes (when such data at the same timestamp are retrieved from FHIR server)
            if (Array.isArray(node.data[date])) {
              let newMap = {};
              node.data[date].forEach((dp) => { newMap[dp.code] = dp });
              node.data[date] = Object.values(newMap);  
            }
            node[dateKey] = this._getDisplayValueForEqClassRow(node.P, node.Q, node.data[date], node);
          }
          else {
            node[dateKey] = this._getDisplayValue(node.data[date], dateKey);
          }          
        }  
        
      })

    }

    // TODO: Need a new solution to add back "...", vulue and valueWithUnit are now JSX, not strings

    // add decorator for zoom levels that have more than one data points
    // for (let dateKey in dateKeyCounts) {
    //   if (dateKeyCounts[dateKey] > 1 && !node[dateKey].dotAdded && !dateKey.match(/^date/)) {
    //     node[dateKey].value += ' ...';
    //     node[dateKey].valueWithUnit += ' ...';
    //     node[dateKey].dotAdded = true;
    //   }
    // }

  }


  /**
   * sort data by the keys in reverse order, in dateList, dayList, weekList and etc, so that columns are display with the most recent date first. 
   */
  _sortColumnHeaders(templateInfo) {

    templateInfo.dateList = new Map([...templateInfo.dateList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    templateInfo.dayList = new Map([...templateInfo.dayList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    templateInfo.weekList = new Map([...templateInfo.weekList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    templateInfo.monthList = new Map([...templateInfo.monthList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    templateInfo.quarterList = new Map([...templateInfo.quarterList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    templateInfo.yearList = new Map([...templateInfo.yearList.entries()].sort((a,b)=>{return a[0] < b[0] ? 1 : -1 }));
    
  }

  /**
   * create aggregated data on day, week, month and year level, after the data is loaded and process on date (timestamp)
   */
  _addAggregatedData(templateInfo) {
    for(let j=0; j<templateInfo.templateTree.length; j++) {
      let node = templateInfo.templateTree[j];
      if (node.hasData && node.data) {
        this._setNodeAggregatedData(templateInfo, node)
      }
      
    }

  }

  /**
   * Export the filtered user data
   * @param showEqClass show equivalent class row only, if true,
   * or show the equivalent class row and the included individual items
   * @returns {*[]}
   * @private
   */
  _exportTableData(templateInfo, showEqClass, force) {
    // return this.templateTree.filter(node => node.hasData && !node.itemHidden &&
    //     (showEqClass && (node.hasMultipleItemsInEqClass || !node.isEqClassRow && !node.isMultipleItemsInEqClass) ||
    //         !showEqClass && !node.isEqClassRow
    //     )
    // );

    return force ?
        templateInfo.templateTree.filter(node => node.hasData && !node.itemHidden &&
            (showEqClass && (node.hasMultipleItemsInEqClass || !node.isEqClassRow && !node.isMultipleItemsInEqClass) ||
                !showEqClass && !node.isEqClassRow
            )
        )
        :
        templateInfo.templateTree.filter(node => node.hasData && !node.itemHidden &&
            (showEqClass && (node.hasMultipleItemsInEqClass || !node.isEqClassRow && (!node.isMultipleItemsInEqClass || node.itemInEqClassHidden === false)) && !node.eqClassRowHidden ||
                !showEqClass && (!node.isEqClassRow || node.isEqClassRow && node.eqClassRowHidden === false) && !node.itemInEqClassHidden
            )
        );

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
    let mntDate  = moment(date, "YYYY-MM-DDTHH:mm:ss.SSS");
      
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
    if (resource) {
      if (resource.valueQuantity) {
        ret = resource.valueQuantity.value;
      }
      else if (resource.valueCodeableConcept) {
        if (resource.valueCodeableConcept.text) {
          ret = resource.valueCodeableConcept.text;
        }
        else if (resource.valueCodeableConcept.coding && resource.valueCodeableConcept.coding[0]) {
          if (resource.valueCodeableConcept.coding[0].display) {
            ret = resource.valueCodeableConcept.coding[0].display;
          }
          else {
            ret = resource.valueCodeableConcept.coding[0].code;
          }
        }
      }
    }
    return ret;
  }

  _getValueType(entry) {
    let ret;
    let resource = entry.resource;
    if (resource) {
      if (resource.valueQuantity) {
        ret = "valueQuantity";
      }
      else if (resource.valueCodeableConcept) {
        ret = "valueCodeableConcept";
      }
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
    if (resource && resource.interpretation && resource.interpretation.code && resource.interpretation.coding[0]) {
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


  /** temp. solution for mass unit conversion */

  /**
   * Convert from mass concentration to substance concentration
   * @param value the amount of value to be converted from mass concentration to substance concentration
   * @param mcUnit mass (concentration) unit, e.g., g/L, mg/dL, etc.
   * @param scUnit substance (concentration) unit, e.g, mol/L, umol/L, etc.
   * @param moleWeight molecular weight, decided by the specific substance.
   */
  _unitsConvNormFactor = { // Normalizing factor to make it g/L ==> mol/L conversion. Key="<from-unit>-<to-unit>"
    'g/dl-mmol/l': 10000,
    'mg/dl-mmol/l': 10,
    'mg/dl-umol/l': 10000,
    'g/dl-umol/l': 10000000,
    'mmol/l-g/dl': 0.0001,
    'mmol/l-mg/dl': 0.1,
    'umol/l-mg/dl': 0.0001,
    'umol/l-g/dl': 0.0000001

  };

  _unitsConvFunc = { // direct conversion function. Key="<service-code>-<from-unit>-<to-unit>"
    '876-pg-fmol': (x) => x * 0.06207,  // per Clem & Wikipedia
    '877-g/dl-mmol/l': (x) => x * 19.8 / 32, // Using the lower normal range ratio, 32 for conventional, 19.8 for SI
    '876z-fmol-pg': (x) => x / 0.06207,
    '877z-mmol/L-g/dL': (x) => x * 32 / 19.8
  };

  _msUnitConvert(serviceCode, value, fromUnit, toUnit, moleWeight) {
    function getKey() { // get the factor from the above table using [<service-code>] <from-unit> <to-unit>
      return [].slice.call(arguments).map(x=>x.trim()).join('-').toLowerCase();
    }

    value = parseFloat(value);
    let convFunc = this._unitsConvFunc[getKey(serviceCode, fromUnit, toUnit)];
    if(! convFunc) {
      let convFactor = this._unitsConvNormFactor[getKey(fromUnit, toUnit)];
      if(convFactor && moleWeight) {
        if (toUnit.match(/mol/)) {
          convFunc = (value, moleWeight) => (value * convFactor / moleWeight);
        }
        else {
          convFunc = (value, moleWeight) => (value * convFactor * moleWeight);
        }

      }
    }
    if(! convFunc || isNaN(value)) {
      throw Error(`msUnitConvert - unable convert: (${value}, ${serviceCode}, ${fromUnit}, ${toUnit}`);
    }

    return this._toPrecision(convFunc(value, moleWeight), 2, 2);
  }

  valueMC2SC(serviceCode, value, mcUnit, scUnit, moleWeight) {
    function getKey() { // get the factor from the above table using [<service-code>] <from-unit> <to-unit>
      return [].slice.call(arguments).map(x=>x.trim()).join('-').toLowerCase();
    }

    value = parseFloat(value);
    let convFunc = this._unitsConvFunc[getKey(serviceCode, mcUnit, scUnit)];
    if(! convFunc) {
      let convFactor = this._unitsConvNormFactor[getKey(mcUnit, scUnit)];
      if(convFactor && moleWeight) {
        convFunc = (value, moleWeight) => (value * convFactor / moleWeight);
      }
    }
    if(! convFunc || isNaN(value)) {
      throw Error(`valueMC2SC - unable convert: (${value}, ${serviceCode}, ${mcUnit}, ${scUnit}`);
    }

    return this._toPrecision(convFunc(value, moleWeight), 2, 2);
  }

  valueSC2MC(serviceCode, value, scUnit, mcUnit, moleWeight) {
    function getKey() { // get the factor from the above table using [<service-code>] <from-unit> <to-unit>
      return [].slice.call(arguments).map(x=>x.trim()).join('-').toLowerCase();
    }

    value = parseFloat(value);
    let convFunc = this._unitsConvFunc[getKey(serviceCode, scUnit, mcUnit)];
    if(! convFunc) {
      let convFactor = this._unitsConvNormFactor[getKey(mcUnit, scUnit)];
      if(convFactor && moleWeight) {
        convFunc = (value, moleWeight) => (value / convFactor * moleWeight);
      }
    }
    if(! convFunc || isNaN(value)) {
      throw Error(`valueSC2MC - unable convert: (${value}, ${serviceCode}, ${scUnit}, ${mcUnit}`);
    }

    return this._toPrecision(convFunc(value, moleWeight), 2, 2);
  }

  /**
   * Clean up the number keeping at least numDecimal decimal digits and numSig significant digits,
   * does not necessarily respect the classic definition of "significant figures"
   * @param value
   * @param numDecimal number of decimal digits, required non-zero.
   * @param numSig number of significant digits
   * @return {number}
   */
  _toPrecision(value, numDecimal, numSig) {
    numDecimal = numDecimal? numDecimal: 1;
    numSig = numSig? numSig: 1;

    if(value <= 1) {
      return parseFloat(value.toPrecision(Math.max(numDecimal, numSig)));
    }

    let numWhole = 0, tmpValue = value;
    for(; tmpValue > 1; ++numWhole, tmpValue /= 10);

    return parseFloat(value.toPrecision(Math.max(numDecimal + numWhole), numSig));
  }

  /** end of temp. solution for mass unit conversion */


}

export default new TemplateDataStore();
