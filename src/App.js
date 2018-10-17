import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Table, Layout, Row, Col, Button, Switch } from 'antd';
//import { Sparklines, SparklinesLine } from 'react-sparklines';
//import rafSchedule from 'raf-schd';
//import { FlowSheetData } from './FlowsheetData.js';

//import temp from './stores/singleTree';
//import temp from './stores/h1';
import temp from './stores/h2';

import fhirDataStore from './stores/fhirDataStore';


import PatientSearchDialog from './components/patientSearchDialog';
import TemplatePicker from './components/templatePicker';
import RangePicker from './components/rangePicker';
import tableDataStore from './stores/tableDataStore';

import LHCImage from './lhncbc.jpg';

const { Header, Footer, Sider, Content } = Layout;

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
      showUnit: true,
      expandEqClass: true,
      selectedPatient: null,
      appTitle: "Flowsheet FHIR App",
      selectedTemplate: null,
      selectedRange: null,
      moreData: false
    };

    this.loadData = this.loadData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
    this.appendData = this.appendData.bind(this);
    this.onUnitSwitchChange = this.onUnitSwitchChange.bind(this);

  }

  setSelectedPatient(patient) {
    if (patient) {
      this.setState({
        selectedPatient: patient
      })  
    }
  }

  setSelectedTemplate = (temp) => {
    console.log(temp);
    this.setState({
      selectedTemplate: temp
    })
  }

  setSelectedRange = (range) => {
    console.log(range);
    this.setState({
      selectedRange: range
    })
  }

  loadData() {

    let patientId = this.state.selectedPatient ? this.state.selectedPatient.id : ""; // "pat-88616";// "pat-98"; 
    let that = this;

    tableDataStore.setTemplate(temp);

    tableDataStore.getFirstPageData(patientId)
      .then(function(data) {
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.showUnit)         
        })    
        console.log(data);
        console.log(that.state.flowsheetColumns);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  appendData() {
    let that = this;

    tableDataStore.getNextPageData()
      .then(function(data) {
        that.setState({
          flowsheetData: data.tableData,
          moreData: data.moreData,
          flowsheetColumns: tableDataStore.getColumnHeaders(that.state.showUnit)         
        })    
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });

  }

  loadMoreData() {
    console.log("loading data")
    this.appendData()
  }



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
          this.loadMoreData(event);
          this.setState({isLoading: false})    
        }
    }
  }

  toggleClassRows() {
    this.setState({
      tableClass: this.state.tableClass === "showClassRow" ? "hideClassRow" : "showClassRow"
    })
  }

  componentDidMount() {
    // var tableContent = document.querySelector('.ant-table-scroll > .ant-table-body')
    // tableContent.addEventListener('scroll', (event) => {
    //   this.handleScroll(event);      
    // })
  }

  componentWillUnmount() {
    // // Cancel any pending updates since we're unmounting.
    // this.scheduleUpdate.cancel();
  }


  pickTemplate() {
    console.log(temp)
    tableDataStore.setTemplate(temp);
    console.log(tableDataStore.templateTree);
  }

  onUnitSwitchChange(checked) {
    console.log(checked);

    this.setState({
      showUnit: checked,
      flowsheetColumns: tableDataStore.getColumnHeaders(checked)  
    })

  }

  onEqClassSwitchChange(checked) {

  }

  render() {
    let name = this.state.selectedPatient ? this.state.selectedPatient.name : "";
    let gender = this.state.selectedPatient ? this.state.selectedPatient.gender : "";
    let dob = this.state.selectedPatient ? this.state.selectedPatient.dob : "";
    let phone = this.state.selectedPatient ? this.state.selectedPatient.phone: "";
    let deceased = this.state.selectedPatient ? this.state.selectedPatient.resource.deceasedDateTime : "";
    
    return (
      <div>
        
          <div id="header">
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
          <div id='options'>
            <Row type="flex" justify="start" className="lf-row">
              <Col >
                <PatientSearchDialog selectedPatient={this.state.selectedPatient} onOK={(patient) => this.setSelectedPatient(patient)}/>
              </Col>
              { this.state.selectedPatient &&
              <Col className="lf-patient-info" span={20}>
                <Row>
                  <Col xs={24} sm={12} md={6} lg={6} xl={6} className="lf-patient-name" >{name}</Col>
                  <Col xs={24} sm={12} md={6} lg={6} xl={6}>Gender: {gender}</Col>
                  <Col xs={24} sm={12} md={6} lg={6} xl={6}>DoB: {dob}</Col>
                  {/* <Col xs={24} sm={12} md={6} lg={6} xl={6}>Phone #: {phone}</Col> */}
                  <Col xs={24} sm={12} md={6} lg={6} xl={6}>Deceased: {deceased}</Col>
                  <Col xs={24} sm={12} md={6} lg={6} xl={6}></Col>
                </Row>
              </Col>
              }
            </Row>
            <Row type="flex" className="lf-row">
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <TemplatePicker selectedTemplate={this.state.selectedTemplate} setSelectedTemplate={(temp) => this.setSelectedTemplate(temp)}/>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <RangePicker selectedRange={this.state.selectedRange} setSelectedRange={(range) => this.setSelectedRange(range)}/>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Row className="lf-switch-row">
                  <Switch checkedChildren="Show Units" unCheckedChildren="Hide Units" defaultChecked onChange={this.onUnitSwitchChange}/>
                </Row>
                <Row className="lf-switch-row">
                  <Switch checkedChildren="Expand Equivalence Classes" unCheckedChildren="Collapse Equivalence Classes" defaultChecked onChange={this.onEqClassSwitchChange}/>
                </Row>                
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <Button className='lf-button' type="primary" disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>Reload Data</Button>  
                <Button className='lf-button' type="primary" disabled={!this.state.moreData} onClick={() => this.appendData()}>Load More Data</Button>
              </Col>
            </Row>
          </div>
          <Row className='lf-data-info lf-row'>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              Displayed Resources: { tableDataStore.retrievedNumOfRes }
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              Total Resources: { tableDataStore.availableNumOfRes }
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              Columns: {this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 0 }
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              Rows: {this.state.flowsheetData ? this.state.flowsheetData.length : 0 }
            </Col>
          </Row>
          <div id="data-table">
            {/* <div><span>{this.state.isLoading ? "Loading ..." : ""}</span></div> */}
            
            <Table className={this.state.tableClass}
            columns={this.state.flowsheetColumns} 
            dataSource={this.state.flowsheetData} 
            rowClassName={(record, index) => 'level-' + record.L + ' type-' + (record.isHeader ? 'header' : 'data') }
            scroll={{ x: tableDataStore.tableWidth , y:800}}
            pagination={false} 
            defaultExpandAllRows={true}
            />
            {/* <button onClick={() => this.appendData()}>Load More Data</button>
            <button onClick={() => this.testFhirServer()}>Get Data from FHIR Server</button>
            <button onClick={() => this.getNextPageData()}>Get Next Page Data</button> */}

            {/* <button disabled={!this.state.selectedPatient} onClick={() => this.loadData()}>Reload Data</button>
            <button onClick={() => this.toggleClassRows()}>Expand/Collapse Class Rows</button>
            <button onClick={() => this.pickTemplate()}>Pick a Template</button> */}
          </div>
          <div id="footer">
          </div>

        
        
      </div>
    );
  }
}


export default App;