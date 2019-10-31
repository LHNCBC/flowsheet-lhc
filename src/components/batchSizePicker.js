import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const Option = Select.Option;


class BatchSizePicker extends React.Component {

  constructor(props) {
   
    super(props);

    let list = [
      {name: '10000', key: '10000'},
      {name: '5000', key: '5000'},
      {name: '2000', key: '2000'},
      {name: '1000', key: '1000'},
      {name: '500', key: '500'}
      // {name: '200', key: '200'},
      // {name: '100', key: '100'},
      // {name: '10', key: '10'},
      //{name: '2', key: '2'}
    ];

    // set default value
    let defaultBatchSize = this.props.batchSize;
    let defaultSize = defaultBatchSize ? list.find((level) => {return level.key === defaultBatchSize}) : list[1];
    // update container component
    if (!this.props.batchSize && defaultSize) {
        this.props.setBatchSize(defaultSize.key);
    }
    
    this.state = {
      batchSizeList: list,
      selectedSize: defaultSize
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(value) {
    //console.log(`selected ${value}`);
    
    
    let level = this.state.batchSizeList.find((level) => {return level.name === value});
    this.setState({
      selectedSize: level
    });

    this.props.setBatchSize(level.key);
  }
  
  
  render() {
    return (
        <div className={"lf-option"}>
          <div className={"lf-option-label"}>Page Size:</div>
          <Select
              className={"lf-option-field"}
              showSearch
              style={{ width: 180 }}
              placeholder="Select a batch size for data query"
              optionFilterProp="children"
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              defaultValue={this.state.selectedSize.name}
          >
          {this.state.batchSizeList.map(l => <Option key={l.name}>{l.name}</Option>)}
          </Select>
        </div>
    );
  }
}

export default BatchSizePicker;


