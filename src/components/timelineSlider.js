import React from "react";
import "antd/dist/antd.css";
import {Col, Row, Slider} from "antd";
import moment from 'moment';

const MS_A_DAY = 86400000;

class TimelineSlider extends React.Component {

  constructor(props) {

    // minDate: in ms //"2019-03-15T16:35:55.987-04:00"
    // maxDate: in ms
    // marks: "year", "quarter" or "month"
    // steps: "day", "month", "quarter", "year" on none
    // setRange()
    super(props);

    this.state = {
      changed : false
    };

    console.log(this.props)
    let first = moment(this.props.minDate, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
    let last = moment(this.props.maxDate, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
    let rangeStart = first.valueOf();
    let rangeEnd = last.valueOf();

    this.state = {
      changed : false,
      rangeStart: rangeStart,
      rangeEnd: rangeEnd,
      steps: Math.round((rangeEnd - rangeStart) / MS_A_DAY),
      labelStart: first.format("YYYY/MM/DD"),
      labelEnd: last.format("YYYY/MM/DD")
    };


    console.log((rangeEnd - rangeStart) / MS_A_DAY)
    this.handleChange = this.handleChange.bind(this);
    
  }

  tipLabel = (v) => {
    return moment(this.state.rangeStart + v * MS_A_DAY).format("YYYY/MM/DD")
    //return moment(v).format("YYYY/MM/DD")
  };

  handleChange = (v) => {

    this.setState({
      // start: v[0],
      // end: v[1],
      changed: true
    });
    console.log(v)
    let range = [this.state.rangeStart + v[0] * MS_A_DAY, this.state.rangeStart + v[1] * MS_A_DAY]
    this.props.setRange(range);
  };


  
  render() {
    // let first = moment(this.props.minDate, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
    // let last = moment(this.props.maxDate, "YYYY-MM-DDTHH:mm:ss.SSS").startOf('day');
    // let rangeStart = first.valueOf();
    // let rangeEnd = last.valueOf();
    // let labelStart = first.format("YYYY/MM/DD");
    // let labelEnd = last.format("YYYY/MM/DD");

    // console.log("in timelineSlider render");
    // console.log(this.props.minDate);
    // console.log(this.props.maxDate);
    // console.log(min);
    // console.log(max);
    return (
        <div>
          <div>Date Range:</div>
          <div>
            <Row type="flex" className="lf-row" justify="center">
              <Col xs={22} sm={22} md={22} lg={22} xl={22}>
                <Slider
                    range
                    // defaultValue={[this.state.rangeStart, this.state.rangeEnd]}
                    // min={this.state.rangeStart}
                    // max={this.state.rangeEnd}
                    // step={MS_A_DAY} // a day
                    defaultValue={[0, this.state.steps]}
                    min={0}
                    max={this.state.steps}
                    step={1} // a day
                    tipFormatter={(v)=>this.tipLabel(v)}
                    tooltipVisible={this.state.changed}
                    onAfterChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row type="flex" className="lf-row" justify="center">
              <Col xs={12} sm={4} md={2} lg={2} xl={2}>
                <span>{this.state.labelStart}</span>
              </Col>
              <Col xs={12} sm={14} md={18} lg={18} xl={18}></Col>
              <Col xs={12} sm={4} md={2} lg={2} xl={2} className="lf-right-date">
                <span>{this.state.labelEnd}</span>
              </Col>
            </Row>



          </div>
        </div>
    );
  }
}

export default TimelineSlider;


