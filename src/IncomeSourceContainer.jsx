import React from 'react';

export default class IncomeSourceContainer extends React.Component {
  render() {
    return (
      <div className="income-source-container">
        {this.props.children}
      </div>
    );
  }
}
