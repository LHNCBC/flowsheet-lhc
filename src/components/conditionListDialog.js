
import React from 'react';
import { Modal, Button, List, Card } from 'antd';
import fhirStore from '../stores/fhirDataStore.js';

class ConditionListDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      conditionList: []
    };

    //console.log(this.props.selectedPatient)
  }

  showModal = () => {
    this._getConditionList();
    this.setState({
      visible: true
    });
  }

  handleOK = () => {
    this.hideModal();
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }


  _parseConditionBundle = (bundle) => {
    let list = bundle.entry;
    let conditionList = [];
    if (list) {
      list.forEach(item => {
        conditionList.push({
          name: this._getConditionName(item),
          code: this._getConditionCode(item),
          active: this._getConditionStatus(item),
          date: this._getConidtionAssertedDate(item)
        })  
      });      
    }

    // sort by name
    let sortedConditions = conditionList.sort((a,b) => {return a.name.toUpperCase() > b.name.toUpperCase() ? 1: -1} )
    this.setState({
      conditionList: sortedConditions
    })
  }

  // "code": {
  //   "coding": [
  //     {
  //       "system": "http://hl7.org/fhir/sid/icd-9-cm",
  //       "code": "290.0",
  //       "display": "dementia"
  //     }
  //   ]
  // },
  _getConditionName(entry) {
    let ret = "";
    let resource = entry.resource;
    if (resource && resource.code && resource.code.coding && resource.code.coding.length>0) {
      ret = resource.code.coding[0].display;
    }
    return ret;
  }
  _getConditionCode(entry) {
    let ret = "";
    let resource = entry.resource;
    if (resource && resource.code && resource.code.coding && resource.code.coding.length>0) {
      ret = resource.code.coding[0].code;
    }
    return ret;
  }

  // "clinicalStatus": "active",
  _getConditionStatus(entry) {
    let ret = "";
    let resource = entry.resource;
    if (resource && resource.status) {
      ret = resource.status
    }
    return ret;
  }

  // "assertedDate": "2138-04-22T10:44:00Z"
  _getConidtionAssertedDate(entry) {
    let ret = "";
    let resource = entry.resource;
    if (resource && resource.assertedDate) {
      ret = resource.assertedDate
    }
    return ret;
  }

  _getConditionList = () => {

    let that = this;
    fhirStore.getAllConditionByPatientId(this.props.selectedPatient.id, 100)
      .then(function(bundle) {
        that._parseConditionBundle(bundle);
      })
      .catch(function(error) {
        console.log(error);
      });
  };



  render() {
    const { conditionList } = this.state;
    return (      
      <div>
        <Button type="primary" icon='profile'  disabled={!this.props.selectedPatient} onClick={this.showModal}>Recent Conditions</Button>
        <Modal
          // maskClosable = {true}
          title="Recent Conditions"
          visible={this.state.visible}
          onCancel={this.hideModal}
          width="50%"
          footer={[
            <Button key="ok" type="primary" onClick={this.handleOK}>
              Ok
            </Button>
          ]}
        >
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={conditionList}
            renderItem={item => (
              <List.Item className='lf-condition-item'>
                <div><strong>{item.name}</strong></div>
                <div className="lf-item-code">ICD9: <strong>{item.code}</strong></div>
              </List.Item>
            )}
          />

        </Modal>
      </div>
    );
  }
}

export default ConditionListDialog;

          