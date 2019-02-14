import React from 'react';
import SparkLine from "./sparkLine";
//import SparkLine from "./sparkLineChart2";
//import SparkLine from "./sparkLineChart";
import { Icon, Button, Popover } from "antd";
import CollapseIcon from '../collapse.svg';


const ColIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" className="" data-icon="vertival-align-middl"
         width="1em" height="1em" fill="currentColor" aria-hidden="true">
      <path
          d="M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM506.3 399.3c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.6zM517.7 624.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 752.3c-3.7 4.7-0.4 11.7 5.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7L517.7 624.7z">
      </path>
      {/*<path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>*/}
    </svg>);

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
     "V": "UCUM_EX",
     "displayName": "",
     "firstItemInEqClass":"",
     "lastItemInEqClass":"",
     "isMultipleItemsInEqClass":"",
     "isTempItemInEqClass":"",
     "itemHidden":"",
     "hasData":"",
     "keep":"",
     "key":"",
     "high":"",
     "low":"",
     "isSectionHeader":"",
     "isTempHeader":"",
     "sectionCollapsed":"",
     "commonUCUM":"",
     "eqClassItems":"",
     "hasMultipleItemsInEqClass":"",
     "isEqClassRow":"",
    "itemInEqClassHidden":"",
    "eqClassRowHidden":"",
    "codeList": ""
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

    const { tableData, columns, showUnit, expColFunc, eqExpColFunc, showDebugInfo, dateRange} = data;

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
            content = <span className="item-name"><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="right-circle" /></span>  {dataRow.displayName} </span>
          }
          else {
            //return <div><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="down-circle" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</div>
            content = <span className="item-name"><span className="exp-col-button" onClick={() => expColFunc(dataRow.key)}><Icon type="down-circle" /></span> {dataRow.displayName} </span>
          }
        }
        else {
          //return dataRow.displayName + (dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : '')
          if (dataRow.isEqClassRow) {
            //type="box-plot" theme="filled"
            //content = <span><span className="exp-col-button" onClick={() => eqExpColFunc(dataRow.key)}><Icon type="vertical-align-middl" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</span>
            content = <span className="item-name"><span className="eq-exp-col-button" onClick={() => eqExpColFunc(dataRow.key)}><Icon type="colum-height" /></span> {dataRow.displayName} {dataRow.isEqClassRow ? ' [' + Object.keys(dataRow.eqClassItems).length + ']' : ''}</span>
          }
          else if (dataRow.isMultipleItemsInEqClass) {
            if (dataRow.firstItemInEqClass) {
              // content = <span><span className="exp-col-button" onClick={() => eqExpColFunc(dataRow.key)}><img
              //     src={CollapseIcon}></img></span> {dataRow.displayName}</span>;
              content = <span className="item-name"><span className="eq-exp-col-button" onClick={() => eqExpColFunc(dataRow.key)}><ColIcon /></span> {dataRow.displayName}</span>;

            } else {
              content = <span className="item-name"><span className="eq-exp-col-button" onClick={() => eqExpColFunc(dataRow.key)}></span> {dataRow.displayName}</span>;
            }
          }
          else {
            content = <span className="item-name">{dataRow.displayName}</span>;
          }

        }

        if (showDebugInfo) {
          let debugInfo =
              <Popover placement="bottomLeft" title={dataRow.displayName} content={this._getDebugInfo(dataRow, rowIndex)} trigger="click">
                <Button type="circle" icon="tool" size="small"></Button>
              </Popover>

          content = <div>{content} {debugInfo}</div>
        }

      }
      // spark line
      else if (columnIndex === 1) {
        //content = <SparkLine record={dataRow}/>
        content = <SparkLine record={dataRow} range={dateRange}/>
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
  _getDebugInfo(node, index) {

    let dataFields = Object.keys(this.nodeInfo)
        .reduce((acc, key) => node[key] ? ([...acc, {key: key +":" + this.nodeInfo[key], value:node[key] + ""}]) : acc,  []);

    // add index
    dataFields.splice(0,0,{key: "RowIndex:", value: index});

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