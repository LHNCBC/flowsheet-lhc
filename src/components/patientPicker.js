import React from "react";
import "antd/dist/antd.css";
import "./patientPicker.css";
import {Icon, AutoComplete, Tabs, List, Select} from "antd";
import fhirStore from '../stores/fhirDataStore.js';

const Option = AutoComplete.Option;
const TabPane = Tabs.TabPane;

const preSelectedPatients = [
  {name: "AMIT AZIZ", id: "pat-33378", gender: "male", desc: "20517 Observations"},
  {name: "WILFREDO R BHAT", id: "pat-88616", gender: "female", desc: "20172 Observations"},
  {name: "BLAIR MACALUSO", id: "pat-87082", gender: "female", desc: "32359 Observations"},
  {name: "CARMEN U REED", id: "pat-123839", gender: "male", desc: "22406 Observations"},
  {name: "DILIP D VAUGHAN", id: "pat-4322", gender: "male", desc: "30518 Observations"}
];
const defaultPatientIndex = 0;

class PatientPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      selected: this.props.selectedPatient ? this.props.selectedPatient.id : preSelectedPatients[defaultPatientIndex].id,
      selectedPatient: this.props.selectedPatient ? this.props.selectedPatient : preSelectedPatients[defaultPatientIndex]
    };

    if (!this.props.selectedPatient) {
      this.props.setSelectedPatient(preSelectedPatients[defaultPatientIndex]);
    }

    // this.onSelect = this.onSelect.bind(this);
    // this.onSelect2 = this.onSelect2.bind(this);
    // this.handleSearch = this.handleSearch.bind(this);
  }

  onSelect = (value, item) => {
    // console.log("onSelect", value);

    //value is patient.id
    let selectedPatient = this.state.dataSource.find((patient) => {return patient.id === value});
    this.setState({
      selected: value,
      selectedPatient: selectedPatient
    });

    this.props.setSelectedPatient(selectedPatient);
  }

  onSelect2 = (value, item) => {
    // console.log("onSelect", value);

    //value is patient.id
    let selectedPatient = preSelectedPatients.find((patient) => {return patient.id === value});
    this.setState({
      selected: value,
      selectedPatient: selectedPatient
    });

    this.props.setSelectedPatient(selectedPatient);
  }

  renderOption = item => {
    return (
      <Option key={item.id} text={item.name}>
      <div className="item-title">
        <Icon type="user" style={{ fontSize: 16, color: '#08c' }} />
        <span className="item-property">
          <strong> {item.name} </strong>
        </span>
      </div>
      <div className="item-metadata">
        <span className="item-property">
          ID: <strong>{item.id}</strong>
        </span>
        <span className="item-property">
          Gender: <strong>{item.gender}</strong>
        </span>
        {/*<span className="item-property">*/}
          {/*DoB: <strong>{item.dob}</strong>*/}
        {/*</span>*/}
        {/*<span className="item-property">*/}
          {/*Deceased Date & Time: <strong>{item.resource.deceasedDateTime}</strong>*/}
        {/*</span>*/}
      </div>
        
      </Option>
    );
  }

  renderOption2 = item => {
    return (
        <Option key={item.id} text={item.name}>
          <div className="item-title">
            <Icon type="user" style={{ fontSize: 16, color: '#08c' }} />
            <span className="item-property">
               <strong> {item.name} </strong>
            </span>
            <span className="item-property">
               ID: <strong>{item.id}</strong>
            </span>
            <span className="item-property">
               Desc: <strong>{item.desc}</strong>
            </span>
          </div>
        </Option>
    );
  }

  
  handleSearch = value => {

    let that = this;
    fhirStore.searchPatientByName(value)
      .then(function(list) {
        that.setState({
          dataSource: list ? list : []
        });    
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div >
        <Tabs type="card">
          <TabPane tab="Pre-Selected Patient" key="select">
            <Select
                style={{ width: "100%" }}
                placeholder="Select a patient"
                optionFilterProp="children"
                onSelect={this.onSelect2}
                defaultValue={this.state.selected}
            >
              {preSelectedPatients.map(item => this.renderOption2(item))}
            </Select>
          </TabPane>
          <TabPane tab="Search Patient" key="search">
            <AutoComplete
                //className="global-search"
                // size="large"
                style={{ width: "100%" }}
                dataSource={dataSource.map(this.renderOption)}
                defaultValue={this.selected}
                //defaultValue={[this.selected]}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search patient by name"
                optionLabelProp="text"
            />
          </TabPane>
        </Tabs>


      </div>
    );
  }
}

export default PatientPicker;


