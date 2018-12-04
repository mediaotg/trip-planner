import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <header className="page-header">
                <div className="wrapper">
                    <div className="brand">
                        <Link to="/"><h1>{this.props.value}</h1></Link>
                    </div>
                    <div className="menu">
                        <a className="circle link light" href="https://google.com">?</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;