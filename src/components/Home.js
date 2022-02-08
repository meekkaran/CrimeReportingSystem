import React from 'react';
import '../components/css/home.css';
import {Grid,Row,Col} from "react-bootstrap";

function Home() {
  return(
        <div>
            {/* main body content */}
            <div className="bodycontent">
                <div className="content">
                    <h1>Reporting Incidences and Emergencies happening in-time <br/>and getting help is really hard</h1>
                    <h3>This system allows one to report any emergency online from wherever they are and they could get immediate help</h3>
                    <h2>Save your life! Save Humanity</h2>
                    <div className="buttons">
                        <button className="button">Report Incidence</button>
                        <button className="button">Support</button>
                    </div>
                </div>  
            </div>

             {/* how we work section */}
            <div className='howwework'>
                <h1>How we work</h1>
                <Row className="showgrid">
                    <Col md={3}>
                        <i class="fas fa-download" id="icon"></i>
                        <h4>Download the app</h4>
                    </Col>
                    <Col md={3}>
                        <i class="fas fa-hand-pointer" id="icon"></i>
                        <h4>Select your emergency</h4>
                    </Col>
                    <Col md={3}>
                        <i class="fas fa-search-location" id="icon"></i>
                        <h4>Turn on location</h4>
                    </Col>
                    <Col md={3}>
                        <i class="fas fa-first-aid" id="icon"></i>
                        <h4>Order the emergency service</h4>
                    </Col>
                </Row>
            </div>

            {/* Emergency section */}
            <div className='emergencysection'>
                <h1>What is your Emergency?</h1>
                <Row className="showgrid">
                        <Col md={4} className="columns">
                            <i class="fas fa-ambulance" id="icon"></i>
                            <h4>Need an Ambulance?</h4>
                            Are you in an emergency health condition that needs an ambulance urgently?
                             do not hesistate to order the nearest ambulance for assistance. Save a life!<br/>
                            <button className="button">Ask for an Ambulance</button>
                        </Col>
                        <Col md={4} className="columns">
                            <i class="fas fa-fingerprint" id="icon"></i>
                            <h4>Need the police?</h4>
                            In case of any form of crime, fights, accidents or violence do not hesistate to call the police, reach out to the nearest police station through 
                            the app to be able to get assistance in time.<br/>
                            <button className="button">Call the Police</button>
                        </Col>
                        <Col md={4} className="columns">
                            <i class="fas fa-fire-extinguisher" id="icon"></i>
                            <h4>Need the fire brigade?</h4>
                            Asking for the fire brigade has been made easy by just ordering for the fire brigade and you get assistance immediately.
                            lets save lives .lets save Humanity.<br/>
                            <button className="button">Ask for fire brigade</button>
                        </Col>
                </Row>
            </div>

            
            

            {/* newsletter section  */}
             <div className='newsletter'>
                <form> 
                <h1>Signup to our Newsletter</h1>
                <p>To get important news and updates on what happens on the daily and  other significant information.</p>
                    <div class="info">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <input type="submit" value="Subscribe" id="submit" />
                <p>You can unsubscribe at any time using the link at the bottom of newsletter emails or you can contact us directly</p>
                </form> 
            </div>


        </div>
   ) };

 export default Home

