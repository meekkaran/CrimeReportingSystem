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
        </div>
    )
};

export default Home
