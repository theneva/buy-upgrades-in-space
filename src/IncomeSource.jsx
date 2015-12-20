import React from 'react';

export default class IncomeSource extends React.Component {
  render() {
    const {
      upgrade,
      iconUrl,
      multiplier,
    } = this.props;

    return (
      <div style={{border: '1px solid black'}} className="income-source">
        <div className="icon">
          <img style={{width: '40px', height: '40px'}} src={iconUrl}/>
        </div>
        <div className="multiplier">
          Multiplier: {multiplier}x
        </div>
        <div className="progress-bar">
          0 %
        </div>
        <button onClick={upgrade}>Upgrade</button>
      </div>
    );
  }
};
