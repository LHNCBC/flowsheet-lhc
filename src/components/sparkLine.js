
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class SparkLine extends React.Component {
    

  render() {
    let record = this.props.record;

    let rangeHigh = <SparklinesReferenceLine type="custom" value={record.high} />;
    let rangeLow = <SparklinesReferenceLine type="custom" value={record.low} />;

    if (record.high && record.low) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={20} margin={1}>
          <SparklinesLine />
          {rangeHigh}
          {rangeLow}
        </Sparklines>      
      )
    }
    else if (record.high) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={20} margin={1}>
          <SparklinesLine />
          {rangeHigh}
        </Sparklines>      
      )
    }
    else if (record.low) {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={20} margin={1}>
          <SparklinesLine />
          {rangeLow}
        </Sparklines>      
      )
    }
    else {
      return (
        <Sparklines data={record.sparklineData}  width={100} height={20} margin={1}>
          <SparklinesLine />
        </Sparklines>      
      )
    }

  }
}
  
export default SparkLine;
  
            