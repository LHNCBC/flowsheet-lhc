import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Row, Col, Button, Switch, Collapse, Icon } from 'antd';

import GridCell from './components/gridCell';
import { FixedSizeGrid, VariableSizeGrid } from 'react-window';

import PatientSearchDialog from './components/patientSearchDialog';
import TemplatePicker from './components/templatePicker';
import ZoomLevelPicker from './components/zoomLevelPicker';
import ConditionListDialog from './components/conditionListDialog';
import tableDataStore from './stores/tableDataStore';

import LHCImage from './lhncbc.jpg';

const Panel = Collapse.Panel;

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
      showEqClass: false,
      selectedPatient: null,
      appTitle: "LHC Flowsheet On FHIR",
      selectedTemplate: null,
      moreData: false,
      tableHeight: window.innerHeight,
      tableWidth: window.innerWidth,
      showAdditionalControls: false,
      showDebugInfo: false
    };

    this.anchorItemIndex = 0;
    this.needReposition = false;
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
    this.stayPut = this.stayPut.bind(this);

  }

  gridRef = React.createRef();

  setSelectedPatient(patient) {
    // reset template
    if (patient && (!this.state.selectedPatient || patient.id !== this.state.selectedPatient.id)) {
      this.setState({
        selectedPatient: patient,
        flowsheetData : null,
        flowsheetColumns: null,
        moreData: false
        })  
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

  }

  setZoomLevel = (level) => {
    //console.log(level);
    this.setState({
      zoomLevel: level
    });

    if (this.state.flowsheetData) {
      this.setState({
        flowsheetColumns: tableDataStore.getColumnHeaders(level)
      })  
    }



  }

  loadData() {

    let patientId = this.state.selectedPatient ? this.state.selectedPatient.id : ""; 
    let that = this;

    this.handleResize();

    tableDataStore.setTemplate(this.state.selectedTemplate.data);

    tableDataStore.getFirstPageData(patientId, this.state.showEqClass)
      .then(function(data) {

        // scroll to the anchor item
        that.anchorItemIndex = 0;
        that.needReposition = true;

        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.zoomLevel),

        });
        console.log(that.state.flowsheetColumns);


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

        that.needReposition = true;

        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.zoomLevel),
        })


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
    if (this.needReposition) {
      this.stayPut(this.anchorItemIndex)
      this.needReposition = false;
    }

  }

  componentWillUnmount() {
    // // Cancel any pending updates since we're unmounting.
    // this.scheduleUpdate.cancel();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {
      let headerHeight = this.refHeader.current.clientHeight;
      let footerHeight = this.refFooter.current.clientHeight;

      this.setState({
        tableHeight: window.innerHeight - headerHeight - footerHeight -20, // not sure why there is a gap
        tableWidth: window.innerWidth -10
      })
  }


  onUnitSwitchChange(checked) {

    this.setState({
      showUnit: checked,
    })

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

    this.needReposition = true;

    this.setState({
      showEqClass: checked,
      flowsheetData: newData
    })

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
  }


  columnWidth(index) {
    return index === 0 ? 300 : index === 1 ? 110 : 120;
  }

  rowHeight(index) {
    return index === 0 ? 72 : 30;
  }

  expandCollapseAHeader(itemKey) {
    console.log('in app.js');
    console.log(itemKey);
    let changed = tableDataStore.expandCollapseAHeader(itemKey);
    console.log(changed);
    if (changed) {
      this.setState({
        flowsheetData: tableDataStore.resetData(this.state.showEqClass),
      })

    }
  }

  expandCollapseAnEqClassRow(itemKey) {
    console.log('in app.js');
    console.log(itemKey);
    let changed = tableDataStore.expandCollapseAnEqClassRow(itemKey);
    console.log(changed);
    if (changed) {
      this.setState({
        flowsheetData: tableDataStore.resetData(this.state.showEqClass),
      })

    }
  }

  stayPut(rowIndex, colIndex) {
    if (rowIndex === undefined) {
//      console.log("no rowIndex")
      rowIndex = this.anchorItemIndex;
    }
    if (colIndex === undefined) {
      colIndex = this.visibleColumnStartIndex;
    }
//    console.log("in stayPut")
//    console.log(rowIndex);
    this.gridRef.current.scrollToItem({
      align: "start",
      columnIndex: colIndex,
      rowIndex: rowIndex
    });
  }


  render() {
    let name = this.state.selectedPatient ? this.state.selectedPatient.name : "";
    let gender = this.state.selectedPatient ? this.state.selectedPatient.gender : "";
    let dob = this.state.selectedPatient ? this.state.selectedPatient.dob : "";
    let pid = this.state.selectedPatient ? this.state.selectedPatient.id: "";
    let deceased = this.state.selectedPatient ? this.state.selectedPatient.resource.deceasedDateTime : "";
    let reloadButtonLabel = this.state.flowsheetData ? "Reload Data" : "Load Data";

    let rowCount = this.state.flowsheetData ? this.state.flowsheetData.length : 0;
    let colCount = this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 0;

    return (
      <div>
        <div id="lf-app-header" ref={this.refHeader}>
          <div id="lf-header">
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
          </div>
          <div id='lf-options'>
            <Row type="flex" justify="start" className="lf-row">
              <Col>
                <PatientSearchDialog selectedPatient={this.state.selectedPatient} onOK={(patient) => this.setSelectedPatient(patient)}/>
              </Col>
              { this.state.selectedPatient &&
              <Col className="lf-patient-info" span={20}>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={6} xl={6} className="lf-patient-name" >{name}</Col>
                  <Col xs={24} sm={12} md={6} lg={4} xl={4}>ID: <span className="lf-bold">{pid}</span></Col>
                  <Col xs={24} sm={12} md={6} lg={4} xl={4}>Gender: <span className="lf-bold">{gender}</span></Col>
                  <Col xs={24} sm={12} md={6} lg={4} xl={4}>DoB: <span className="lf-bold">{dob}</span></Col>
                  <Col xs={24} sm={12} md={6} lg={4} xl={4}>Deceased: <span className="lf-bold">{deceased}</span></Col>
                </Row>
              </Col>
              }
            </Row>
            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <TemplatePicker selectedTemplate={this.state.selectedTemplate} setSelectedTemplate={(temp) => this.setSelectedTemplate(temp)}/>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <ConditionListDialog selectedPatient={this.state.selectedPatient}/>
              </Col>
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Button className='lf-button' type="primary" icon="reload" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>{reloadButtonLabel}</Button>  
                <Button className='lf-button' type="primary" icon="swap" disabled={!this.state.moreData} onClick={() => this.appendData()}>Load More Data</Button>
              </Col>
            </Row>

            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <ZoomLevelPicker zoomLevel={this.state.zoomLevel} setZoomLevel={(level) => this.setZoomLevel(level)}/>
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

            <Row type="flex" className="lf-row">
              <Button type="dashed" icon={this.state.showAdditionalControls ? "down" : "right"} onClick={() => this.onAdditionalControlsChange()}>Additional Controls</Button>
            </Row>

            { this.state.showAdditionalControls &&
            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <Row className="lf-switch-row">
                  <Switch checkedChildren="Debug Info Shown" unCheckedChildren="Debug Info Hidden" defaultChecked={false} onChange={this.onDebugSwitchChange}/>
                </Row>
              </Col>
            </Row>
            }
          </div>

          <div id="lf-status">
            <Row type="flex" className='lf-data-info lf-row'>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                Displayed Resources: <span className="lf-bold">{ tableDataStore.retrievedNumOfRes }</span>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                Total Resources: <span className="lf-bold">{ tableDataStore.availableNumOfRes }</span>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                Columns: <span className="lf-bold">{this.state.flowsheetColumns ? this.state.flowsheetColumns.length-3 : 0 }</span>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                Rows: <span className="lf-bold">{this.state.flowsheetData ? this.state.flowsheetData.length : 0 }</span>
              </Col>
            </Row>
          </div>


        </div>
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
        <div id="lf-app-footer" ref={this.refFooter}>
        </div>
      </div>
    );
  }
}


export default App;