import React from 'react';
import fhirStore from './fhirDataStore';
import templateStore from './templateDataStore';
import dcopy from 'deep-copy';

class TableDataStore {
  COLUMN_NUM = 30;
  COLUMN_SIZE = 66;
  NAME_COLUMN_SIZE = 250;
  CHART_COLUMN_SIZE = 100;
  PRELOAD_PAGE_NUM = 2;
  SCROLL_BUFFER_SIZE = 40; // the buffer size before right scrolling to the right end of the a scroll bar, when a new data query is sent to the server to request next page's data

  tableWidth = this.COLUMN_NUM * this.COLUMN_SIZE;

  // tableData = [];
  // tableColumnInfo = new Map();
  // dateList = new Map();
  // moreData = false;
  //retrievedNumOfRes = 0;

  availableNumOfRes = 0;

  dateStart = 0;
  dateEnd = 0;

  _cacheSize = 2; // including the current page data being displayed

  _pageNumber = 0;

  _initTemplateInfo = null;

  _flowsheetTableData = {
    flowsheetTableData: null,
    tableColumnInfo: new Map(),
    dateList: new Map(),
    //columnHeaders: null,
    hasMoreData: false,
    retrievedNumOfRes: 0,
    availableNumOfRes: 0,
    templateInfo: null,
  };

  _flowsheetTableDataCache = [];

  _addToCache(data) {
    this._flowsheetTableDataCache.unshift(data);
  }
  _removeLastFromCache() {
    this._flowsheetTableDataCache.pop();
  }
  _getCurrentFromCache() {
    return this._flowsheetTableDataCache[this._flowsheetTableDataCache.length-1]
  }

  _dcopyTemplateInfo(templateInfo) {
    return {
      zoomLevel: dcopy(templateInfo.zoomLevel),
//      tsList: new Map(),
      dateList: new Map(templateInfo.dateList),
      dayList: new Map(templateInfo.dateList),
      weekList: new Map(templateInfo.dateList),
      monthList: new Map(templateInfo.dateList),
      quarterList: new Map(templateInfo.dateList),
      yearList: new Map(templateInfo.dateList),
      template: dcopy(templateInfo.template),
      templateTree: dcopy(templateInfo.templateTree)
    }
  }

  setTemplate(temp) {
    this._initTemplateInfo = templateStore.setTemplate(temp);
  }

  getColumnSize() {
    return this.COLUMN_SIZE;
  }

  // getRetrievedNumOfRes() {
  //   return this.retrievedNumOfRes;
  // }
  //
  // getAvailableNumOfRes() {
  //   return this.availableNumOfRes;
  // }


  getColumnHeaders(zoomLevel, tableData) {

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
    let columnList = tableData.tableColumnInfo[zoomLevel];
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


  getFirstPageFlowsheetData(patientId, showEqClass, batchSize, dateRange) {

    let that = this;
//    console.log("tableDataStore: getFirstPageFlowsheetData: 1:"+ that.count++);
//    console.log(that._flowsheetTableDataCache)

    this._flowsheetTableDataCache = [];

    return this._getFirstPageDataFromFHIRStore(patientId, showEqClass, batchSize, dateRange)
        .then(function(data) {
 //         console.log("tableDataStore: getFirstPageFlowsheetData: 2:"+ that.count++)
          return data
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  getNextPageFlowsheetData(showEqClass) {


    let that = this;
//    console.log("tableDataStore: getNextPageFlowsheetData: 1:"+ that.count++)
//    console.log(that._flowsheetTableDataCache)

    if (this._flowsheetTableDataCache.length > 1) {
//      let showEqClass = this._flowsheetTableDataCache[this._flowsheetTableDataCache.length-1].showEqClass;
      // prefetch next page data
      setTimeout(function(){
        // prefetch next page data
//        console.log("tableDataStore: getNextPageFlowsheetData: 2:"+ that.count++)
//        console.log(that._flowsheetTableDataCache)
        that._getNextPageDataFromFHIRStore(showEqClass);
      }, 10);

//      console.log("tableDataStore: getNextPageFlowsheetData: 3:"+ that.count++)
//      console.log(that._flowsheetTableDataCache)

      that._removeLastFromCache();

      return new Promise(function(resolve, reject) {
//        console.log("tableDataStore: getNextPageFlowsheetData: 4:"+ that.count++)
//        console.log(that._flowsheetTableDataCache)

        return resolve(that._getCurrentFromCache())
      });
    }
    // no cached data or has current data
    else {
//      console.log("tableDataStore: getNextPageFlowsheetData: 5:"+ that.count++)
//      console.log(that._flowsheetTableDataCache)
      return that._getNextPageDataFromFHIRStore(showEqClass, true);
    }


  }

  count = 0;

  _getFirstPageDataFromFHIRStore(patientId, showEqClass, batchSize, dateRange) {


    let that = this;
//    console.log("tableDataStore: _getFirstPageDataFromFHIRStore: 1:"+ that.count++)
//    console.log(that._flowsheetTableDataCache)

    return fhirStore.getFirstPageObxData(patientId, batchSize, dateRange)
      .then(function(data) {
        //console.log(data);
        let currentTemplateInfo = that._dcopyTemplateInfo(that._initTemplateInfo);
        let [tableData, columnInfo] = templateStore.getTableData(currentTemplateInfo, data.searchSet, showEqClass);
        // console.log(tableData);
        // console.log(columnInfo);

        let flowsheetTableData = {
          flowsheetTableData: tableData,
          tableColumnInfo: columnInfo,
          dateList: columnInfo.date,
          //columnHeaders: null,
          hasMoreData: data.hasMoreData,
          retrievedNumOfRes: data.retrievedNumOfRes,
          availableNumOfRes: data.availableNumOfRes,
          templateInfo: currentTemplateInfo,
          pageNumber: that._pageNumber++
        };

        // only set it when the first page data is return. total could be missing in the next page data.
        that.availableNumOfRes = data.availableNumOfRes;

//        console.log("tableDataStore: _getFirstPageDataFromFHIRStore: 2:" + that.count++)
//        console.log(that._flowsheetTableDataCache)

        that._addToCache(flowsheetTableData);

        if (fhirStore._nextPageUrl && that._flowsheetTableDataCache.length < that._cacheSize) {
//          console.log("tableDataStore: _getFirstPageDataFromFHIRStore: 3:" + that.count++)
//          console.log(that._flowsheetTableDataCache)
          setTimeout(function() {
            that._getNextPageDataFromFHIRStore(showEqClass)
          }, 10)
        }

        return flowsheetTableData;

      })
      .catch(function(error) {
        console.log(error);
      });
    
  }

  _getNextPageDataFromFHIRStore(showEqClass, returnImmediately) {
    let that = this;
//    console.log("tableDataStore: _getNextPageDataFromFHIRStore: 1:"+ that.count++)
//    console.log(that._flowsheetTableDataCache)
    return fhirStore.getNextPageObxData()
      .then(function(data) {
        if (data) {
          //console.log(data);
          let currentTemplateInfo = that._dcopyTemplateInfo(that._getCurrentFromCache().templateInfo);
          let [tableData, columnInfo] = templateStore.getTableData(currentTemplateInfo, data.searchSet, showEqClass)

          let flowsheetTableData = {
            flowsheetTableData: tableData,
            tableColumnInfo: columnInfo,
            dateList: columnInfo.date,
            //columnHeaders: null,
            hasMoreData: data.hasMoreData,
            retrievedNumOfRes: data.retrievedNumOfRes,
            availableNumOfRes: data.availableNumOfRes,
            templateInfo: currentTemplateInfo,
            pageNumber: that._pageNumber++
          };

          that._addToCache(flowsheetTableData);

          if (fhirStore._nextPageUrl && that._flowsheetTableDataCache.length < that._cacheSize) {
//          console.log("tableDataStore: _getNextPageDataFromFHIRStore: 3:"+ that.count++)
//          console.log(that._flowsheetTableDataCache)
            setTimeout(function() {
              that._getNextPageDataFromFHIRStore(showEqClass)
            }, 10)
          }

          if (returnImmediately) {
//          console.log("tableDataStore: _getNextPageDataFromFHIRStore: 4:"+ that.count++)
//          console.log(that._flowsheetTableDataCache)

            that._removeLastFromCache();
            return that._getCurrentFromCache();
          }
        }
        // no more data
        else {
          return null;
        }
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
            that.dateStart = data.effectiveDateTime;
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
            that.dateEnd = data.effectiveDateTime;
            return data.effectiveDateTime;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  resetData(showEqClass, force) {
    return templateStore.resetTableData(this._getCurrentFromCache().templateInfo, showEqClass, force)
  }

  expandCollapseAHeader(itemKey) {
    return templateStore.expandCollapseAHeader(this._getCurrentFromCache().templateInfo, itemKey);
  }

  expandCollapseAnEqClassRow(itemKey) {
    return templateStore.expandCollapseAnEqClassRow(this._getCurrentFromCache().templateInfo, itemKey);
  }
}


export default new TableDataStore();