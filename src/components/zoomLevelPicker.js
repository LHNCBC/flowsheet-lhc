import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";

const Option = Select.Option;


class ZoomLevelPicker extends React.Component {

  constructor(props) {
   
    super(props);

    let list = [
      {name: 'All', key: 'date'},
      {name: 'One Per Day', key: 'day'},
      {name: 'One Per Week', key: 'week'},
      {name: 'One Per Month', key: 'month'},
      {name: 'One Per Quarter', key: 'quarter'},
      {name: 'One Per Year', key: 'year'}
    ];

    // set default value
    let defaultLevelKey = this.props.zoomLevel;
    let defaultLevel = defaultLevelKey ? list.find((level) => {return level.key === defaultLevelKey}) : list[0];
    // update container component
    if (!this.props.zoomLevel && defaultLevel) {
        this.props.setZoomLevel(defaultLevel.key);
    }
    
    this.state = {
      zoomLevelList: list,
      selectedLevel: defaultLevel
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(value) {
    //console.log(`selected ${value}`);
    
    
    let level = this.state.zoomLevelList.find((level) => {return level.name === value});
    this.setState({
      selectedLevel: level
    });

    this.props.setZoomLevel(level.key);
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
            defaultValue={this.state.selectedLevel.name}
        >
        {this.state.zoomLevelList.map(l => <Option key={l.name}>{l.name}</Option>)}
        </Select>
        </div>
    );
  }
}

export default ZoomLevelPicker;


