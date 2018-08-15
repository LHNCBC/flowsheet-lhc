
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Modal, Button  } from 'antd';
import PatientPicker from './patientPicker';

class searchDialog extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Search Patient</Button>
        <Modal
          title="Patient Picker"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Ok"
          cancelText="Cancel"
        >
          <PatientPicker />
        </Modal>
      </div>
    );
  }
}

export default searchDialog;

          