import React from 'react';
import '../components/css/home.css';
import {Grid,Row,Col, Button} from "react-bootstrap";

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

            {/* Emergency section */}
            <div className='emergencysection'>
                <h1>What is your Emergency?</h1>
                <Row className="showgrid">
                        <Col md={4} className="columns">
                            <i class="fas fa-ambulance" id="icon"></i>
                            <h4>Need an Ambulance?</h4>
                            <Button>Ask for an Ambulance</Button>
                        </Col>
                        <Col md={4} className="columns">
                            <i class="fas fa-fingerprint" id="icon"></i>
                            <h4>Need the police?</h4>
                            <Button>Call the Police</Button>
                        </Col>
                        <Col md={4} className="columns">
                            <i class="fas fa-fire-extinguisher" id="icon"></i>
                            <h4>Need the fire brigade?</h4>
                            <Button>Ask for fire brigade</Button>
                        </Col>
                </Row>
            </div>


            {/* how we work section */}
            {/* <div>
                <h1>How we work</h1>
                <Row className="showgrid">
                    <Col md={3}>
                        <p>Download the app</p>
                    </Col>
                    <Col md={3}>
                        <p>Select your emergency</p>
                    </Col>
                    <Col md={3}>
                        <p>Turn on location</p>
                    </Col>
                    <Col md={3}>
                        <p>Order the emergency service</p>
                    </Col>
                </Row>
            </div> */}

            
            

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

