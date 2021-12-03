import React from 'react';
import "./home.css"


const Home = () => {
    return (
        <div className="main">
            <div className="bodycontent">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="content">
                            <h1>Reporting crimes hapening in-time and getting help is really hard</h1>
                            <h3>This system allows one to report crimes online from wherever they are and they could get immediate help</h3>
                            <h2>Save your life.Save Humanity</h2>
                            <div className="buttons">
                                <button className="button1">Report Crime</button>
                                <button className="button2">Support</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>


        
            <div className="container">
                <h1>With the help of your reports victims are rescued</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div class="sector">
                            <p>Report any form of crime</p>
                            <ul>
                                <li>Personal crime
                                    <p>Personal crimes are crimes that are perpetrated against an individual. These can include assault, battery, false imprisonment, kidnapping, homicide, and rape. Homicide also covers a range of categories, which include first degree murder, second degree murder, involuntary manslaughter, and vehicular homicide.</p>

                                </li>
                                <li>Property crime
                                    <p>Property crime is a category of crime, usually involving private property, that includes, among other crimes, burglary, larceny, theft, motor vehicle theft, arson, shoplifting, and vandalism. Property crime is a crime to obtain money, property, or some other benefit.</p>

                                </li>
                                <li>Statutory crime
                                    <p>Statutory crimes are violations of specific state or federal statutes. They may involve either property offenses or personal offenses. An example of this would be alcohol related crimes, such as DUI or selling alcohol to a minor.</p
                                        >
                                </li>
                                <li>Inchoate crime
                                    <p>An inchoate offense, preliminary crime, inchoate crime or incomplete crime is a crime of preparing for or seeking to commit another crime. The most common example of an inchoate offense is "attempt".</p>
                                </li>
                                <li>Financial crime
                                    <p>Financial crime is defined as crime that is specifically committed against property. These crimes are almost always committed for the personal benefit of the criminal, and they involve an illegal conversion of ownership of the property that is involved.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="sector1">
                            <p>how we sort out crimes</p>
                            <ul>
                                <li>Contact police</li>
                                <li id="first"><a href="report.html">Report Criminal Content</a><i class="fa fa-angle-right"></i></li>
                                <p>Need a lawyer
                                    <ul>Steps
                                        <li>Step 1: Gather and Understand the Facts of Your Case</li>
                                        <li>Step 2: Determine Your Legal Problem and Your Desired Outcome</li>
                                        <li>Step 3: Finding Legal Information and Reading About the Law</li>
                                        <li>Step 4: Legal Analysis/Legal Writing and beyond</li>
                                    </ul>
                                </p>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div class="sector2">
                            <p>Our Annual report and samples of various crime scenes</p>
                            <img src="sth.jpg" />
                            <div class="input-group">
                                <button type="submit" name="submit" class="btn">ACCESS THE PODCAST</button>
                            </div>
                            <div class="input-group">
                                <button type="submit" name="submit" class="btn">READ OUR ANNUAL REPORT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newslettersection">
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
                        <button type="submit" name="submit" class="btn">SUBSCRIBE</button>
                    </div>
                    <p>You can unsubscribe at any time using the link at the bottom of newsletter emails or you can contact us directly </p>
                </div>
            </div>
  

        </div>
    )
};

export default Home
