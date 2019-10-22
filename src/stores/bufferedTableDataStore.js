import React from 'react';
import tableStore from './tableDataStore';

class BufferedTableDataStore {

  // setTemplate
  // getFirstPageData
  // getColumnHeaders
  // getNextPageData
  // getScrollBufferSize (not used)
  // resetData

  // expandCollapseAHeader
  // expandCollapseAnEqClassRow
  // getRetrievedNumOfRes
  // getAvailableNumOfRes
  // getColumnSize
  // getFirstObservationDate
  // getLastObservationDate


  currentPageData = {
    dateList: null,
    tableColumnInfo: null,
    tableData: null,
    moreData: null,
    retrievedNumOfRes: null,
    availableNumOfRes: null,
    columns: null,
    loaded: null
  };

  nextPageData = {
    dateList: null,
    tableColumnInfo: null,
    tableData: null,
    moreData: null,
    retrievedNumOfRes: null,
    availableNumOfRes: null,
    columns: null,
    loaded: null
  };



  currentStore() {
    return this.activeStore === "A" ? this.templateDataStoreA : this.templateDataStoreB;
  }

  // common
  setTemplate(temp) {
    return tableStore.setTemplate(temp);
  }

  getColumnSize() {
    return tableStore.getColumnSize()
  }
  getFirstObservationDate(patientId) {
    return tableStore.getFirstObservationDate(patientId)

  }
  getLastObservationDate(patientId) {
    return tableStore.getLastObservationDate(patientId)
  }
  resetData(showEqClass, force) {
    return tableStore.resetData(showEqClass, force)
  }

  // on individual table store
  getFirstPageData (patientId, showEqClass, batchSize, dateRange) {
    let that = this;

    return tableStore.getFirstPageData(patientId, showEqClass, batchSize, dateRange)
        .then(function(data) {
          // TODO: update the data buffer.
          that.currentPageData.tableData = data.tableData;
          that.currentPageData.moreData = data.moreData;

          return data;
          // return new Promise((resolve, reject) => {
          //   setTimeout(() => resolve({tableData: data.tableData, moreData: data.moreData}), 1);
          // });
        })
        .catch(function(error) {
          console.log(error);
          return error;
          // return new Promise((resolve, reject) => {
          //   setTimeout(() => reject(error), 1);
          // });
        });

  }


  getNextPageData(showEqClass) {

  }


  getColumnHeaders(zoomLevel) {
    let columns = tableStore.getColumnHeaders(zoomLevel);
    this.currentPageData.columns = columns;
    return columns;

  }

  expandCollapseAHeader(itemKey) {

  }
  expandCollapseAnEqClassRow(itemKey) {

  }

  getRetrievedNumOfRes() {
    return this.currentStore().retrievedNumOfRes;
  }

  getAvailableNumOfRes() {
    return this.currentStore().availableNumOfRes;
  }


}

export default new BufferedTableDataStore();