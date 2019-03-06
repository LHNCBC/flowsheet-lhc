import React from 'react';
import fhirStore from './fhirDataStore';
import templateStore from './templateDataStore';

class TableDataStore {
  COLUMN_NUM = 30;
  COLUMN_SIZE = 66;
  NAME_COLUMN_SIZE = 250;
  CHART_COLUMN_SIZE = 100;
  PRELOAD_PAGE_NUM = 2;
  SCROLL_BUFFER_SIZE = 40; // the buffer size before right scrolling to the right end of the a scroll bar, when a new data query is sent to the server to request next page's data

  tableWidth = this.COLUMN_NUM * this.COLUMN_SIZE;

  tableData = [];
  tableColumnInfo = new Map();
  dateList = new Map();
  moreData = false;
  retrievedNumOfRes = 0;
  availableNumOfRes = 0;
  dateStart = 0;
  dateEnd = 0;
  
  setTemplate(temp) {
    templateStore.setTemplate(temp);    
  }

  getColumnHeaders(zoomLevel) {

    // test name columns
    let colName = {
      title: 'Name', 
      dataKey: 'name',
      key: 'name',
    };
    // spark line
    let colSparkline = {
      title: 'Sparkline', 
      dataIndex: 'sparklineData',
      key: 'sparklineData',
    };

    // data columns
    let restCols = [];
    let columnList = this.tableColumnInfo[zoomLevel];
    if (columnList) {
      for (let [dateKey, colInfo] of columnList) {
        restCols.push({
          title: colInfo.label,
          tsLabel : colInfo.tsLabel,
          dataKey: dateKey,
          key: dateKey,
          start: colInfo.start,
          end: colInfo.end
        })
      }  
    }

    return [colName, colSparkline, ...restCols];

  }


  getFirstPageData(patientId, showEqClass) {
    let that = this;
    return fhirStore.getAllObservationByPatientId(patientId)
      .then(function(data) {
        //console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data, showEqClass);
        console.log(tableData);
        console.log(columnInfo);
        that.dateList = templateStore.dateList;
        that.tableColumnInfo = columnInfo;
        that.tableData = tableData;
        that.moreData = fhirStore.moreData;
        that.retrievedNumOfRes = fhirStore.resourceRetrieved;
        that.availableNumOfRes = fhirStore.resourceAvailable;

        return {tableData: tableData, moreData: that.moreData}
        
      })
      .catch(function(error) {
        console.log(error);
      });
    
  }

  getNextPageData(showEqClass) {
    let that = this;
    return fhirStore.getNextPageData()
      .then(function(data) {
        //console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data, showEqClass)
        console.log(tableData);
        console.log(columnInfo);
        that.dateList = templateStore.dateList;
        that.tableColumnInfo = columnInfo;
        that.tableData = tableData;
        that.moreData = fhirStore.moreData;
        that.retrievedNumOfRes += fhirStore.resourceRetrieved;
        that.availableNumOfRes = fhirStore.resourceAvailable;
        return {tableData: tableData, moreData: that.moreData}
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  resetData(showEqClass, force) {
    return templateStore.resetTableData(showEqClass, force)
  }

  expandCollapseAHeader(itemKey) {
    return templateStore.expandCollapseAHeader(itemKey);
  }

  expandCollapseAnEqClassRow(itemKey) {
    return templateStore.expandCollapseAnEqClassRow(itemKey);
  }
}


export default new TableDataStore();