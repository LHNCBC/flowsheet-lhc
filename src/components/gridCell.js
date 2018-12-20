import React from 'react';
import SparkLine from "./sparkLine";
import { Icon, Button } from "antd";

class GridCell extends React.PureComponent {

  getCellClass(data, columnIndex, rowIndex) {

    let className;
    if (data && data.tableData) {
      // column headers
      if (rowIndex === 0) {
        className = 'col-header';
        if (columnIndex === 0) {
          className += ' col-name';
        }
        else if (columnIndex === 1) {
          className += ' col-sparkline';
        }
      }
      // data rows
      else if (rowIndex > 0) {
        let record = data.tableData[rowIndex-1];

        // header, eq-class or data row
        className = 'row-type-' + (record.isSectionHeader ? 'header' : record.isEqClassRow ? 'eq-class' : 'data');

        // level
        if (record.A) {
          className += ' row-level-' + record.A
        }

        // items in eq class
        if (record.isTempItemInEqClass) {
          if (record.isMultipleItemsInEqClass) {
            className += ' row-multiple-item-in-eq-class';
            if (record.firstItemInEqClass) {
              className += ' first-item-in-eq-class';
            }
            if (record.lastItemInEqClass) {
              className += ' last-item-in-eq-class';
            }
          } else {
            className += ' row-single-item-in-eq-class';
          }
        }

        // names
        if (columnIndex === 0) {
          className += ' col-name';
        }
        // spark lines
        else if (columnIndex === 1) {
          className += ' col-sparkline';
        }
        else {
          className += ' col-data';
        }
      }

    }

    return className;
  }


  dataCell(data, columnIndex, rowIndex) {


    if (!data) {
      return "Default2, should not appear"
    }
    const { tableData, columns, showUnit, expColFunc } = data;

    if (!tableData) {
      return "Default2, should not appear"
    }

    const dataRow = tableData[rowIndex - 1];


    // column headers
    if (rowIndex === 0 ) {
      return columns[columnIndex].title
    }
    // data rows
    else if (rowIndex >= 1) {
      //name
      if (columnIndex === 0) {
        if (dataRow.isTempHeader) {
          if (dataRow.sectionCollapsed) {
            return <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="right-circle" /></span>  {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
          }
          else {
            return <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="down-circle" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
          }
        }
        else {
          return dataRow.displayName + (dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : '')
        }

      }
      // spark line
      else if (columnIndex === 1) {
        return <SparkLine record={dataRow}/>
      }
      // data
      else {

        let dataKey = columns[columnIndex].dataKey;
        if (dataKey && dataRow[dataKey]) {
          if (showUnit) {
            return dataRow[dataKey].valueWithUnit
          }
          else {
            return dataRow[dataKey].value
          }
        }
        else if (dataRow.isSectionHeader) {
          return ""
        }
        else {
          return "-"
        }
      }
    }

  }

  render() {
    const { data, columnIndex, rowIndex, style, className } = this.props;

    let cell = this.dataCell(data, columnIndex, rowIndex);
    let cellClassName = this.getCellClass(data, columnIndex, rowIndex);
    if (className) {
      cellClassName += " " + className;
    }

    return (
        <div
            className={cellClassName}
            style={style}
        >
          {cell}
        </div>
    );
  }
}

export default GridCell;