import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div>
            <body>
                <footer>
                    <div className="container">
                        <div className="secaboutus">
                            <h2>About Us</h2>
                            <p>lorem ever since the 1500s, when an unknown printer took 
                                a galley of type and scrambled it to make a type specimen book.  
                                It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with 
                                oftware like Aldus PageMaker including versions of 
                                Lorem Ipsum</p>
                            <ul className="sci">
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="quicklinks">
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h2>Contact Info</h2>
                            <ul className="info">
                                <li>
                                    <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <span>647 Linda Street<br/>
                                    Phoenixville, PA 19460,USA</span>
                                </li>
                                <li>
                                    <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                    <p><a href="tel:12345678900">+1 234 567 8900</a><br/>
                                        <a href="tel:12345678900">+1 234 567 8900</a></p>
                                </li>
                                <li>
                                    <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                                    <p><a href="meekkaran@gmail.com">meekkaran@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="copyrighttext">
                    <p>Copyright @ 2021 Meek Karan. All Rights Reserved.</p>
                </div>
            </body>
        </div>
    )
}

export default Footer
