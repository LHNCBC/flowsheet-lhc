
import React from 'react';
//import './index.css';
import { Modal, Button, Checkbox } from 'antd';
import PatientPicker from './patientPicker';

class PatientSearchDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedPatient: this.props.selectedPatient,
      preLoadData: true
    };

  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  setSelectedPatient = (patient) => {
    this.setState({
      selectedPatient: patient
    })
  }

  handleOK = () => {
    this.props.onOK(this.state.selectedPatient, this.state.preLoadData);
    this.hideModal();
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }

  patientButtonLabel() {
    return this.props.selectedPatient ? "" : ""; //"Select Patient";
  }

  onChange =(e) => {
    this.setState({
      preLoadData: e.target.checked
    });
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    let label = this.patientButtonLabel();
    
    return (
      <div>
        <Button type="primary" icon='user' onClick={this.showModal} title={"Select a patient"} size={"large"} shape="circle">{label}</Button>
        <Modal
          title="Patient Picker"
          visible={this.state.visible}
          onOk={this.handleOK}
          onCancel={this.hideModal}
          okText="Ok"
          cancelText="Cancel"
        >
          <PatientPicker selectedPatient={this.state.selectedPatient} setSelectedPatient={(patient)=>this.setSelectedPatient(patient)}/>

          <Checkbox className="patient-checkbox" defaultChecked={this.state.preLoadData} onChange={this.onChange}>Preload first page of data.</Checkbox>
        </Modal>
      </div>
    );
  }
}

export default PatientSearchDialog;

          