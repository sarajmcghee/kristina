import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/NavbarComponent';
import Footer from "./components/FooterComponent";
import RouterURL from "./router/RouterURL";

import './App.css';

const App = () => {
  
  return (
    <div className="App">
            <Router>
                 <Navigation />
                    <RouterURL />
                <Footer /> 
            </Router>
    </div>
  );
}

export default App;
