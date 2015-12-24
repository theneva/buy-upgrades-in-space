import React from 'react';

export default class IncomeSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplier: props.multiplier,
      progress: 0,
    };
  }

  upgrade() {
    const {
      costToUpgrade,
      canUpgrade,
      spend,
    } = this.props;

    const {
      multiplier,
    } = this.state;

    const cost = costToUpgrade(multiplier);
    if (canUpgrade(cost)) {
      spend(cost);

      this.setState({
        multiplier: this.state.multiplier + 1,
      });
    }
  }

  trigger() {
    const {
      earn,
      productionValue,
      timeout,
    } = this.props;

    const {
      multiplier,
    } = this.state;

    const onePercentMillis = timeout / 100;

    const progressIntervalId = setInterval(() => {
      if (this.state.progress < 100) {
        this.setState({
          progress: this.state.progress + 1,
        });
      }
    }, onePercentMillis);

    setTimeout(() => {
      clearTimeout(progressIntervalId);

      this.setState({
        progress: 0,
      });

      earn(productionValue(multiplier));
    }, timeout);
  }

  render() {
    const {
      iconUrl,
      costToUpgrade,
      productionValue,
    } = this.props;

    const {
      multiplier,
      progress,
    } = this.state;

    return (
      <div style={{padding: '1em', border: '1px solid black'}} className="income-source">
        <div className="icon">
          <img style={{width: '40px', height: '40px'}} src={iconUrl}/>
        </div>
        <div className="multiplier">
          Multiplier: {multiplier}x
        </div>
        <div className="income-indicator">
          Income: {productionValue(multiplier)}
        </div>
        <div className="progress-bar">
          {progress} %
        </div>
        <div className="upgrade-cost">
          Upgrade cost: {costToUpgrade(multiplier)}
        </div>
        <button onClick={this.trigger.bind(this)}>Trigger</button>
        <button onClick={this.upgrade.bind(this)}>Upgrade</button>
      </div>
    );
  }
};
