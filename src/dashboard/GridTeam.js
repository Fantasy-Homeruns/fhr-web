import React, { Component } from 'react';
import './GridTeam.scss';
import _ from 'lodash';
import GridPick from './GridPick';

class GridTeam extends Component {
  render() {
    console.log('Props', this.props);

    // Build a teams component
    let picks = _.map(this.props.team.picks, (pick) => {
      return (
        <GridPick
          key={pick.player.id}
          pick={pick}
        />
      );
    });

    return (
      <div className="grid-team">
        {this.props.team.user.teamName}<br/>
        {picks}
      </div>
    );
  }
}

export default GridTeam;
