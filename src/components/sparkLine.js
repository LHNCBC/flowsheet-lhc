
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class SparkLine extends React.Component {
    

  render() {
    let record = this.props.record;

    // console.log("in SparkLine")
    // console.log(this.props.record)

    let rangeHigh = <SparklinesReferenceLine type="custom" value={record.high} style={{ stroke: "#2991c8", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;
    let rangeLow = <SparklinesReferenceLine type="custom" value={record.low} style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;

    if (record.high !== undefined && record.low !== undefined) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={16} >
          <SparklinesLine />
          {rangeHigh}
          {rangeLow}
        </Sparklines>      
      )
    }
    else if (record.high !== undefined) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={16} >
          <SparklinesLine />
          {rangeHigh}
        </Sparklines>      
      )
    }
    else if (record.low !== undefined) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={16} >
          <SparklinesLine />
          {rangeLow}
        </Sparklines>      
      )
    }
    else {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={16} >
          <SparklinesLine />
        </Sparklines>      
      )
    }

  }
}
  
export default SparkLine;
  
            