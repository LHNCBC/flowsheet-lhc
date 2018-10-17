import React from 'react';
//import { observable, action, computed } from 'mobx';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import SparkLine from '../components/sparkLine';
import fhirStore from './fhirDataStore';
import templateStore from './templateDataStore';

import moment from 'moment';


class TableDataStore {
  COLUMN_NUM = 30;
  COLUMN_SIZE = 120;
  NAME_COLUMN_SIZE = 250;
  CHART_COLUMN_SIZE = 100;
  PRELOAD_PAGE_NUM = 2;
  SCROLL_BUFFER_SIZE = 40; // the buffer size before right scrolling to the right end of the a scroll bar, when a new data query is sent to the server to request next page's data

  tableWidth = this.COLUMN_NUM * this.COLUMN_SIZE;

  // template = null;
  // templateTree = [];
  tableData = [];
  tableColumns = [];
  dateList = new Map();
  moreData = false;
  retrievedNumOfRes = 0;
  availableNumOfRes = 0;
  
  setTemplate(temp) {
    templateStore.setTemplate(temp);    
  }

  getColumnHeaders(withUnit) {

    // test name columns
    let col1 = {
      title: 'Name', 
      dataIndex: 'name', 
      key: 'a', 
      width: this.NAME_COLUMN_SIZE,  
      fixed: 'left',
      className: 'lf-item-name',
      render: (text, record) => (
        <span>{ String.fromCharCode(160).repeat((parseInt(record.A)-1)*2) + this._getDisplayName(record) +"|"+ record.A}
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
      render: (text, record) => (
        <SparkLine record={record}></SparkLine>
      ),
    }

    // data columns
    let restCols = [];
    for (var date of this.dateList.keys()) {
      restCols.push({
        title: <div><div>{this._formatDate(date).date}</div><div>{this._formatDate(date).time}</div></div>,
        dataIndex: withUnit ? date + '.valueWithUnit' : date + '.value', 
        key: date, 
        width: this.COLUMN_SIZE
      })

    }

    this.tableWidth = restCols.length * this.COLUMN_SIZE + this.CHART_COLUMN_SIZE + this.NAME_COLUMN_SIZE;

    return [col1, col2,...restCols];
  }

  _getDisplayName(item) {
    return item.G ? item.G : item.B ? item.B : item.F ? item.F : "";
  }

  _formatDate(date) {
    let formatted = '';
    if (date) {
      let dateObj = new Date(date);
      formatted = moment(dateObj).format("MM/DD/YYYY, HH:mm:ss");
      // formatted = dateObj.getMonth() + '/' +
      //             dateObj.getDate() + '/' +
      //             dateObj.getFullYear() + 1 +'<br>'+
      //             dateObj.getHours() + ':' +
      //             dateObj.getMinutes() + ':' +
      //             dateObj.getSeconds();
      formatted = {
        date: moment(dateObj).format("MM/DD/YYYY"),
        time: moment(dateObj).format("HH:mm:ss")
      }
    }

    return formatted;
  }

  getFirstPageData(patientId) {
    let that = this;
    return fhirStore.getAllObservationByPatientId(patientId)
      .then(function(data) {
        console.log(data);
        templateStore.filterDataByTemplate(data);
        templateStore.postProcessTemplateTree();
        that.dateList = templateStore.dateList;
        let tableData = templateStore.exportTableData();
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
        templateStore.filterDataByTemplate(data);
        templateStore.postProcessTemplateTree();
        that.dateList = templateStore.dateList;
        let tableData = templateStore.exportTableData();
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