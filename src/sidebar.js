import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home } from './home';
import { Contact } from './contact';
import { About } from './about';
import './App.css';
export class Sidebar extends Component {
    render() {
        return (
            <BrowserRouter>

                <div>
                    <div id="Sidebar">


                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                    </div>
                    <div className="Mainbar">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/home" component={Home} />
                    </div>

                </div>
            </BrowserRouter>

        );
    }
}

























