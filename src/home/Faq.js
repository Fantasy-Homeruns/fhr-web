import React, { Component } from 'react';
import HomeHeader from './Header';
import './Faq.scss';
import Footer from './Footer'

class Faq extends Component {
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
                     <h1>FREQUENTLY ASKED</h1>
                   </div>
                 </div>
               </div>
             </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                <div className="template-detail-box" style={{ color: '#fff' }}>
                  <div style={{ margin: '20'}}>
                    <b>Q: How is FHR different from other fantasy games?</b>
                    <p>A: We wanted a simple game without the hassle of tracking numerous statistics required in all other fantasy leagues. We only count one statistic, homeruns!</p>
                    <b>Q: Okay, I'm intrigued. Tell me more!</b>
                    <p>A: Have your friends (Team Owners) go to fantasyhomeruns.com and look around. If they like what they see, Sign Up and join our community. Create rules for your Derby then select a Commissioner and get started.</p>
                    <b>Q: How many Team Owners should there be in my League?</b>
                    <p>A: It's entirely up to you. However, if just one friend wants in, that’s OK.  Last season we had a League with 22 Teams and some with 2. The average League has eight Teams.</p>
                    <b>Q: What's the cost?</b>
                    <p>A: The cost for each person is $15.00. For this low annual fee, you will have on-line access to your Dashboard on all mobile and other devices; providing team and League results and much more. If you wish, you can receive a text right after one of your players hits a homerun.</p>
                    <b>Q: Do you have an APP and does it cost anything?</b>
                    <p>A: You can go to iTunes and download fantasyhomeruns and no, there is no charge for the APP.</p>
                    <b>Q: OK, I’m in, what comes next?</b>
                    <p>A: The Commissioner sets up the League by clicking on the Sign-Up button and completing the required information. Once completed each Team Owner receives an email with a link to Sign-Up.</p>
                    <b>Q: Our League has been set up, now what?</b>
                    <p>A: The draft follows. Each Team Owner selects players by deciding who goes first, second, third and so on. Conduct the draft any time, any place, before the season starts, after it starts, whatever... Complete the draft and we'll take it from there.</p>
                    <b>Q: How many players should we select in the draft?</b>
                    <p>A: The number of players selected is usually determined by the number of Teams in the League. As an example, my League of 8 Teams had 17 rounds so we selected 137 players. The more players selected, the more it becomes a game of skill.</p>
                    <b>Q: I’ve completed everything but I can’t get to My Dashboard.</b>
                    <p>A: You don’t see Your Dashboard? Then the draft has not occurred, or the Commissioner has not entered the draft results. Once the Commissioner completes the input, Your Dashboard will be your landing zone all season. You will see your own selections and a grid of everyone’s else’s, injuries, players not selected (important if you have Roster Moves), and more services to come. If you want to receive texts whenever one of your players smashes a Homerun, then edit your profile and fill out your telephone information. </p>
                    <b>Q: Am I "stuck" with a drafted player for the whole season?</b>
                    <p>A: Not if the Commissioner set up the League with the ability to make Roster Moves.</p>
                    <b>Q: How is the winner determined and do you give out prizes?</b>
                    <p>A: The Team Owner with the most homeruns at the end of the season typically wins. You can also have monthly winners, since FHR tracks that as well. We do not offer prizes, but I’m sure each League has their own gold at the end of the rainbow.</p>
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

export default Faq;
