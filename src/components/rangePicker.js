import React from "react";
import "antd/dist/antd.css";
import { Icon, Select } from "antd";

const Option = Select.Option;


class RangePicker extends React.Component {

  constructor(props) {
   
    super(props);

    let list = [
      {name: 'All', file: ''},
      {name: 'One Per Day', file: ''},
      {name: 'One Per Week', file: ''},
      {name: 'One Per Month', file: ''},
      {name: 'One Per Year', file: ''}
  ];

    // set default value
    let defaultValue = this.props.selectedRange ? this.props.selectedRange : list[0];
    // update container component
    if (!this.props.selectedRange) {
        this.props.setSelectedRange(defaultValue);
    }
    
    this.state = {
      rangeList: list,
      selectedRange: defaultValue
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(value) {
    console.log(`selected ${value}`);
    
    
    let selectedRange = this.state.rangeList.find((range) => {return range.name === value});
    this.setState({
      selectedRange: selectedRange
    });

    this.props.setSelectedRange(selectedRange);
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
            placeholder="Select a Date Range"
            optionFilterProp="children"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            defaultValue={this.state.selectedRange.name}
        >
        {this.state.rangeList.map(t => <Option key={t.name}>{t.name}</Option>)}
        </Select>
        </div>
    );
  }
}

export default RangePicker;


