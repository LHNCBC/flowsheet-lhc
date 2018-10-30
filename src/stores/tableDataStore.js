import React from 'react';
import { Button, Switch } from 'antd';
//import { observable, action, computed } from 'mobx';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SparkLine from '../components/sparkLine';
import fhirStore from './fhirDataStore';
import templateStore from './templateDataStore';

import moment from 'moment';


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
  
  setTemplate(temp) {
    templateStore.setTemplate(temp);    
  }

  getColumnHeaders(showUnit, zoomLevel) {

    // test name columns
    let col1 = {
      title: 'Name', 
      dataIndex: 'name', 
      key: 'a', 
      width: this.NAME_COLUMN_SIZE,  
      fixed: 'left',
      className: 'lf-item-name',
      render: (text, record) => (
        <span>
          {/* <span>{ String.fromCharCode(160).repeat((parseInt(record.A)-1)*2) } </span>           */}
          <span>{this._getDisplayName(record)}</span>
          {record.isEqClassRow && '[' + Object.keys(record.eqClassItems).length + ']'}  {/* e with a circle */} {/* String.fromCharCode(9428) */}
        </span>
        
      )
    }
    // sparkline 
    let col2 = {
      title: 'Sparkline', 
      dataIndex: 'sparklineData', 
      key: 'b', 
      width: this.CHART_COLUMN_SIZE,
      fixed: 'left',
      className: 'lf-sparkline',
      render: (text, record) => (
        <SparkLine record={record}></SparkLine>
      ),
    }

    // data columns
    let restCols = [];
    let columnList = this.tableColumnInfo[zoomLevel];
    if (columnList) {
      for (let [dateKey, columnLabel] of columnList) {
        restCols.push({
          title: columnLabel,
          dataIndex: showUnit ? dateKey + '.valueWithUnit' : dateKey + '.value', 
          key: dateKey, 
          width: this.COLUMN_SIZE
        })
  
      }  
    }

    var spaceCol = {
      title: '', 
      dataIndex: '', 
      key: 'space', 
      
    }

    this.tableWidth = restCols.length * this.COLUMN_SIZE + this.CHART_COLUMN_SIZE + this.NAME_COLUMN_SIZE;

    return [col1, col2,...restCols, spaceCol];
  }

  _getDisplayName(item) {
    //if there is a LOINC number
    //   LOINC_DISPLAY > SHORT_NAME > LONG_COMMON_NAME > RI NAME
    //else
    //   RI NAME
    let name = '';
    if (item.E) {
      name = item.G ? item.G : item.N ? item.N : item.F ? item.F : item.B ? item.B : '';
    }
    else {
      name = item.B ? item.B : '';
    }

    // add code?
    name = name + '(' + (item.O === 'RI' ? item.D : item.E) + ')'
    return name;
    // return item.E ?  //LOINC
    //           item.G ? item.G : //LOINC_DISPLAY
    //                    item.N ? item.N : //SHORT_NAME
    //                             item.F ? item.F : //LONG_COMMON_NAME
    //                                      item.B ? item.B : "" // RI NAME
    //        :
    //        item.B ? item.B : "" // RI NAME
  }


  getFirstPageData(patientId) {
    let that = this;
    return fhirStore.getAllObservationByPatientId(patientId)
      .then(function(data) {
        console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data)
        console.log(tableData);
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

  getNextPageData() {
    let that = this;
    return fhirStore.getNextPageData()
      .then(function(data) {
        console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data)
        console.log(tableData);
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


}


export default new TableDataStore();