import React from "react";
import "antd/dist/antd.css";
import { Icon, Select } from "antd";

const Option = Select.Option;


class TemplatePicker extends React.Component {

  constructor(props) {

    super(props);

    let list = [
        {name: 'LOINC Hierarchy 5', file: 'h5.js'},
        {name: 'LOINC Hierarchy 6', file: 'h6.js'}
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
    console.log(`selected ${value}`);
    
    
    let selectedTemplate = this.state.templateList.find((temp) => {return temp.name === value});
    this.setState({
      selectedTemplate: selectedTemplate
    });

    this.props.setSelectedTemplate(selectedTemplate);
  }
  
  handleBlur() {
    console.log('blur');
  }
  
  handleFocus() {
    console.log('focus');
  }
  
  render() {
      
    return (
        <div>
        <Select
            showSearch
            style={{ width: 200 }}
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


