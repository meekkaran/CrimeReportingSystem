import React from "react";
import "./App.css";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {FooterContainer} from './containers/footer';
import Home from "./components/Home";
import Services from "./components/Sevices";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import ReportCrime from "./components/ReportCrime";

function App() {
    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route exact path='/services' element={<Services/>}/>
                    <Route exact path='/reportcrime' element={<ReportCrime/>}/>
                    <Route exact path='/support' element={<Support/>}/>
                    <Route exact path='/signup' element={<Signup/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                </Routes>

                <FooterContainer />
            </Router>
        </>
    )
}

export default App;
