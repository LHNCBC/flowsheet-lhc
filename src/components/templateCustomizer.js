import React from "react";
import "antd/dist/antd.css";
import {Tree, Button} from "antd";


const { TreeNode } = Tree;


// selectedTemplate={this.state.selectedTemplate}
// flowsheetData={this.state.flowsheetData}
// flowsheetColumns={this.state.flowsheetColumns}
// setCustomizedData={(data) => this.setCustomizedData(data)}

const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

class TemplateCustomizer extends React.Component {


  constructor(props) {

    super(props);

    this.state = {
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      nodes: this.getFirstNLevelNodes(this.props.flowsheetData, 1)
    }

  }


  getFirstNLevelNodes = (flowsheetData, levels = 1) => {
    let firstNLevels = flowsheetData.filter(node => node.A <= levels)
    let nodes = firstNLevels.map(node => {return {title: node.displayName, key: node.displayName}})

    return nodes
  }

  getTreeNodes = (flowsheetData, levels =1) => {
    let nodes = [];

    for(let i = flowsheetData.length-1; i--; i>=0) {
      let row = flowsheetData[i];
      if (row.A <= levels) {
        let node = {title: row.displayName, key: i};
        if (row.A < levels) {
          node.children = [];
        }


      }
    }

  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  // componentDidMount() {
  //   console.log("in comp did mount, templateCustomizer")
  //   this.setState({
  //     nodes: this.getFirstNLevelNodes(this.props.flowsheetData, 1)
  //   })
  // }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }


  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  })


  render() {
      
    return (
        <div>
          <Tree
              checkable
              onExpand={this.onExpand}
              expandedKeys={this.state.expandedKeys}
              autoExpandParent={this.state.autoExpandParent}
              onCheck={this.onCheck}
              checkedKeys={this.state.checkedKeys}
              onSelect={this.onSelect}
              selectedKeys={this.state.selectedKeys}
          >
            {this.renderTreeNodes(this.state.nodes)}
          </Tree>
        </div>
    );
  }
}

export default TemplateCustomizer;


