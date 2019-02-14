
import React from 'react';
import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class SparkLineChart extends React.Component {

  render() {
    let record = this.props.record;


    return (
        <ScatterChart width={800} height={200} margin={{top: 10, right: 10, bottom: 10, left: 10}}>
          <CartesianGrid />
          <XAxis type="number" dataKey={'x'} name='value' unit='1' tick={false}/>
          <YAxis type="number" dataKey={'y'} name='time' unit='2' tick={false}/>
          <Scatter name='a test' data={record.sparklineData2} fill='#8884d8' line shape="circle"/>
        </ScatterChart>
    );

  }
}
  
export default SparkLineChart;
  
            