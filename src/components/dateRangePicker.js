import React from "react";
import "antd/dist/antd.css";
import { Select, DatePicker } from "antd";
//import TimelineSlider from "./timelineSlider";
import moment from 'moment';

const { RangePicker } = DatePicker;
const Option = Select.Option;

class DateRangePicker extends React.Component {

  constructor(props) {

    super(props);

    let list = [
      {name: 'All Data', key: 'all'},
      {name: 'Most Recent 1 year', key: '1y'},
      {name: 'Most Recent 2 years', key: '2y'},
      {name: 'Most Recent 3 years', key: '3y'},
      {name: 'Most Recent 5 years', key: '5y'},
      {name: 'Most Recent 10 year', key: '10y'},
      {name: 'Customize Date Range', key: 'customize'}
    ];


    // set default value
    let defaultRange = this.props.selectedRangeKey ? list.find((range) => {return range.key === this.props.selectedRangeKey}) : list[0];
    // update container component
    if (!this.props.selectedRangeKey && defaultRange) {
      this.props.setDateRange(defaultRange.key);
    }

    this.state = {
      dateRangeList: list,
      selectedRange: defaultRange,
      selectedRangeValue: null
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(value) {
    //console.log(`selected ${value}`);


    let range = this.state.dateRangeList.find((range) => {return range.name === value});
    this.setState({
      selectedRange: range
    });

    if (range.key === 'customize') {

    }

    this.props.setDateRange({
      selection: range.key
    });
  }

  onChange = (date, dateString) => {
    let newRangeValue = [date[0].valueOf(), date[1].valueOf()];
    this.setState({
      selectedRangeValue: newRangeValue
    });

    this.props.setDateRange({
      selection: this.state.selectedRange.key,
      rangeValue: newRangeValue

    });

  };

  render() {
    let rangeValue = this.state.selectedRangeValue ?
        [moment(this.state.selectedRangeValue[0]),moment(this.state.selectedRangeValue[1])] :
        [moment(this.props.rangeStart), moment(this.props.rangeEnd)];
    return (
        <div className={"lf-option"}>
          <div className={"lf-option-label"}>Date Range:</div>
          <div className={"lf-option-field"}>
          <Select
              showSearch
              style={{ width: 180 }}
              placeholder="Select a Date Range"
              optionFilterProp="children"
              onChange={this.handleChange}
              defaultValue={this.state.selectedRange.name}
          >
            {this.state.dateRangeList.map(range => <Option key={range.name}>{range.name}</Option>)}
          </Select>

          {this.state.selectedRange && this.state.selectedRange.key === "customize" &&
          <RangePicker className={"lf-range-picker"}
                       onChange={this.onChange}
                       defaultValue={rangeValue}/>
          }

          </div>
        </div>
    );
  }
}

export default DateRangePicker;


