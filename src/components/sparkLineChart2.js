
import React from 'react';
import {VictoryGroup, VictoryLine, VictoryScatter} from 'victory';

class SparkLineChart2 extends React.Component {

  render() {
    let record = this.props.record;
    let range = this.props.range;

    return (

        <VictoryGroup width={800} height={200}>
          <VictoryLine
              style={{
                data: { stroke: "#c43a31" }
              }}
              data={record.sparklineData2}
              range={range}
          />
          <VictoryScatter
              data={record.sparklineData2}
              size={8}
              range={range}
          />
        </VictoryGroup>

    )

    // console.log("in SparkLine")
    // console.log(this.props.record)

    // let rangeHigh = <SparklinesReferenceLine type="custom" value={record.high} style={{ stroke: "#0858af", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;
    // let rangeLow = <SparklinesReferenceLine type="custom" value={record.low} style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none", strokeOpacity: .75, strokeDasharray: '2, 1' }}/>;

  }
}
  
export default SparkLineChart2;
  
            