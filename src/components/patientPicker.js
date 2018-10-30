import React from "react";
import "antd/dist/antd.css";
import "./patientPicker.css";
import { Icon, AutoComplete } from "antd";
import fhirStore from '../stores/fhirDataStore.js';

const Option = AutoComplete.Option;


class PatientPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      selected: this.props.selectedPatient ? this.props.selectedPatient.id : null,
      selectedPatient: this.props.selectedPatient      
    };

    this.onSelect = this.onSelect.bind(this);
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
        <span className="item-property">
          DoB: <strong>{item.dob}</strong>
        </span>
        <span className="item-property">
          Deceased Date & Time: <strong>{item.resource.deceasedDateTime}</strong>
        </span>
      </div>
        
      </Option>
    );
  }
  
  handleSearch = value => {

    let that = this;
    fhirStore.searchPatientByName(value)
      .then(function(list) {
        console.log(list);
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
        <AutoComplete
          //className="global-search"
          size="large"
          style={{ width: "100%" }}
          dataSource={dataSource.map(this.renderOption)}
          defaultValue={this.selected}
          //defaultValue={[this.selected]}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder="Search patient by name"
          optionLabelProp="text"
        >
          
        </AutoComplete>
      </div>
    );
  }
}

export default PatientPicker;


