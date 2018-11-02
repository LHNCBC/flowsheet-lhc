import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Table, Row, Col, Button, Switch } from 'antd';


import PatientSearchDialog from './components/patientSearchDialog';
import TemplatePicker from './components/templatePicker';
import ZoomLevelPicker from './components/zoomLevelPicker';
import ConditionListDialog from './components/conditionListDialog';
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
      showEqClass: false,
      selectedPatient: null,
      appTitle: "Flowsheet FHIR App",
      selectedTemplate: null,
      moreData: false,
      tableHeight: window.innerHeight

    };

    this.loadData = this.loadData.bind(this);
    this.appendData = this.appendData.bind(this);
    this.onUnitSwitchChange = this.onUnitSwitchChange.bind(this);
    this.onEqClassSwitchChange = this.onEqClassSwitchChange.bind(this);
    this.handleResize = this.handleResize.bind(this);

  }

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
    })

    if (this.state.flowsheetData) {
      this.setState({
        flowsheetColumns: tableDataStore.getColumnHeaders(this.state.showUnit, level)
      })  
    }

  }

  loadData() {

    let patientId = this.state.selectedPatient ? this.state.selectedPatient.id : ""; 
    let that = this;

    this.setState({
      isLoading: true
    })

    this.handleResize();

    tableDataStore.setTemplate(this.state.selectedTemplate.data);

    tableDataStore.getFirstPageData(patientId)
      .then(function(data) {
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.showUnit, that.state.zoomLevel)         
        })    
        //console.log(that.state.flowsheetColumns);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  appendData() {
    let that = this;

    this.setState({
      isLoading: true
    })

    tableDataStore.getNextPageData()
      .then(function(data) {
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.showUnit, that.state.zoomLevel)         
        })    
        //console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });

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
    this.setState({
      isLoading: false
    })
    //window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    //console.log("did update")
    // if (this.state.isLoading) {
    //   this.setState({
    //     isLoading: false
    //   })  
    // }
  }

  componentWillUnmount() {
    // // Cancel any pending updates since we're unmounting.
    // this.scheduleUpdate.cancel();
    //window.removeEventListener('resize', this.handleResize);
  }

  handleResize(e) {
      let headerHeight = document.querySelector('#lf-app-header').clientHeight
      let footerHeight = document.querySelector('#lf-app-footer').clientHeight
      this.setState({
        tableHeight: window.innerHeight - headerHeight - footerHeight - 90 // not sure why there is a gap 
      })
  }


  onUnitSwitchChange(checked) {

    this.setState({
      isLoading: true,    
      showUnit: checked,
      flowsheetColumns: tableDataStore.getColumnHeaders(checked, this.state.zoomLevel)  
    })

  }

  onEqClassSwitchChange(checked) {

    this.setState({
      isLoading: true,    
      showEqClass: checked,
      flowsheetColumns: tableDataStore.getColumnHeaders(this.state.showUnit, this.state.zoomLevel)
    })

  }

  getRowClass(record, index) {
    

    // header, eq-class or data row
    let className = 'type-' + (record.isHeader ? 'header' : record.isEqClassRow ? 'eq-class' : 'data')

    // level
    if (record.A) {
      className += ' level-' + record.A
    }

    // show/hide eq-class row
    if (record.isEqClassRow) {
      if (this.state.showEqClass) {
        className += ' show-eq-class'
      }
      else {
        className += ' hide-eq-class'
      }
      if (Object.keys(record.eqClassItems).length === 1) {
        className += ' has-single-item-in-eq-class'
      }
    }
    else if (record.isItemInEqClass) {
      if (this.state.showEqClass) {        
        className += ' hide-eq-class-item'
      }
      else {
        className += ' show-eq-class-item'
      }
      if (record.multipleItemsInEqClass) {
        className += ' multiple-item-in-eq-class'
      }
      else {
        className += ' single-item-in-eq-class'
      }
    }

    return className;
    
  }

  render() {
    let name = this.state.selectedPatient ? this.state.selectedPatient.name : "";
    let gender = this.state.selectedPatient ? this.state.selectedPatient.gender : "";
    let dob = this.state.selectedPatient ? this.state.selectedPatient.dob : "";
    let pid = this.state.selectedPatient ? this.state.selectedPatient.id: "";
    let deceased = this.state.selectedPatient ? this.state.selectedPatient.resource.deceasedDateTime : "";
    
    return (
      <div>
        <div id="lf-app-header">
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
              <Col >
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
                <Button className='lf-button' type="primary" icon="reload" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>Load Data</Button>  
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
          </div>
          <Row id="lf-status" className='lf-data-info lf-row'>
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
        <div id="lf-data-table">
          {/* <div><span>{this.state.isLoading ? "Loading ..." : ""}</span></div> */}
          
          <Table className={this.state.tableClass}
            // loading= {this.state.isLoading}
            columns={this.state.flowsheetColumns} 
            dataSource={this.state.flowsheetData} 
            rowClassName={(record, index) => this.getRowClass(record, index)}
            scroll={{ x: tableDataStore.tableWidth , y: this.state.tableHeight}}
            pagination={false} 
            defaultExpandAllRows={true}
          />
          {/* <button onClick={() => this.appendData()}>Load More Data</button>
          <button onClick={() => this.testFhirServer()}>Get Data from FHIR Server</button>
          <button onClick={() => this.getNextPageData()}>Get Next Page Data</button> */}

        </div>
        <div id="lf-app-footer">
        </div>
      </div>
    );
  }
}


export default App;