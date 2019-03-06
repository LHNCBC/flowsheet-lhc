import React from "react";
import moment from 'moment';
import {VictoryAxis, VictoryLine, VictoryTooltip, VictoryScatter, VictoryChart, VictoryTheme, VictoryContainer} from 'victory';


class OverviewMap extends React.Component {

  constructor(props) {

    // props:
    // width
    // height
    // columns
    // tableData

    super(props);


    // domain: {x: [ tsStart, tsEnd], y: [1, tableData.length]
    // data: [
    //          {x: ts, y: row #}  // row # in reverse order
    //       ]
    // xTickValues: [tsStart, ... tsYears#, tsEnd]
    // lineYearData: [ {x: tsYear, y: 1}, {x: tsYear, y: tableData.length} ]




  }

  // _processChartData(columns, tableData) {
  //
  //   let chartData = {};
  //   let tsStart = columns[2].start;
  //   let tsEnd = columns[columns.length-1].start;
  //   chartData.domain = {
  //     x: [tsStart, tsEnd],
  //     y: [0, tableData.length]
  //   };
  //
  //
  //   chartData.xTickValues = [tsStart, tsEnd];
  //
  //
  //
  // }

  handleChange(value) {
  }
  
  render() {
      
    return (
        <div>
          <VictoryChart
              // padding={{ top: 10, bottom: 40, left: 40, right: 40 }}
              width={this.props.width}
              height={this.props.height}
              theme={VictoryTheme.material}
              domain={this.props.chartData.domain}
              // domainPadding={{y:[10, 10]}}
              containerComponent={<VictoryContainer responsive={false}/>}
          >
            <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={1.5}
                labelComponent={<VictoryTooltip/>}
                data={this.props.chartData.data}
            />
            <VictoryAxis
                tickValues={this.props.chartData.xTickValues}
                tickFormat={(t) => `${moment(t).format("YYYY/MM/DD")}`}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={()=>null}
            />
            {/*<VictoryLine*/}
                {/*data={this.props.chartData.lineYearData}*/}
            {/*/>*/}


          </VictoryChart>
        </div>
    );
  }
}

export default OverviewMap;


