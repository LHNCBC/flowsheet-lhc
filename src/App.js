import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Button, Switch, Icon, Spin} from 'antd';

import GridCell from './components/gridCell';
import { FixedSizeGrid, VariableSizeGrid } from 'react-window';
import moment from 'moment';

import PatientSearchDialog from './components/patientSearchDialog';
import TemplatePicker from './components/templatePicker';
import TemplateCustomizerDialog from './components/templateCustomizerDialog';

import ZoomLevelPicker from './components/zoomLevelPicker';
import TimelineSlider from './components/timelineSlider';
import BatchSizePicker from './components/batchSizePicker';
import DateRangePicker from './components/dateRangePicker';
import ConditionListDialog from './components/conditionListDialog';
import OverviewMap from './components/overviewMap';

import tableDataStore from './stores/tableDataStore';

import ProjectLogoImage from './projectLogo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flowsheetData : null,
      flowsheetColumns: null,
      unitWidth : tableDataStore.getColumnSize(),
      isLoading: false,
      tableClass: "flowsheet-table",
      patient: null,
      showUnit: true,
      zoomLevel: 'date',
      batchSize: '1000',
      showEqClass: false,
      selectedPatient: null,
      appTitle: "LHC Flowsheet On FHIR",
      selectedTemplate: null,
      hasMoreData: false,
      tableHeight: window.innerHeight - 403,
      tableWidth: window.innerWidth -19,
      showAdditionalControls: false,
      showDebugInfo: false,
      chartData: null,
      showOverviewMap: false,
      emptyCellPercentage: 0,
      visiblePosition: {},
      moreButtonLabel: 'Load More',
      firstObxDate: null,
      lastObxDate: null,
      rangeStart: null,
      rangeEnd: null,
      selectedRangeValue: null,
      selectedRangeKey: 'all',
      showControlPanel: true
    };

    this.anchorItemIndex = 0;
    this.anchorColIndex = 0;
    this.needRepositionRow = false;
    this.needRepositionCol = false;
    this.visibleRowStartIndex = 0;
    this.visibleColumnStartIndex = 0;

    this.refHeader = React.createRef();
    this.refFooter = React.createRef();

    this.loadData = this.loadData.bind(this);
    this.appendData = this.appendData.bind(this);
    this.onUnitSwitchChange = this.onUnitSwitchChange.bind(this);
    this.onEqClassSwitchChange = this.onEqClassSwitchChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.hideShowControlPanel = this.hideShowControlPanel.bind(this);
    this.expandCollapseAHeader = this.expandCollapseAHeader.bind(this);
    this.onAdditionalControlsChange = this.onAdditionalControlsChange.bind(this);
    this.onDebugSwitchChange = this.onDebugSwitchChange.bind(this);
    this.expandCollapseAnEqClassRow = this.expandCollapseAnEqClassRow.bind(this);
    this.createAndShowOverViewMap = this.createAndShowOverViewMap.bind(this);

    setTimeout(() => this.handleResize());
  }

  gridRef = React.createRef();
  nonTableRef = React.createRef();

  setSelectedPatient = (patient, preLoadData) => {
    // reset template
    if (patient && (!this.state.selectedPatient || patient.id !== this.state.selectedPatient.id)) {
      this.setState({
        selectedPatient: patient,
        flowsheetData : null,
        flowsheetColumns: null,
        hasMoreData: false,
        firstObxDate: null,
        lastObxDate: null,
        });

      let that = this;
      tableDataStore.getFirstObservationDate(patient.id )
          .then(function(data) {
            let first = moment(data, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
            that.setState({
              firstObxDate: data,
              rangeStart: first.valueOf()
            })
          });

      tableDataStore.getLastObservationDate(patient.id )
          .then(function(data) {
            let last = moment(data, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
            that.setState({
              lastObxDate: data,
              rangeEnd: last.valueOf()
            })
          });

      if (preLoadData) {
        this.loadData(patient.id);
      }

    }
  }

  setSelectedTemplate = (temp) => {
    if (temp && (!this.state.selectedTemplate || temp.file !== this.state.selectedTemplate.file)) {
      this.setState({
        selectedTemplate: temp,
        flowsheetData : null,
        flowsheetColumns: null,
        hasMoreData: false
      })
    }

  };

  setDateRange = (range) => {
    if (range && this.state.selectedPatient) {
      let rangeValue = [];
      if (range.selection === 'all') {
        rangeValue = null;
      }
      else {
        let latest = moment(this.state.rangeEnd);
        let year = latest.year();
        switch (range.selection) {
          case '1y':
            rangeValue = [latest.year(year - 1).valueOf(), null];
            break;
          case '2y':
            rangeValue = [latest.year(year - 2).valueOf(), null];
            break;
          case '3y':
            rangeValue = [latest.year(year - 3).valueOf(), null];
            break;
          case '5y':
            rangeValue = [latest.year(year - 5).valueOf(), null];
            break;
          case '10y':
            rangeValue = [latest.year(year - 10).valueOf(), null];
            break;
          case 'customize':
            rangeValue = range.rangeValue;
            break;
          case 'all':
          default:
            rangeValue = null;
        }
      }

      this.setState({
        selectedRangeKey: range.selection,
        selectedRangeValue: rangeValue
      });

      //console.log(range)
    }
  };

  setZoomLevel = (level) => {
    //console.log(level);

    let prevZoomLevel = this.state.zoomLevel;

    this.setState({
      zoomLevel: level
    });

    if (this.state.flowsheetData && prevZoomLevel !== level) {

      // get the date on the first visible column
      let firstVisColDate = this._findFirstVisibleColDate(this.state.flowsheetColumns, this.visibleColumnStartIndex);

      let newColumns = tableDataStore.getColumnHeaders(level, this.state.data);

      // get the position of that date in the new columns
      let colStartIndex = this._findFirstColInView(newColumns, firstVisColDate);

      this.anchorColIndex = newColumns.length < 10 ? 0 : colStartIndex;
      this.needRepositionCol = true;

      // console.log('pre visible col index')
      // console.log(this.visibleColumnStartIndex);
      // console.log(firstVisColDate)
      // console.log('new col index')
      // console.log(colStartIndex);

      this.setState({
        flowsheetColumns: newColumns
      });
      if (this.state.showOverviewMap) {
        this._processChartData(newColumns, this.state.flowsheetData);
      }
    }

  };

  setBatchSize = (size) => {

    this.setState({
      batchSize: size
    })
  };

  setCustomizedData = (data) => {

  }

  _findFirstVisibleColDate(columns, colIndex) {
    return colIndex >= columns.length ? columns[columns.length-1].start : columns[colIndex].start;
  }

  _findFirstColInView(columns, ts) {

    let colIndex = 0;

    for (let i=0, iLen=columns.length; i<iLen; i++) {
      // if ts is within the date range of a column
      //if (columns[i].end <= ts && columns[i].start >= ts) {
      if (ts >= columns[i].start) {
        colIndex = i;
        break;
      }
    }

    return colIndex;

  }


  loadData(pId) {

    let patientId = pId ? pId : this.state.selectedPatient ? this.state.selectedPatient.id : "";
    let that = this;

    this.setState({
      flowsheetData: null,
      hasMoreData: null,
      flowsheetColumns: null,
      isLoading: true
    });

    this.handleResize();



    tableDataStore.setTemplate(this.state.selectedTemplate.data);

    tableDataStore.getFirstPageFlowsheetData(patientId, this.state.showEqClass, this.state.batchSize, this.state.selectedRangeValue)
      .then(function(data) {

        // scroll to the anchor item
        that.anchorItemIndex = 0;
        that.anchorColIndex = 0;
        that.needRepositionRow = true;
        that.needRepositionCol = true;

        let columns = tableDataStore.getColumnHeaders(that.state.zoomLevel, data);
        that.setState({
          data: data,
          flowsheetData: data.flowsheetTableData,
          hasMoreData: data.hasMoreData,
          flowsheetColumns: columns,
          moreButtonLabel: `Load ${that.state.batchSize} More`,
          isLoading: false,
          retrievedNumOfRes: data.retrievedNumOfRes,
          availableNumOfRes: tableDataStore.availableNumOfRes
        });

        if (that.state.showOverviewMap) {
          that._processChartData(columns, data.flowsheetTableData);
        }

        // console.log("App: loadData: getFirstPageFlowsheetData: 1:")
        // console.log(data)

      })
      .catch(function(error) {
        console.log(error);
        that.setState({
          flowsheetData: null,
          hasMoreData: null,
          flowsheetColumns: null,
          isLoading: false
        });

      });

  }

  appendData() {
    let that = this;

    that.setState({
      hasMoreData: false,
      isLoading: true
    });

    // get anchor item key, which is the 3nd item after the "visibleRowStartIndex" ??
    let offsetRowNum = 3;
    //let itemIndex = this.visibleRowStartIndex + offsetRowNum;
    let itemIndex = this.visibleRowStartIndex < 1 ? this.visibleRowStartIndex : this.visibleRowStartIndex + offsetRowNum;
    let itemKey = this.state.flowsheetData[itemIndex].key;
    tableDataStore.getNextPageFlowsheetData(this.state.showEqClass)
      .then(function(data) {
        // console.log("in appendData");
        // console.log("visibleRowStartIndex: " + that.visibleRowStartIndex);
        // console.log(itemKey);
        if (data) {
          // scroll to the anchor item
          let newItemIndex = that._findItemIndexByKey(data.flowsheetTableData, itemKey);
          // console.log("newItemIndex: " + newItemIndex);

          that.anchorItemIndex = newItemIndex >= offsetRowNum  ? newItemIndex - offsetRowNum : 0;
          // console.log("anchorItemIndex: " + that.anchorItemIndex);

          that.needRepositionRow = true;

          let columns = tableDataStore.getColumnHeaders(that.state.zoomLevel, data);
          that.setState({
            data: data,
            flowsheetData: data.flowsheetTableData,
            hasMoreData: data.hasMoreData,
            flowsheetColumns: columns,
            isLoading: false,
            retrievedNumOfRes: that.state.retrievedNumOfRes + data.retrievedNumOfRes
          })
          if (that.state.showOverviewMap) {
            that._processChartData(columns, data.flowsheetTableData);
          }

          // console.log("App: appendData: getNextPageFlowsheetData: 1:")
          // console.log(data)

        }
        else {
          that.setState({
            hasMoreData: false,
            isLoading: false
          })
        }
      })
      .catch(function(error) {
        console.log(error);
        that.setState({
          flowsheetData: null,
          hasMoreData: null,
          flowsheetColumns: null,
          isLoading: false
        });

      });

  }


  _findItemIndexByKey(tableData, itemKey) {
    let itemIndex = -1;
    for(let i=0, iLen=tableData.length; i<iLen; i++) {
      if (itemKey === tableData[i].key) {
        itemIndex = i;
        break;
      }
    }

    return itemIndex;
  }

  /**
   * NOT USED due to performance problems
   * @param {*} event 
   */
  handleScroll(event) {
    // // When we receive a scroll event, schedule an update.
    // // If we receive many updates within a frame, we'll only publish the latest value.
    // this.scheduleUpdate({ x: e.clientX, y: e.clientY });

    //console.log(event);
    let maxScroll = event.target.scrollWidth - event.target.clientWidth
    let currentScroll = event.target.scrollLeft
    if (currentScroll > 0 && currentScroll >= maxScroll - tableDataStore.getScrollBufferSize()) {  // 20 px as a buffer area
        // load more data
        
        if (this.state.isLoading) {
          console.log("loading function has been called")
        }
        else {
          this.setState({isLoading: true})
          this.appendData(event);
          this.setState({isLoading: false})    
        }
    }
  }


  componentDidMount() {
    // var tableContent = document.querySelector('.ant-table-scroll > .ant-table-body')
    // tableContent.addEventListener('scroll', (event) => {
    //   this.handleScroll(event);      
    // })

    //console.log("did mount")
    // this.setState({
    //   isLoading: false
    // })
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {

    if (this.needRepositionRow && this.needRepositionCol) {
      this.gridRef.current.scrollToItem({
        align: "start",
        columnIndex: this.anchorColIndex,
        rowIndex: this.anchorItemIndex
      });
      this.needRepositionRow = false;
      this.needRepositionCol = false;
    }
    else if (this.needRepositionRow) {
      this.gridRef.current.scrollToItem({
        align: "start",
        columnIndex: this.visibleColumnStartIndex,
        rowIndex: this.anchorItemIndex
      });
      this.needRepositionRow = false;
    }
    else if (this.needRepositionCol) {
      this.gridRef.current.scrollToItem({
        align: "start",
        columnIndex: this.anchorColIndex,
        rowIndex: this.visibleRowStartIndex
      });
      this.needRepositionCol = false;
    }
  }

  componentWillUnmount() {
    // // Cancel any pending updates since we're unmounting.
    // this.scheduleUpdate.cancel();
    window.removeEventListener('resize', this.handleResize);
  }

  getNonDataTableHeightAndBorder() {
    return document.getElementById('lf-data-table').parentElement.offsetHeight
      - document.getElementById('lf-data-table').offsetHeight
      // Taking into account the height of the shared header.
      // The shared footer is below the visible part of the page.
      + document.getElementById('sharedHeader').offsetHeight
      + 2;
  };

  handleResize() {
    // Update the table height
    this.setState({
      tableHeight: window.innerHeight - this.getNonDataTableHeightAndBorder(),
    });

    // Adjust the table width
    this.setState({
      tableWidth: document.getElementById('sharedHeader').offsetWidth - 4
    });
  }

  hideShowControlPanel = () => {
    this.setState({
      showControlPanel: !this.state.showControlPanel,
    });
    setTimeout(() => this.handleResize());
  };


  onUnitSwitchChange(checked) {

    this.setState({
      showUnit: checked,
    });

    if (this.state.showOverviewMap) {
      this._processChartData(this.state.flowsheetColumns, this.state.flowsheetData);
    }


  }

  onAdditionalControlsChange() {
    this.setState({
      showAdditionalControls : !this.state.showAdditionalControls
    });

  }

  onEqClassSwitchChange(checked) {

    // get anchor item key, which is the 3nd item after the "visibleRowStartIndex" ??
    let offsetRowNum = 3;
    let itemIndex = this.visibleRowStartIndex < offsetRowNum ? this.visibleRowStartIndex : this.visibleRowStartIndex + offsetRowNum;
    let itemKey = this.state.flowsheetData[itemIndex].key;

    let newData = tableDataStore.resetData(checked, true);
    let newItemIndex = this._findNextItemWithEqRow(newData, itemKey);

    this.anchorItemIndex = newItemIndex >= offsetRowNum ? newItemIndex - offsetRowNum : 0;
//    console.log("anchorItemIndex: " + this.anchorItemIndex);

    this.needRepositionRow = true;

    this.setState({
      showEqClass: checked,
      flowsheetData: newData
    })

    if (this.state.showOverviewMap) {
      this._processChartData(this.state.flowsheetColumns, newData);
    }

  }

  _findNextItemWithEqRow(tableData, itemKey) {

    let itemIndex = 0;
    if (itemKey.match(/$_EQ/)) {
      itemIndex = this._findItemIndexByKey(itemKey.substring(0, itemKey.length -3))
    }
    else {
      itemIndex = this._findItemIndexByKey(tableData, itemKey);
      if (itemIndex === -1) {
        itemIndex = this._findItemIndexByKey(tableData, itemKey + "_EQ")
      }
    }

    return itemIndex;

  }

  createAndShowOverViewMap() {

    if (this.state.showOverviewMap) {
      this.setState({
        showOverviewMap: false
      })
    }
    else {
      if (this.state.flowsheetColumns && this.state.flowsheetData) {
        this._processChartData(this.state.flowsheetColumns, this.state.flowsheetData)
      }
      this.setState({
        showOverviewMap: true
      })
    }
  }

  // domain: {x: [ tsStart, tsEnd], y: [1, tableData.length]
  // data: [
  //          {x: ts, y: row #}  // row # in reverse order
  //       ]
  // xTickValues: [tsStart, ... tsYears#, tsEnd]
  // lineYearData: [ {x: tsYear, y: 1}, {x: tsYear, y: tableData.length} ]

  _processChartData(columns, tableData) {

    let chartData = {};
    //let columns = this.state.flowsheetColumns, tableData = this.state.flowsheetData;

    if (columns && tableData) {
      let tsStart = columns[2].start;
      let tsEnd = columns[columns.length-1].start;
      chartData.domain = {
        x: [tsStart, tsEnd],
        y: [0, tableData.length-1]
      };

      chartData.xTickValues = [tsStart, tsEnd];

      chartData.data = [];

      let dpCount = 0;
      let headerRowCount = 0;
      for (let i=0, iLen = tableData.length; i<iLen; i++) {
        let item = tableData[i];
        if (item.isTempHeader) {
          headerRowCount++;
        }
        else {
          for (let j=2, jLen=columns.length; j<jLen; j++) {
            let col = columns[j];
            if (item[col.dataKey]) {
              let value = this.state.showUnit ? item[col.dataKey].valueWithUnit : item[col.dataKey].value;
              //let tootipLabel = item.displayName + "\n" + value + "\n" + col.tsLabel;
              //let tooltipLabel = <span><div>{item.displayName}</div>{value}<div></div><div>{col.tsLabel}</div></span>;
              //chartData.data.push({x: col.start, y: iLen - i -1, label: tootipLabel, abnormal: item[col.dataKey].abnormal});
              chartData.data.push({x: col.start, y: iLen - i -1, abnormal: item[col.dataKey].abnormal});
              if (!item.isTempHeader) {
                dpCount++;
              }
            }
          }
        }

      }

      let emptyPercentage = ((1- dpCount/((tableData.length -headerRowCount) * (columns.length-2))) * 100).toFixed(2) + "%";

      this.setState({
        chartData: chartData,
        emptyCellPercentage: emptyPercentage
      })

    }
  }


  onDebugSwitchChange(checked) {

    this.setState({
      showDebugInfo: checked
    })

  }

  onScroll(parameters) {
    // {
    //   horizontalScrollDirection,
    //   scrollLeft,
    //   scrollTop,
    //   scrollUpdateWasRequested,
    //   verticalScrollDirection
    // }
    // this.setState({
    //   scrollLeft: parameters.scrollLeft,
    //   scrollTop: parameters.scrollTop
    // });

    //console.log(parameters)
  }


  onItemsRendered(parameters) {

    // {
    //   overscanColumnStartIndex,
    //       overscanColumnStopIndex,
    //       overscanRowStartIndex,
    //       overscanRowStopIndex,
    //       visibleColumnStartIndex,
    //       visibleColumnStopIndex,
    //       visibleRowStartIndex,
    //       visibleRowStopIndex
    // }
    // All index params are numbers.
    //console.log(parameters);

    this.visibleRowStartIndex = parameters.visibleRowStartIndex;
    this.visibleColumnStartIndex = parameters.visibleColumnStartIndex;



    let colStartIndex = parameters.visibleColumnStartIndex < 2 ? 2 : parameters.visibleColumnStartIndex + 2;
    let colStopIndex = parameters.visibleColumnStopIndex < 2 ? 2 : parameters.visibleColumnStopIndex;
    let colStart = this.state.flowsheetColumns[colStartIndex].start;
    let colStop = this.state.flowsheetColumns[colStopIndex].start;

    // console.log("colStart: " + parameters.visibleColumnStartIndex)
    // console.log("colStop: " + parameters.visibleColumnStopIndex)

    let rowStart = parameters.visibleRowStartIndex;
    let rowStop = parameters.visibleRowStopIndex;
    // console.log("rowStart: " + rowStart)
    // console.log("rowStop: " + rowStop)

    // let tsEnd = columns[columns.length-1].start;
    // chartData.domain = {
    //   x: [tsStart, tsEnd],
    //   y: [0, tableData.length-1]
    // };

    this.setState({
      visiblePosition: {
        rowStart: this.state.flowsheetData.length - rowStart -1,
        rowStop: this.state.flowsheetData.length - rowStop -1,
        colStart: colStart,
        colStop: colStop
      }
    })
  }


  columnWidth(index) {
    return index === 0 ? 300 : index === 1 ? 110 : 120;
  }

  rowHeight(index) {
    return index === 0 ? 72 : 30;
  }

  expandCollapseAHeader(itemKey) {
    // console.log('in app.js');
    // console.log(itemKey);
    let changed = tableDataStore.expandCollapseAHeader(itemKey);
    //console.log(changed);
    if (changed) {
      this.setState({
        flowsheetData: tableDataStore.resetData(this.state.showEqClass),
      })
      if (this.state.showOverviewMap) {
        this._processChartData();
      }
    }
  }

  expandCollapseAnEqClassRow(itemKey) {
    // console.log('in app.js');
    // console.log(itemKey);
    let changed = tableDataStore.expandCollapseAnEqClassRow(itemKey);
    //console.log(changed);
    if (changed) {
      this.setState({
        flowsheetData: tableDataStore.resetData(this.state.showEqClass),
      })
      if (this.state.showOverviewMap) {
        this._processChartData();
      }
    }
  }


  render() {
    let name = this.state.selectedPatient ? this.state.selectedPatient.name : "Select a Patient";
    let gender = this.state.selectedPatient ? this.state.selectedPatient.gender : "";
    // let dob = this.state.selectedPatient ? this.state.selectedPatient.dob : "";
    let pid = this.state.selectedPatient ? this.state.selectedPatient.id: "";
    // let deceased = this.state.selectedPatient ? this.state.selectedPatient.resource.deceasedDateTime : "";
    let reloadButtonLabel = this.state.flowsheetData ? "Reload Data" : "Load Data";

    let rowCount = this.state.flowsheetData ? this.state.flowsheetData.length +1 : 0;
    let colCount = this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 0;

    let enableMore = this.state.hasMoreData && !this.state.isLoading;

    return (
      <div>
        <div id={"lf-non-data-table"} ref={this.nonTableRef}>
          <div className="lf-app-header" ref={this.refHeader}>
            <div className="lf-header">
              <div className="lf-logo">
                <a href="https://lhcforms.nlm.nih.gov" title="LHC FHIR Tools" id="logo">
                  <img src={ProjectLogoImage} alt="LHC FHIR Tools" />
                </a>
              </div>

              <div className={"lf-app-title"}>
                <a href="/">
                  <span>
                    {this.state.appTitle}
                  </span>
                </a>
              </div>
              <div className={"lf-app-control"}>

                <div className={"lf-patient"}>
                  <div className={"lf-patient-info"}>
                    <div className={"lf-patient-name"}>
                        <div>{name}</div>
                    </div>
                    { this.state.selectedPatient &&
                    <div className={"lf-patient-extra"}>

                      <div className="lf-patient-field">
                        <span>ID: </span><span className="lf-bold">{pid}</span>
                      </div>
                      <div className="lf-patient-field">
                        <span>Gender: </span><span className="lf-bold">{gender}</span>
                      </div>
                    </div>
                    }
                  </div>
                  <div className={"lf-patient-btn"}>
                    <PatientSearchDialog selectedPatient={this.state.selectedPatient} onOK={this.setSelectedPatient}/>
                  </div>
                </div>

                <div className={"lf-control"}>
                  <div className={"lf-control-btn"}>
                    <Button className='lf-button' size={"small"} type="primary" icon="reload" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>{reloadButtonLabel}</Button>
                  </div>
                  <div className={"lf-control-btn"}>
                    <Button className='lf-button' size={"small"} type="primary" icon="swap" disabled={!enableMore} onClick={() => this.appendData()}>{this.state.moreButtonLabel}</Button>
                  </div>
                  <div className={"lf-control-btn"}>
                    <ConditionListDialog selectedPatient={this.state.selectedPatient}/>
                  </div>
                </div>

              </div>
            </div>


            { this.state.showControlPanel &&
              <div id='lf-options'>
              <Row type="flex" className="lf-row">
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <TemplatePicker selectedTemplate={this.state.selectedTemplate} setSelectedTemplate={(temp) => this.setSelectedTemplate(temp)}/>
                </Col>
                {/*<Col xs={24} sm={12} md={8} lg={6} xl={6}>*/}
                  {/*<TemplateCustomizerDialog*/}
                      {/*selectedTemplate={this.state.selectedTemplate}*/}
                      {/*flowsheetData={this.state.flowsheetData}*/}
                      {/*flowsheetColumns={this.state.flowsheetColumns}*/}
                      {/*setCustomizedData={(data) => this.setCustomizedData(data)}/>*/}
                {/*</Col>*/}
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <BatchSizePicker batchSize={this.state.batchSize} setBatchSize={(size) => this.setBatchSize(size)}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  {/*{this.state.lastObxDate && this.state.firstObxDate &&*/}
                  {/*<TimelineSlider minDate={this.state.firstObxDate} maxDate={this.state.lastObxDate}*/}
                                  {/*setRange={(r) => this.setDateRange(r)}*/}
                  {/*/>*/}
                  {/*}*/}
                  <DateRangePicker rangeStart={this.state.rangeStart} rangeEnd={this.state.rangeEnd} selectedRangeKey={this.state.selectedRangeKey}
                                   setDateRange={(r) => this.setDateRange(r)}/>
                </Col>
                {/*<Col xs={24} sm={12} md={8} lg={6} xl={6}>*/}
                  {/*<Button className='lf-button' type="primary" icon="reload" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>{reloadButtonLabel}</Button>*/}
                  {/*<Button className='lf-button' type="primary" icon="swap" disabled={!this.state.hasMoreData} onClick={() => this.appendData()}>{this.state.moreButtonLabel}</Button>*/}
                {/*</Col>*/}
              </Row>

              <Row type="flex" className="lf-row">
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <ZoomLevelPicker zoomLevel={this.state.zoomLevel} setZoomLevel={(level) => this.setZoomLevel(level)}/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <Row className="lf-switch-row">
                    <Switch checkedChildren="Units Shown" unCheckedChildren="Units Hidden" defaultChecked={true} onChange={this.onUnitSwitchChange}/>
                  </Row>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                  <Row className="lf-switch-row">
                    <Switch checkedChildren="Equivalence Classes Collapsed" unCheckedChildren="Equivalence Classes Expanded" defaultChecked={false} onChange={this.onEqClassSwitchChange}/>
                  </Row>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={6} className={"lf-additional-controls-btn"}>
                  <Button type="dashed" size={"small"} icon={this.state.showAdditionalControls ? "down" : "right"} onClick={() => this.onAdditionalControlsChange()}>Additional Controls</Button>
                </Col>
              </Row>

              { this.state.showAdditionalControls &&
              <Row type="flex" className="lf-row">
                <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                    <Switch checkedChildren="Debug Info Shown" unCheckedChildren="Debug Info Hidden" defaultChecked={false} onChange={this.onDebugSwitchChange}/>
                </Col>
              </Row>
              }
            </div>
            }
            <div id="lf-status">
              <Row type="flex" className='lf-data-info lf-row'>

                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                  <Button type="primary" icon="dot-chart" size={"small"} disabled={!this.state.flowsheetData} onClick={this.createAndShowOverViewMap}>Overview Map</Button>
                </Col>

                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                  Retrieved Observations: <span className="lf-bold">{ this.state.flowsheetData ? this.state.retrievedNumOfRes : 0 }</span>
                </Col>
                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                  Total Observations: <span className="lf-bold">{ this.state.availableNumOfRes }</span>
                </Col>
                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                  Columns: <span className="lf-bold">{this.state.flowsheetColumns ? this.state.flowsheetColumns.length - 2 : 0 }</span>
                </Col>
                <Col xs={24} sm={12} md={4} lg={4} xl={4}>
                  Rows: <span className="lf-bold">{this.state.flowsheetData ? this.state.flowsheetData.length : 0 }</span>
                </Col>
                <Col className="lf-option-btn-col" xs={24} sm={12} md={4} lg={4} xl={4}>
                  <div className={"lf-option-btn"}>
                    <Button onClick={this.hideShowControlPanel} type={"primary"} size={"small"}><Icon type={"double-right"} rotate={this.state.showControlPanel ? -90 : 90}></Icon></Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          { this.state.showOverviewMap &&
              <div>
                <Row type="flex" className="lf-row">
                  <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    Empty Cell Percentage: <span className="lf-bold">{this.state.flowsheetData ? this.state.emptyCellPercentage : '' }</span>
                  </Col>
                </Row>
                  <OverviewMap
                      //width={this.state.tableWidth}
                      width={540}
                      height={420}
                      chartData = {this.state.chartData}
                      visiblePosition = {this.state.visiblePosition}
                  >
                  </OverviewMap>
              </div>
          }
        </div>
        <div id="lf-data-table">
          {this.state.isLoading &&
          <div className={"lf-spinner"}>
            <Spin size="large" tip="Loading...">

            </Spin>
          </div>

          }

          <VariableSizeGrid
              ref={this.gridRef}
              className={this.state.tableClass}
              columnCount={colCount}
              columnWidth={index => this.columnWidth(index)}
              height={this.state.tableHeight}
              rowCount={rowCount}
              rowHeight={index => this.rowHeight(index)}
              width={this.state.tableWidth}
              stickyColumns={2}
              stickyRows={1}
              onItemsRendered={obj => this.onItemsRendered(obj)}
              itemData={{
                tableData: this.state.flowsheetData,
                columns: this.state.flowsheetColumns,
                showUnit: this.state.showUnit,
                showEqClass: this.state.showEqClass,
                showDebugInfo: this.state.showDebugInfo,
                expColFunc: this.expandCollapseAHeader,
                eqExpColFunc: this.expandCollapseAnEqClassRow
              }}
          >
            {GridCell}
          </VariableSizeGrid>


        </div>
        {/*<div id="lf-app-footer" ref={this.refFooter}>*/}
        {/*</div>*/}
      </div>
    );
  }
}


export default App;
