import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import loincTemp from "../stores/h14";
import cardiacTemp from "../stores/c14";

const Option = Select.Option;


class TemplatePicker extends React.Component {

  constructor(props) {

    super(props);

    let list = [
        {name: 'Full View', file: 'h14.js', data: loincTemp},
        {name: 'Cardiac View', file: 'c14.js', data: cardiacTemp }
    ];

    // set default value
    let defaultValue = this.props.selectedTemplate ? this.props.selectedTemplate : list[0];
    // update container component
    if (!this.props.selectedTemplate) {
        this.props.setSelectedTemplate(defaultValue);
    }
    
    this.state = {
      templateList: list,
      selectedTemplate: defaultValue
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(value) {
    //console.log(`selected ${value}`);
    
    
    let selectedTemplate = this.state.templateList.find((temp) => {return temp.name === value});
    this.setState({
      selectedTemplate: selectedTemplate
    });

    this.props.setSelectedTemplate(selectedTemplate);
  }  
  
  render() {
      
    return (
        <div className={"lf-option"}>
          <div className={"lf-option-label"}>Flowsheet View:</div>
          <Select
              className={"lf-option-field"}
              showSearch
              style={{ width: 180 }}
              placeholder="Select a template"
              optionFilterProp="children"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              defaultValue={this.state.selectedTemplate.name}
          >
          {this.state.templateList.map(t => <Option key={t.name}>{t.name}</Option>)}
          </Select>
        </div>
    );
  }
}

export default TemplatePicker;


