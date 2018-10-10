
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Modal, Button  } from 'antd';
import PatientPicker from './patientPicker';

class searchDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedPatient: this.props.currentPatient      
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
    this.props.onOK(this.state.selectedPatient);
    this.hideModal();
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }

  patientButtonLabel() {
    return this.props.currentPatient ? this.props.currentPatient.name  : "Search Patient";
  }


  render() {
    let label = this.patientButtonLabel();
    
    return (
      <div>
        <Button type="primary" icon='user' onClick={this.showModal}>{label}</Button>
        <Modal
          title="Patient Picker"
          visible={this.state.visible}
          onOk={this.handleOK}
          onCancel={this.hideModal}
          okText="Ok"
          cancelText="Cancel"
        >
          <PatientPicker selectedPatient={this.state.selectedPatient} setSelectedPatient={(patient)=>this.setSelectedPatient(patient)}/>
        </Modal>
      </div>
    );
  }
}

export default searchDialog;

          