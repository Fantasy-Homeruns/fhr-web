import React, { Component } from 'react';
import './GridGame.scss';
import _ from 'lodash';
import GridTeam from './GridTeam';

class GridGame extends Component {
  render() {
    console.log('Props', this.props);

    // Build the Grid of Picks
    let teams = _.map(this.props.game.teams, (team) => {
      return (
        <GridTeam
          key={team.user.id}
          team={team}
        />
      );
    });

    return (
      <div className="row grid-game">
        {teams}
      </div>
    );
  }
}

export default GridGame;
