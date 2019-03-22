import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Button, Switch, Icon} from 'antd';

import GridCell from './components/gridCell';
import { FixedSizeGrid, VariableSizeGrid } from 'react-window';

import PatientSearchDialog from './components/patientSearchDialog';
import TemplatePicker from './components/templatePicker';
import ZoomLevelPicker from './components/zoomLevelPicker';
import TimelineSlider from './components/timelineSlider';
import BatchSizePicker from './components/batchSizePicker';
import ConditionListDialog from './components/conditionListDialog';
import OverviewMap from './components/overviewMap';

import tableDataStore from './stores/tableDataStore';

import LHCImage from './lhncbc.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flowsheetData : null,
      flowsheetColumns: null,
      unitWidth : tableDataStore.columnSize,
      isLoading: false,
      tableClass: "flowsheet-table",
      patient: null,
      showUnit: false,
      zoomLevel: 'date',
      batchSize: '1000',
      showEqClass: false,
      selectedPatient: null,
      appTitle: "LHC Flowsheet On FHIR",
      selectedTemplate: null,
      moreData: false,
      tableHeight: 0, //window.innerHeight - 508,
      tableWidth: window.innerWidth -10,
      showAdditionalControls: false,
      showDebugInfo: false,
      chartData: null,
      showOverviewMap: false,
      emptyCellPercentage: 0,
      visiblePosition: {},
      moreButtonLabel: 'Load More',
      firstObxDate: null,
      lastObxDate: null,
      dateRange: null,
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
    this.expandCollapseAHeader = this.expandCollapseAHeader.bind(this);
    this.onAdditionalControlsChange = this.onAdditionalControlsChange.bind(this);
    this.onDebugSwitchChange = this.onDebugSwitchChange.bind(this);
    this.expandCollapseAnEqClassRow = this.expandCollapseAnEqClassRow.bind(this);
    this.createAndShowOverViewMap = this.createAndShowOverViewMap.bind(this);

  }

  gridRef = React.createRef();

  setSelectedPatient = (patient, preLoadData) => {
    // reset template
    if (patient && (!this.state.selectedPatient || patient.id !== this.state.selectedPatient.id)) {
      this.setState({
        selectedPatient: patient,
        flowsheetData : null,
        flowsheetColumns: null,
        moreData: false,
        firstObxDate: null,
        lastObxDate: null,
        });

      let that = this;
      tableDataStore.getFirstObservationDate(patient.id )
          .then(function(data) {
            console.log(data)
            that.setState({
              firstObxDate: data
            })
          });

      tableDataStore.getLastObservationDate(patient.id )
          .then(function(data) {
            console.log(data)
            that.setState({
              lastObxDate: data
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
        moreData: false
      })
    }

  };

  setDateRange = (range) => {
    if (range && this.state.selectedPatient) {
      this.setState({
        dateRange: range
      })

      console.log(range)
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

      let newColumns = tableDataStore.getColumnHeaders(level);

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

    this.handleResize();

    tableDataStore.setTemplate(this.state.selectedTemplate.data);

    tableDataStore.getFirstPageData(patientId, this.state.showEqClass, this.state.batchSize, this.state.dateRange)
      .then(function(data) {

        // scroll to the anchor item
        that.anchorItemIndex = 0;
        that.anchorColIndex = 0;
        that.needRepositionRow = true;
        that.needRepositionCol = true;

        let columns = tableDataStore.getColumnHeaders(that.state.zoomLevel);
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: columns,
          moreButtonLabel: `Load ${that.state.batchSize} More`
        });
        console.log(that.state.flowsheetColumns);
        if (that.state.showOverviewMap) {
          that._processChartData(columns, data.tableData);
        }


      })
      .catch(function(error) {
        console.log(error);
      });

  }

  appendData() {
    let that = this;

    that.setState({
      moreData: false
    });

    // get anchor item key, which is the 3nd item after the "visibleRowStartIndex" ??
    let offsetRowNum = 3;
    //let itemIndex = this.visibleRowStartIndex + offsetRowNum;
    let itemIndex = this.visibleRowStartIndex < 1 ? this.visibleRowStartIndex : this.visibleRowStartIndex + offsetRowNum;
    let itemKey = this.state.flowsheetData[itemIndex].key;
    tableDataStore.getNextPageData(this.state.showEqClass)
      .then(function(data) {
        // console.log("in appendData");
        // console.log("visibleRowStartIndex: " + that.visibleRowStartIndex);
        // console.log(itemKey);

        // scroll to the anchor item
        let newItemIndex = that._findItemIndexByKey(data.tableData, itemKey);
        // console.log("newItemIndex: " + newItemIndex);

        that.anchorItemIndex = newItemIndex >= offsetRowNum  ? newItemIndex - offsetRowNum : 0;
        // console.log("anchorItemIndex: " + that.anchorItemIndex);

        that.needRepositionRow = true;

        let columns = tableDataStore.getColumnHeaders(that.state.zoomLevel);
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: columns,
        })
        if (that.state.showOverviewMap) {
          that._processChartData(columns, data.tableData);
        }

      })
      .catch(function(error) {
        console.log(error);
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
    if (currentScroll > 0 && currentScroll >= maxScroll - tableDataStore.scrollBufferSize) {  // 20 px as a buffer area
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
    // console.log("in componentDidUpdate")
    // console.log(this.anchorItemIndex);
    // console.log(this.needReposition);


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

  handleResize(e) {
      // let headerHeight = this.refHeader.current.clientHeight;
      // let footerHeight = this.refFooter.current.clientHeight;
      //
      // console.log("headerHeight: " + headerHeight);
      let tableHeight = !this.state.showControlPanel ? window.innerHeight - 170 : window.innerHeight - 508;

      this.setState({
        // tableHeight: window.innerHeight - headerHeight - footerHeight -20, // not sure why there is a gap
        tableHeight: tableHeight,
        tableWidth: window.innerWidth -10
      })
  }

  hideShowControlPanel = () => {

    let tableHeight = this.state.showControlPanel ? window.innerHeight - 170 : window.innerHeight - 508;
    this.setState({
      showControlPanel: !this.state.showControlPanel,
      tableHeight: tableHeight
    })

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
              chartData.data.push({x: col.start, y: iLen - i -1, label: item.displayName + "\n" + value + "\n" + col.tsLabel, abnormal: item[col.dataKey].abnormal});
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

    console.log(parameters)
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

    console.log("colStart: " + parameters.visibleColumnStartIndex)
    console.log("colStop: " + parameters.visibleColumnStopIndex)

    let rowStart = parameters.visibleRowStartIndex;
    let rowStop = parameters.visibleRowStopIndex;
    console.log("rowStart: " + rowStart)
    console.log("rowStop: " + rowStop)

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
    let name = this.state.selectedPatient ? this.state.selectedPatient.name : "";
    let gender = this.state.selectedPatient ? this.state.selectedPatient.gender : "";
    // let dob = this.state.selectedPatient ? this.state.selectedPatient.dob : "";
    let pid = this.state.selectedPatient ? this.state.selectedPatient.id: "";
    // let deceased = this.state.selectedPatient ? this.state.selectedPatient.resource.deceasedDateTime : "";
    let reloadButtonLabel = this.state.flowsheetData ? "Reload Data" : "Load Data";

    let rowCount = this.state.flowsheetData ? this.state.flowsheetData.length +1 : 0;
    let colCount = this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 0;

    return (
      <div>
        <div id="lf-app-header" ref={this.refHeader}>
          <div id="lf-header">
            <Row type="flex" justify="start" className="lf-row">
              <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                <a href="http://lhncbc.nlm.nih.gov" title="Lister Hill National Center for Biomedical Communications (LHNCBC)" id="logo">
                  <img src={LHCImage} alt="Lister Hill National Center for Biomedical Communications (LHNCBC)"></img>
                </a>
                <div id="siteNameBox">
                  <a href="/">
                <span id="siteName">
                  {this.state.appTitle}
                </span>
                  </a>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                <Row type="flex" justify="start" className="lf-row">
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Row>
                      <Col>
                        <PatientSearchDialog selectedPatient={this.state.selectedPatient} onOK={this.setSelectedPatient}/>
                      </Col>
                    </Row>
                    { this.state.selectedPatient &&
                      <Row className="lf-patient-info">
                        <Col xs={24} sm={24} md={24} lg={6} xl={6} className="lf-patient-name" >{name}</Col>
                        <Col xs={24} sm={12} md={6} lg={4} xl={4}>ID: <span className="lf-bold">{pid}</span></Col>
                        <Col xs={24} sm={12} md={6} lg={4} xl={4}>Gender: <span className="lf-bold">{gender}</span></Col>
                        {/*<Col xs={24} sm={12} md={6} lg={4} xl={4}>DoB: <span className="lf-bold">{dob}</span></Col>*/}
                        {/*<Col xs={24} sm={12} md={6} lg={4} xl={4}>Deceased: <span className="lf-bold">{deceased}</span></Col>*/}
                      </Row>
                    }

                  </Col>
                  <Col>

                    <Button icon="sliders" onClick={this.hideShowControlPanel}/>
                  </Col>
                </Row>
              </Col>

            </Row>

          </div>

          { this.state.showControlPanel &&
            <div id='lf-options'>
            {/*<Row type="flex" justify="start" className="lf-row">*/}
              {/*<Col>*/}
                {/*<PatientSearchDialog selectedPatient={this.state.selectedPatient} onOK={this.setSelectedPatient}/>*/}
              {/*</Col>*/}
              {/*{ this.state.selectedPatient &&*/}
              {/*<Col className="lf-patient-info" span={20}>*/}
                {/*<Row>*/}
                  {/*<Col xs={24} sm={24} md={24} lg={6} xl={6} className="lf-patient-name" >{name}</Col>*/}
                  {/*<Col xs={24} sm={12} md={6} lg={4} xl={4}>ID: <span className="lf-bold">{pid}</span></Col>*/}
                  {/*<Col xs={24} sm={12} md={6} lg={4} xl={4}>Gender: <span className="lf-bold">{gender}</span></Col>*/}
                  {/*/!*<Col xs={24} sm={12} md={6} lg={4} xl={4}>DoB: <span className="lf-bold">{dob}</span></Col>*!/*/}
                  {/*/!*<Col xs={24} sm={12} md={6} lg={4} xl={4}>Deceased: <span className="lf-bold">{deceased}</span></Col>*!/*/}
                {/*</Row>*/}
              {/*</Col>*/}
              {/*}*/}
            {/*</Row>*/}
            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <TemplatePicker selectedTemplate={this.state.selectedTemplate} setSelectedTemplate={(temp) => this.setSelectedTemplate(temp)}/>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <ConditionListDialog selectedPatient={this.state.selectedPatient}/>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Button className='lf-button' type="primary" icon="reload" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>{reloadButtonLabel}</Button>  
                <Button className='lf-button' type="primary" icon="swap" disabled={!this.state.moreData} onClick={() => this.appendData()}>{this.state.moreButtonLabel}</Button>
              </Col>
            </Row>

            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <ZoomLevelPicker zoomLevel={this.state.zoomLevel} setZoomLevel={(level) => this.setZoomLevel(level)}/>
                <BatchSizePicker batchSize={this.state.batchSize} setBatchSize={(size) => this.setBatchSize(size)}/>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Row className="lf-switch-row">
                  <Switch checkedChildren="Units Shown" unCheckedChildren="Units Hidden" defaultChecked={false} onChange={this.onUnitSwitchChange}/>
                </Row>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Row className="lf-switch-row">
                  <Switch checkedChildren="Equivalence Classes Collapsed" unCheckedChildren="Equivalence Classes Expanded" defaultChecked={false} onChange={this.onEqClassSwitchChange}/>
                </Row>
              </Col>
            </Row>

            {this.state.lastObxDate && this.state.firstObxDate &&
              <Row type="flex" className="lf-row">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <TimelineSlider minDate={this.state.firstObxDate} maxDate={this.state.lastObxDate}
                                  setRange={(r) => this.setDateRange(r)}
                  />
                </Col>
              </Row>
            }
            <Row type="flex" className="lf-row">
              <Button type="dashed" icon={this.state.showAdditionalControls ? "down" : "right"} onClick={() => this.onAdditionalControlsChange()}>Additional Controls</Button>
            </Row>

            { this.state.showAdditionalControls &&
            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={6} lg={6} xl={4}>
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

              <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                Displayed Resources: <span className="lf-bold">{ tableDataStore.retrievedNumOfRes }</span>
              </Col>
              <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                Total Resources: <span className="lf-bold">{ tableDataStore.availableNumOfRes }</span>
              </Col>
              <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                Columns: <span className="lf-bold">{this.state.flowsheetColumns ? this.state.flowsheetColumns.length - 2 : 0 }</span>
              </Col>
              <Col xs={24} sm={12} md={5} lg={5} xl={5}>
                Rows: <span className="lf-bold">{this.state.flowsheetData ? this.state.flowsheetData.length : 0 }</span>
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
                    width={500}
                    height={420}
                    chartData = {this.state.chartData}
                    visiblePosition = {this.state.visiblePosition}
                >
                </OverviewMap>
            </div>
        }

        <div id="lf-data-table">
          {/* <div><span>{this.state.isLoading ? "Loading ..." : ""}</span></div> */}
          
          {/*<Table className={this.state.tableClass}*/}
            {/*// loading= {this.state.isLoading}*/}
            {/*columns={this.state.flowsheetColumns} */}
            {/*dataSource={this.state.flowsheetData} */}
            {/*rowClassName={(record, index) => this.getRowClass(record, index)}*/}
            {/*scroll={{ x: tableDataStore.tableWidth , y: this.state.tableHeight}}*/}
            {/*pagination={false} */}
            {/*defaultExpandAllRows={true}*/}
          {/*/>*/}

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

          {/* <button onClick={() => this.appendData()}>Load More Data</button>
          <button onClick={() => this.testFhirServer()}>Get Data from FHIR Server</button>
          <button onClick={() => this.getNextPageData()}>Get Next Page Data</button> */}

        </div>
        {/*<div id="lf-app-footer" ref={this.refFooter}>*/}
        {/*</div>*/}
      </div>
    );
  }
}


export default App;