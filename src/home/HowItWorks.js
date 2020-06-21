import React, { Component } from 'react';
import HomeHeader from './Header';
import './HowItWorks.scss';
import Footer from './Footer'

class HowItWorks extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid template-main pad-none responsive-screen">
        <HomeHeader />
        <div id="content">
          <div className="container">
             <div className="row margin-none">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center responsive-screen-block">
                 <div className="container">
                   <div className="row faq-banner">
                     <div>
                       <h1>HOW DOES IT WORK?</h1>
                     </div>
                   </div>
                 </div>
               </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                  <div className="template-detail-box" style={{ color: '#fff' }}>
                    <div style={{ margin: '20' }}>
                      <p>
                        FHR's real time Dashboards allow Team Owners to track homeruns, view League standings, receive texts each time their players hit homeruns and make Roster Moves, if permitted under League rules.
                      </p>

                      <p>Public Game</p>
                      <p>
                        We have a free public game available for all users.<br />
                        Pick any 15 players in a No-Draft format.
                      </p>

                      <hr/>

                      <p>Creating the League</p>
                      <p>
                        The Commissioner sets up the League and creates the rules of the game.<br/>
                        The Commissioner invites people to join by inputting their email addresses.<br/>
                        Once the Commissioner completes his/her roll, FHR emails Team Owners a link to set up their persoanl accounts.<br/>
                      </p>

                      <hr/>
                      <p>Drafting Players</p>
                      <p>
                        ALL homeruns hit by players are recorded regardless of when the draft is conducted.<br/>
                        Team Owners can input their picks directly into the system on any device during the draft or have the Commissioner input all picks.<br/>
                        The draft can be viewed and edited on your desktop or smartphone by all Team Owners as you start selecting players, a perfect tool for drafts conducted remotely.<br/>
                      </p>

                      <hr/>
                      <p>"Snake" Draft Format</p>
                      <p>
                        "Snake" format begins by adding selected players on the left side of the first round and will reverse itself at the end of the round. For example, the first round goes from left to right, then the second round goes right to left and so on.<br/>
                        Players can only be selected if not picked by another Team Owner.<br/>
                      </p>

                      <hr/>
                      <p>"None" No-Draft Format</p>
                      <p>
                        "None" or no-draft format allows Team Owners to select players without a draft.<br/>
                        Owners cannot view the other Teams picks until players are selected by all Team Owners.<br/>
                        Players can be selected by multiple Teams.<br/>
                        Only the Commissioner can input each Teams players into the FHR system.<br/>
                      </p>

                      <hr/>
                      <p>Roster Moves</p>
                      <p>
                        If you allow Roster Moves, Team Owners may drop injured or poor performing players and select players that were not previously selected.<br/>
                        It’s first come first served for the selection of available players. However, if you prefer to make your own Roster Move rules, go for it. The software doesn’t prevent you from doing your own thing.<br/>
                        You can have as many Roster Moves as you wish.<br/>
                        You must set the beginning and end dates when a player is dropped and new players selected.<br/>
                        The software currently has two options: 1) removes all the homeruns hit by the player dropped and adds all the homeruns of the new player selected, or 2) keeps the homeruns by the player dropped and only adds the selected players’ homeruns at the time of selection, going forward.
                      </p>

                    </div>
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

export default HowItWorks;

// <li>Simply <a href="/public">create an account</a> or join from your <a href="/log-in">existing login</a> to play.</li>
