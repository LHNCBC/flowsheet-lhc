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

  getDotColor(data) {
    let fillColor = 'black';
    if (data.abnormal === true ) {
      fillColor = 'red';
    }
    else if (data.abnormal === false ) {
      fillColor = 'blue';
    }
    // "#c43a31"
    return fillColor;
  }

  getXTickLabel(tick, index) {
    let label = `${moment(tick).format("YYYY/MM/DD")}`
    if (index === 0) {
      label += " [Older]"
    }
    else {
      label += " [Younger]"
    }
    return label
  }

  render() {
      
    return (
        <div>
          <VictoryChart
               padding={{ top: 10, bottom: 40, left: 60, right: 60 }}
              width={this.props.width}
              height={this.props.height}
              theme={VictoryTheme.material}
              domain={this.props.chartData.domain}
              // domainPadding={{y:[10, 10]}}
              containerComponent={<VictoryContainer responsive={false}/>}
          >
            <VictoryScatter
                style={{ data: { fill: d => this.getDotColor(d) } }}
                size={1.5}
                labelComponent={<VictoryTooltip/>}
                data={this.props.chartData.data}
            />
            <VictoryAxis
                tickValues={this.props.chartData.xTickValues}
                tickFormat={(t, i) => this.getXTickLabel(t,i)}
            />
            <VictoryAxis
                dependentAxis
                tickFormat={()=>null}
            />
            {/*<VictoryLine*/}
                {/*data={this.props.chartData.lineYearData}*/}
            {/*/>*/}
            <VictoryLine
                //domain={{x:[0,5],y:[0,5]}}
                style={{
                  data: { stroke: "#c43a31" },
                  parent: { border: "1px solid #ccc"}
                }}
                data={[
                  { x: this.props.visiblePosition.colStart, y: this.props.visiblePosition.rowStart },
                  { x: this.props.visiblePosition.colStart, y: this.props.visiblePosition.rowStop },
                ]}
            />
            <VictoryLine
                data={[
                  { x: this.props.visiblePosition.colStop, y: this.props.visiblePosition.rowStart },
                  { x: this.props.visiblePosition.colStop, y: this.props.visiblePosition.rowStop },
                ]}
            />
            <VictoryLine
                data={[
                  { x: this.props.visiblePosition.colStart, y: this.props.visiblePosition.rowStart },
                  { x: this.props.visiblePosition.colStop, y: this.props.visiblePosition.rowStart },
                ]}
            />
            <VictoryLine
                data={[
                  { x: this.props.visiblePosition.colStart, y: this.props.visiblePosition.rowStop },
                  { x: this.props.visiblePosition.colStop, y: this.props.visiblePosition.rowStop },
                ]}
            />

          </VictoryChart>
        </div>
    );
  }
}

export default OverviewMap;


