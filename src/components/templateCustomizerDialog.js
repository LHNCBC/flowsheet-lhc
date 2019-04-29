
import React from 'react';
//import './index.css';
import {Modal, Button, Checkbox, Col} from 'antd';
import TemplateCustomizer from './templateCustomizer';

class TemplateCustomizerDialog extends React.Component {

// selectedTemplate={this.state.selectedTemplate}
// flowsheetData={this.state.flowsheetData}
// flowsheetColumns={this.state.flowsheetColumns}
// setCustomizedData={(data) => this.setCustomizedData(data)}

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

  }

  showModal = () => {
    this.setState({
      visible: true
    });
  }

  setCustomizedData = (data) => {
    this.props.setCustomizedData(data);
  }

  handleOK = () => {
    this.props.setCustomizedData(this.state.selectedPatient);
    this.hideModal();
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }


  render() {
    let label = "Customize View";
    
    return (
      <div>
        <Button type="primary" icon='project' onClick={this.showModal} title={"Customize view"} >{label}</Button>
        <Modal
          title="View Customizer"
          visible={this.state.visible}
          onOk={this.handleOK}
          onCancel={this.hideModal}
          okText="Ok"
          cancelText="Cancel"
        >
          <TemplateCustomizer
              selectedTemplate={this.props.selectedTemplate}
              flowsheetData={this.props.flowsheetData}
              flowsheetColumns={this.props.flowsheetColumns}
              setCustomizedData={(data) => this.setCustomizedData(data)}/>
        </Modal>
      </div>
    );
  }
}

export default TemplateCustomizerDialog;

          