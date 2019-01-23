
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class SparkLine extends React.Component {
    

  render() {
    let record = this.props.record;

    // console.log("in SparkLine")
    // console.log(this.props.record)

    let rangeHigh = <SparklinesReferenceLine type="custom" value={record.high} style={{ stroke: "#0858af", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;
    let rangeLow = <SparklinesReferenceLine type="custom" value={record.low} style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;

    if (record.high !== undefined && record.low !== undefined) {

      return (
          <div title={`High: ${record.high}\nLow: ${record.low}`}>
            <Sparklines data={record.sparklineData}  width={100} height={16} >
              <SparklinesLine style={{ fill: "none" }} />
              {rangeHigh}
              {rangeLow}
            </Sparklines>
          </div>
      )
    }
    else if (record.high !== undefined) {
      return (
          <div title={`High: ${record.high}`}>
            <Sparklines data={record.sparklineData}  width={100} height={16} >
              <SparklinesLine style={{ fill: "none" }} />
              {rangeHigh}
            </Sparklines>
          </div>
      )
    }
    else if (record.low !== undefined) {
      return (
          <div title={`Low: ${record.low}`}>
            <Sparklines data={record.sparklineData}  width={100} height={16} >
              <SparklinesLine style={{ fill: "none" }} />
              {rangeLow}
            </Sparklines>
          </div>
      )
    }
    else {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={16} >
          <SparklinesLine style={{ fill: "none" }}/>
        </Sparklines>      
      )
    }

  }
}
  
export default SparkLine;
  
            