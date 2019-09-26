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

  getColumnSize() {
    return this.COLUMN_SIZE;
  }

  getRetrievedNumOfRes() {
    return this.retrievedNumOfRes;
  }

  getAvailableNumOfRes() {
    return this.availableNumOfRes;
  }


  fhirDataQueue = [];

  getFirstPageDataFromFHIR(patientId, batchSize, dateRange) {

    let that = this;
    this.fhirDataQueue =[];

    return fhirStore.getAllObservationByPatientId(patientId, batchSize, dateRange)
        .then(function(data) {
          // prefetch next page data
          setTimeout(function () {
            fhirStore.getNextPageData()
                .then(function (data) {
                  that.fhirDataQueue.unshift({
                    fhirData: data,
                    moreData: fhirStore.moreData,
                    retrievedNumOfRes: fhirStore.resourceRetrieved,
                    availableNumOfRes: fhirStore.resourceAvailable
                  });
                })
                .catch(function (error) {
                  console.log(error);
                })
          }, 0);

          return {
            fhirData: data,
            moreData: fhirStore.moreData,
            retrievedNumOfRes: fhirStore.resourceRetrieved,
            availableNumOfRes: fhirStore.resourceAvailable
          }
        })
        .catch(function(error) {
          console.log(error);
        });

  }


  getNextPageDataFromFHIR() {

    let that = this;

    if (this.fhirDataQueue.length === 0) {
      return fhirStore.getNextPageData()
          .then(function(data) {
            // prefetch next page data
            setTimeout(function () {
              fhirStore.getNextPageData()
                  .then(function (data) {
                    that.fhirDataQueue.unshift({
                      fhirData: data,
                      moreData: fhirStore.moreData,
                      retrievedNumOfRes: fhirStore.resourceRetrieved,
                      availableNumOfRes: fhirStore.resourceAvailable
                    });
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
            }, 0);

            return {
              fhirData: data,
              moreData: fhirStore.moreData,
              retrievedNumOfRes: fhirStore.resourceRetrieved,
              availableNumOfRes: fhirStore.resourceAvailable
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    else {
      // prefetch next page data
      setTimeout(function(){
        // prefetch next page data
        fhirStore.getNextPageData()
            .then(function(data) {
              that.fhirDataQueue.unshift({
                fhirData: data,
                moreData: fhirStore.moreData,
                retrievedNumOfRes: fhirStore.resourceRetrieved,
                availableNumOfRes: fhirStore.resourceAvailable
              });
            })
            .catch(function(error) {
              console.log(error);
            });

      }, 0);

      return new Promise(function(resolve, reject) {
        return resolve(that.fhirDataQueue.pop())
      });
    }

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


  getFirstPageData(patientId, showEqClass, batchSize, dateRange) {
    let that = this;
    return this.getFirstPageDataFromFHIR(patientId, batchSize, dateRange)
      .then(function(data) {
        //console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data.fhirData, showEqClass);
        console.log(tableData);
        console.log(columnInfo);
        that.dateList = templateStore.dateList;
        that.tableColumnInfo = columnInfo;
        that.tableData = tableData;
        that.moreData = data.moreData;
        that.retrievedNumOfRes = data.retrievedNumOfRes;
        that.availableNumOfRes = data.availableNumOfRes;

        return {tableData: tableData, moreData: that.moreData}
        
      })
      .catch(function(error) {
        console.log(error);
      });
    
  }

  getNextPageData(showEqClass) {
    let that = this;
    return this.getNextPageDataFromFHIR()
      .then(function(data) {
        //console.log(data);
        let [tableData, columnInfo] = templateStore.getTableData(data.fhirData, showEqClass)
        console.log(tableData);
        console.log(columnInfo);
        that.dateList = templateStore.dateList;
        that.tableColumnInfo = columnInfo;
        that.tableData = tableData;
        that.moreData = data.moreData;
        that.retrievedNumOfRes += data.retrievedNumOfRes;
        that.availableNumOfRes = data.availableNumOfRes;
        return {tableData: tableData, moreData: that.moreData}
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getFirstObservationDate(patientId) {
    let that = this;
    return fhirStore.getFirstObservationByPatientId(patientId)
        .then(function(data) {
          //console.log(data);
          if (data && data.effectiveDateTime) {
            return data.effectiveDateTime;
          }
        })
        .catch(function(error) {
          console.log(error);
        });

  }

  getLastObservationDate(patientId) {
    let that = this;
    return fhirStore.getLastObservationByPatientId(patientId)
        .then(function(data) {
          //console.log(data);
          if (data && data.effectiveDateTime) {
            return data.effectiveDateTime;
          }
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