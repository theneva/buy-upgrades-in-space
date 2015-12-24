import React from 'react';

export default class IncomeSourceContainer extends React.Component {
  render() {
    return (
      <div style={{display: 'inline-block', verticalAlign: 'top'}} className="income-source-container">
        {this.props.children}
      </div>
    );
  }
}
