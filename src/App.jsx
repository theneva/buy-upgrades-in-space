import React from 'react';

import Sidebar from './Sidebar.jsx';
import IncomeSourceContainer from './IncomeSourceContainer.jsx';
import IncomeSource from './IncomeSource.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 1000000,
      incomeSources: [{
        multiplier: 1,
        productionValue: (multiplier) => multiplier,
        costToUpgrade: (multiplier) => multiplier * multiplier,
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/drinks-solid-icons-vol-1/72/28-512.png',
        timeout: 1,
      }, {
        multiplier: 1,
        productionValue: (multiplier) => multiplier * multiplier,
        costToUpgrade: (multiplier) => 1000 + multiplier * multiplier * multiplier,
        iconUrl: 'https://camo.githubusercontent.com/00ad182435f72dec5149b09cefcbe201340f81d6/687474703a2f2f32342e6d656469612e74756d626c722e636f6d2f74756d626c725f6d36386b6279464f596a317279737176676f315f313238302e706e67',
        timeout: 500,
      }, {
        multiplier: 0,
        productionValue: (multiplier) => multiplier * multiplier * multiplier,
        costToUpgrade: (multiplier) => 10000 + multiplier * multiplier * multiplier * multiplier,
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDolAEmtgS533RPHKmpVxv3Pgw721MKB9G_ZPaincEELBQ2oySytXDyM',
        timeout: 100000,
      }],
    };
  }

  canUpgrade(cost) {
    return cost <= this.state.cash;
  }

  earn(income) {
    const {
      cash,
    } = this.state;

    this.setState({
      cash: cash + income,
    });
  }

  spend(amount) {
    this.earn(-amount);
  }

  render() {
    const {
      cash,
    } = this.state;
    
    return (
      <div>
        <Sidebar
         cash={this.state.cash} />

        <IncomeSourceContainer>
          {this.state.incomeSources.map(incomeSource => (
            <IncomeSource key={incomeSource.iconUrl}
              {...incomeSource}
              canUpgrade={this.canUpgrade.bind(this)}
              earn={this.earn.bind(this)}
              spend={this.spend.bind(this)} />
          ))}
        </IncomeSourceContainer>
      </div>
    );
  }
}
