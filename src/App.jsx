import React from 'react';

import Sidebar from './Sidebar.jsx';
import IncomeSourceContainer from './IncomeSourceContainer.jsx';
import IncomeSource from './IncomeSource.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplier: 1,
    };
  }

  updateMultiplier() {
    this.setState({
      multiplier: this.state.multiplier + 1,
    });
  }

  render() {
    return (
      <div>
        <Sidebar />
        <IncomeSourceContainer>
          <IncomeSource
            iconUrl="https://cdn4.iconfinder.com/data/icons/drinks-solid-icons-vol-1/72/28-512.png"
            upgrade={this.updateMultiplier.bind(this)}
            multiplier={this.state.multiplier}
            price="1" />
          <IncomeSource
            iconUrl="https://camo.githubusercontent.com/00ad182435f72dec5149b09cefcbe201340f81d6/687474703a2f2f32342e6d656469612e74756d626c722e636f6d2f74756d626c725f6d36386b6279464f596a317279737176676f315f313238302e706e67"
            upgrade={this.updateMultiplier.bind(this)}
            multiplier={this.state.multiplier}
            price="5" />
        </IncomeSourceContainer>
      </div>
    );
  }
}
