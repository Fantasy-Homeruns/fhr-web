import React, { Component } from 'react';
import './GridPick.scss';

class GridPick extends Component {
  render() {
    console.log('Props', this.props);

    return (
      <div className="grid-pick">
        {this.props.pick.player.displayName}<br/>
        {this.props.pick.player.teamAbbr}<br/>
        <div className="grid-pick-hr-tot">
          {this.props.pick.hrTot}
        </div>
      </div>
    );
  }
}

export default GridPick;
