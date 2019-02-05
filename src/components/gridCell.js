import React from 'react';
import SparkLine from "./sparkLine";
import { Icon, Button, Popover } from "antd";

class GridCell extends React.PureComponent {

  nodeInfo = {
     "A": "LVL",
     "B": "INDENTEDNAME",
     "C": "EquivalenceClass",
     "D": "CODE",
     "E": "LOINC_MERGED",
     "F": "LONG_COMMON_NAME_LOINC",
     "G": "LOINC_DISPLAY",
     "H": "units_normRange",
     "I": "norm_range",
     "J": "norm_low",
     "K": "norm_high",
     "L": "danger_high",
     "M": "danger_low",
     "N": "LOINC_ShortName",
     "O": "Code_indicator",
     "P": "EquivalenceClass_UOM",
     "Q": "EquivalenceClass_UCUM",
     "R": "Molecular_weight",
     "S": "Convert_indicator",
     "T": "UNITS_RI",
     "U": "UNITS_DISPLAY",
     "V": "UCUM_EX"
  };


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

    let content = '';

    if (!data) {
      content = "no data, should not appear"
    }

    const { tableData, columns, showUnit, expColFunc, showDebugInfo} = data;

    if (!tableData) {
      content = "no table data, should not appear"
    }

    const dataRow = tableData[rowIndex - 1];


    // column headers
    if (rowIndex === 0 ) {
      content = columns[columnIndex].title
    }
    // data rows
    else if (rowIndex >= 1) {
      //name
      if (columnIndex === 0) {
        if (dataRow.isTempHeader) {
          if (dataRow.sectionCollapsed) {
            //return <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="right-circle" /></span>  {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
            content = <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="right-circle" /></span>  {dataRow.displayName} </div>
          }
          else {
            //return <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="down-circle" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
            content = <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="down-circle" /></span> {dataRow.displayName} </div>
          }
        }
        else {
          //return dataRow.displayName + (dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : '')
          if (dataRow.isEqClassRow) {
            //type="box-plot" theme="filled"
            content = <div><span><Icon type="colum-height" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
          }
          else {
            content = dataRow.displayName;
          }

        }

        if (showDebugInfo) {
        //      "A": "LVL",
        //      "B": "INDENTEDNAME",
        //      "C": "EquivalenceClass",
        //      "D": "CODE",
        //      "E": "LOINC_MERGED",
        //      "F": "LONG_COMMON_NAME_LOINC",
        //      "G": "LOINC_DISPLAY",
        //      "H": "units_normRange",
        //      "I": "norm_range",
        //      "J": "norm_low",
        //      "K": "norm_high",
        //      "L": "danger_high",
        //      "M": "danger_low",
        //      "N": "LOINC_ShortName",
        //      "O": "Code_indicator",
        //      "P": "EquivalenceClass_UOM",
        //      "Q": "EquivalenceClass_UCUM",
        //      "R": "Molecular_weight",
        //      "S": "Convert_indicator",
        //      "T": "UNITS_RI",
        //      "U": "UNITS_DISPLAY",
        //      "V": "UCUM_EX"
          let debugInfo =
              <Popover placement="bottomLeft" title={dataRow.displayName} content={this._getDebugInfo(dataRow)} trigger="click">
                <Button type="circle" icon="tool" size="small"></Button>
              </Popover>

          content = <div>{content} {debugInfo}</div>
        }

      }
      // spark line
      else if (columnIndex === 1) {
        content = <SparkLine record={dataRow}/>
      }
      // data
      else {

        let dataKey = columns[columnIndex].dataKey;
        if (dataKey && dataRow[dataKey]) {
          if (showUnit) {
            content = dataRow[dataKey].valueWithUnit
          }
          else {
            content = dataRow[dataKey].value
          }
        }
        else if (dataRow.isSectionHeader) {
          content = ""
        }
        else {
          content = "-"
        }
      }
    }

    return content;

  }


  _renderDebugInfoRow(field) {
    return (
        <tr key={field.key}>
          <td>{ field.key }</td>
          <td>{ field.value }</td>
        </tr>
    );
  }

  /**
   * Display all the info on the node in the hierarchy file
    * @param node a node in the hierarchy file
   * @returns {*} a html table
   * @private
   */
  _getDebugInfo(node) {

    let dataFields = Object.keys(this.nodeInfo)
        .reduce((acc, key) => node[key] ? ([...acc, {key: key +":" + this.nodeInfo[key], value:node[key]}]) : acc,  []);

    return (
        <table>
          <tbody>
          { dataFields.map(this._renderDebugInfoRow) }
          </tbody>
        </table>
    );

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