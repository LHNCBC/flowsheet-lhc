import React from 'react';
//import { observable, action, computed } from 'mobx';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SparkLine from '../components/sparkLine';
import fhirStore from './fhirDataStore';
//import template from './templateDataStore';


const COLUMN_NUM = 30;
const COLUMN_SIZE = 100;
const PRELOAD_PAGE_NUM = 2;
const SCROLL_BUFFER_SIZE = 40; // the buffer size before right scrolling to the right end of the a scroll bar, when a new data query is sent to the server to request next page's data

class TableDataStore {
  columnNum = COLUMN_NUM;
  columnSize = COLUMN_SIZE;
  preloadPageNum = PRELOAD_PAGE_NUM;
  scrollBufferSize = SCROLL_BUFFER_SIZE;

  template = null;
  templateTree = [];
  templateData = [];
  tableData = [];
  tableColumns = [];
  dateList = new Map();
  
  setTemplate(template) {
    this.template = template;
    this.templateTree = this._processTemplate();
    
  }

  setColumnNum(colNum) {
    this.columnNum = colNum;
  }

  setColumnSize(colSize) {
    this.columnSize = colSize;
  }

  setPreloadPageNum(pageNum) {
    this.preloadPageNum = pageNum;
  }

  setScrollBufferSize(bufferSize) {
    this.scrollBufferSize = bufferSize;
  }

  // NormalRange = (props) =>  ({
  //   const range = props.range;
  //   if (range.min && range.max) {
  //     return 
  //     <React.Fragment>
  //       <SparklinesReferenceLine type="custom" value={range.max} /><SparklinesReferenceLine type="custom" value={range.min} />
  //       </React.Fragment>
  //   }
  //   else if (range.min) {
  //     return <SparklinesReferenceLine type="custom" value={range.min} />
  //   }
  //   else if (range.max) {
  //     return <SparklinesReferenceLine type="custom" value={range.max} />
  //   }
  //   else {
  //     return null;
  //   }
    
  // })


  getColumnHeaders() {

    // test name columns
    let col1 = {
      title: 'Names', 
      dataIndex: 'name', 
      key: 'a', 
      width: 250,  
      fixed: 'left',
      render: (text, record) => (
        <span>{ String.fromCharCode(160).repeat((parseInt(record.L)-1)*2) + record.T}
        </span>
      )
    }
    // sparkline 
    let col2 = {
      title: 'Sparkline', 
      dataIndex: 'sparklineData', 
      key: 'b', 
      width: 120,
      //fixed: 'left',
      render: (text, record) => (
        <SparkLine record={record}></SparkLine>
      ),
    }

    // data columns
    let restCols = [];
    for (var date of this.dateList.keys()) {
      restCols.push({
        title: this._formatDate(date),
        dataIndex: date, 
        key: date, 
        width: 100,
      })

    }

    var spaceCol = {
      title: '', 
      dataIndex: '', 
      key: 'space', 
      
    }

    return [col1, col2,...restCols];
  }

  _formatDate(date) {
    let formatted = '';
    if (date) {
      let dateObj = new Date(date);
      // formatted = dateObj.toDateString() + " " + dateObj.toLocaleTimeString();
      formatted = dateObj.toLocaleString();
    }

    return formatted;
  }

  getFirstPageData(patientId) {
    let that = this;
    return fhirStore.getAllObservationByPatientId(patientId)
      .then(function(data) {
        console.log(data);
        that._filterDataByTemplate(data);
        that._processTemplateTree();
        //console.log(that.templateTree);
        let tableData = that._exportTableData();
        that.tableData = tableData;
        return tableData
        //console.log(that.tableData)
      })
      .catch(function(error) {
        console.log(error);
      });
    
  }

  getNextPageData() {
    let that = this;
    return fhirStore.getNextPageData()
      .then(function(data) {
        console.log(data);
        that._filterDataByTemplate(data);
        that._processTemplateTree();
        //console.log(that.templateTree);
        let tableData = that._exportTableData();
        that.tableData = tableData;
        return tableData
        //console.log(that.tableData)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  _filterDataByTemplate(newData) {
    let list = newData.entry;
    
    for(let i=0; i<list.length; i++) {
      let item = list[i];
      let code = this._getCode(item);
      let date = this._getDate(item);
      let value = this._getValue(item);
      let interpretationCode = this._getInterpretation(item);
      let displayValue = interpretationCode && interpretationCode !== 'N' ? value + ' *' + interpretationCode : value;

      let range = this._getReferenceRange(item);

      for(let j=0; j<this.templateTree.length; j++) {
        let node = this.templateTree[j];
        if (!node.sparklineData) {
          node.sparklineData = [];
        }
        if (node.C === code) {
          node.sparklineData.push(value);
          node.hasData = true;
          node[date] = displayValue;
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

  _getValue(entry) {
    let ret;
    let resource = entry.resource;
    if (resource && resource.valueQuantity) {
      ret = resource.valueQuantity.value;
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

  _processTemplate() {
    let levelStatus = [];
    let start = this.template.length - 1;
    
    // initial setup of the levelStatus
    let lastLevel = this.template[start].L;
    let i = 1, n = parseInt(lastLevel);
    while (i <= n) {
      let status = {};
      status[i +''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the template starting from the end
    for(let i=start; i>=0; i--) {
      //console.log(levelStatus);

      let item = this.template[i];
      // same level
      if (item.L === lastLevel) {
        if (item.C !=="") {
          levelStatus[levelStatus.length-1][lastLevel] = true;          
          item.keep = true;
        }
      }
      // upper level (item.L === lastLevel - 1)
      else if (item.L < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length-1][lastLevel]) {
          item.keep = true;
          item.isHeader = true;
          levelStatus[levelStatus.length-2][item.L] = true;
        }
        else if (item.C != "") {
          // do we need to keep a group header who has code but all its children are not kept?
          //item.isHeader = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = item.L;
      }
      // lower level (item.L === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel) + 1, n = parseInt(item.L);
        while (i <= n) {
          let status = {};
          status[i +''] = false;
          levelStatus.push(status);
          i++;
        }

        if (item.C !=="") {
          item.keep = true;
          levelStatus[levelStatus.length-1][item.L] = true;
        }        
        lastLevel = item.L;
      }
    }

    let newTemplate = this.template.filter(item => item.keep)
    newTemplate.forEach(function(item, index) {
      item.key = 'K' + index
    });
    
    return newTemplate;    
  

  }

  _processTemplateTree() {
    let levelStatus = [];
    let start = this.templateTree.length - 1;
    
    // initial setup of the levelStatus
    let lastLevel = this.templateTree[start].L;
    let i = 1, n = parseInt(lastLevel);
    while (i <= n) {
      let status = {};
      status[i +''] = false;
      levelStatus.push(status);
      i++;
    }

    // loop through the items in the templateTree starting from the end
    for(let i=start; i>=0; i--) {
      //console.log(levelStatus);

      let item = this.templateTree[i];
      // same level
      if (item.L === lastLevel) {
        if (item.hasData) {
          levelStatus[levelStatus.length-1][lastLevel] = true;                    
        }
      }
      // upper level (item.L === lastLevel - 1)
      else if (item.L < lastLevel) {
        // at least a lower level item is kept
        if (levelStatus[levelStatus.length-1][lastLevel]) {
          item.hasData = true;
          item.isSectionHeader = true;
          levelStatus[levelStatus.length-2][item.L] = true;
        }
        // remove the previous level info
        levelStatus.pop();
        lastLevel = item.L;
      }
      // lower level (item.L === lastLevel + n, where n >= 1)
      else {
        // initial setup of the levelStatus of the new branch
        let i = parseInt(lastLevel) + 1, n = parseInt(item.L);
        while (i <= n) {
          let status = {};
          status[i +''] = false;
          levelStatus.push(status);
          i++;
        }

        if (item.hasData) {          
          levelStatus[levelStatus.length-1][item.L] = true;
        }        
        lastLevel = item.L;
      }
    }
  }
}


export default new TableDataStore();