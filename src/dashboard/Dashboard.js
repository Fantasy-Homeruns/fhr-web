import React, { Component } from 'react';
import './Dashboard.scss';
import mockGame from '../mocks/game.json';
import HomeHeader from '../home/Header';
import Footer from '../home/Footer';
import GridGame from './GridGame';

class Dashboard extends Component {

  constructor () {
    super();
    this.state = {
      game: this.loadGame()
    }
  }

  loadGame() {
    return mockGame;
  }

  render() {
    console.log('Game from state', this.state.game);

    return (
      <div>
        <section className="container-fluid template-main pad-none responsive-screen">
        <HomeHeader />
        <div id="content">
          <div className="container">
             <div className="row margin-none">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                  <div className="template-detail-box" style={{ color: '#fff' }}>
                    <h3>{this.state.game.league.name} - {this.state.game.season} {this.state.game.time}</h3><br/>

                    <GridGame
                      game={this.state.game}
                      />

                  </div>
                </div>
              </div>
            </div>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
