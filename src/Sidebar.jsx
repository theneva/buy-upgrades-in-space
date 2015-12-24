import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    const {
      cash,
    } = this.props;

    return (
      <div style={{display: 'inline-block'}}>
        Sidebar
        <div className="cash-indicator">
          Cash: ${cash}
        </div>
      </div>
    );
  }
}
