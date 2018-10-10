import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Table, Layout, Row, Col, Input } from 'antd';
//import { Sparklines, SparklinesLine } from 'react-sparklines';
//import rafSchedule from 'raf-schd';
//import { FlowSheetData } from './FlowsheetData.js';

//import temp from './stores/singleTree';
import temp from './stores/hirarchy';

import fhirDataStore from './stores/fhirDataStore';


import SearchDialog from './components/searchDialog';
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
      showUnit: false,
      expandEqClass: true,
      currentPatient: null,
      appTitle: "Flowsheet FHIR App"
    };
  }

  handleOK(patient) {
    if (patient) {
      this.setState({
        currentPatient: patient
      })  
    }
  }


  loadData() {

    let patientId = this.state.currentPatient ? this.state.currentPatient.id : ""; // "pat-88616";// "pat-98"; 
    let that = this;

    tableDataStore.setTemplate(temp);

    tableDataStore.getFirstPageData(patientId)
      .then(function(data) {
        that.setState({
          flowsheetData: data,
          flowsheetColumns: tableDataStore.getColumnHeaders()         
        })    
        console.log(data);
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
          flowsheetData: data,
          flowsheetColumns: tableDataStore.getColumnHeaders()         
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
    var tableContent = document.querySelector('.ant-table-scroll > .ant-table-body')
    tableContent.addEventListener('scroll', (event) => {
      this.handleScroll(event);      
    })
  }

  componentWillUnmount() {
    // Cancel any pending updates since we're unmounting.
    this.scheduleUpdate.cancel();
  }


  pickTemplate() {
    console.log(temp)
    tableDataStore.setTemplate(temp);
    console.log(tableDataStore.templateTree);
  }


  render() {
    let gender = this.state.currentPatient ? this.state.currentPatient.gender : "";
    let dob = this.state.currentPatient ? this.state.currentPatient.dob : "";
    let phone = this.state.currentPatient ? this.state.currentPatient.phone: "";
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
        {/* <Layout>
          <Content> */}
            <SearchDialog currentPatient={this.state.currentPatient} onOK={(patient) => this.handleOK(patient)}/>
            {/* <TemplateOptions></TemplateOptions> */}
            {/* // antd table */}
            
            <Row>
              <Col span={6}>Gender: {gender}</Col>
              <Col span={6}>DoB: {dob}</Col>
              <Col span={6}>Phone #: {phone}</Col>
              <Col span={6}></Col>
            </Row>
            <Row>
              <Col span={6}>Checkbox: hide/show eq. clasess</Col>
              <Col span={6}>Checkbox: hide/show units</Col>
            </Row>
            <div><span>{this.state.isLoading ? "Loading ..." : ""}</span></div>
            
            <Table className={this.state.tableClass}
            columns={this.state.flowsheetColumns} 
            dataSource={this.state.flowsheetData} 
            rowClassName={(record, index) => 'level-' + record.L + ' type-' + (record.isHeader ? 'header' : 'data') }
            scroll={{ x: this.state.unitWidth * (this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 1200), y:800}}
            pagination={false} 
            defaultExpandAllRows={true}
            />
            {/* <Pagination current={this.state.current} onChange={this.onChange} total={50}/> */}
            <button disabled={!this.state.currentPatient} onClick={() => this.loadData()}>Reload Data</button>
            {/* <button onClick={() => this.appendData()}>Load More Data</button> */}
            <button onClick={() => this.toggleClassRows()}>Expand/Collapse Class Rows</button>
            {/* <button onClick={() => this.testFhirServer()}>Get Data from FHIR Server</button>
            <button onClick={() => this.getNextPageData()}>Get Next Page Data</button> */}

            <button onClick={() => this.pickTemplate()}>Pick a Template</button>

          {/* </Content> */}
          {/* <Footer> */}
            <div><span>Number of Columns: {this.state.flowsheetColumns ? this.state.flowsheetColumns.length : 0 }</span></div>
            <div><span>Number of Rows: {this.state.flowsheetData ? this.state.flowsheetData.length : 0 }</span></div>
          {/* </Footer>
        </Layout> */}

        
        
      </div>
    );
  }
}


export default App;