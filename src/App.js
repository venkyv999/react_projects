import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route  } from "react-router-dom";
import { Router } from 'react-router';
import { Sidebar } from './sidebar';
import { Home } from './home';
import { Contact } from './contact';
import { About } from './about';

class App extends Component {
  render() {
    return (
    
      <div>

        
        <Sidebar />

        </div>
  

    );
  }
}

export default App;
