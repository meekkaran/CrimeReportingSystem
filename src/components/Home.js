import React from 'react';
import '../components/css/home.css'

function Home() {
  return(
        <div>
            {/* main body content */}
            <div className="bodycontent">
                <div className="content">
                    <h1>Reporting crimes hapening in-time <br/>and getting help is really hard</h1>
                    <h3>This system allows one to report crimes online from wherever they are and they could get immediate help</h3>
                    <h2>Save your life!Save Humanity</h2>
                    <div className="buttons">
                        <button className="button">Report Crime</button>
                        <button className="button">Support</button>
                    </div>
                </div>  
            </div>

            newsletter section 
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

             
            {/* <div className="newslettersection">
                <div class="newsletter">
                    <h4>Sign up to our newsletter</h4>
                    <div class="input-group">
                        <label>YOUR NAME</label>
                        <input type="text" name="" />
                    </div>
                    <div class="input-group">
                        <label>YOUR EMAIL</label>
                        <input type="text" name="" />
                    </div>
                    <div class="input-group">
                        <button type="submit" name="submit" class="newsletter_btn">SUBSCRIBE</button>
                    </div>
                    <p>You can unsubscribe at any time using the link at the bottom of newsletter emails or you can contact us directly </p>
                </div>
            </div> */}

        </div>
   ) };

 export default Home

