import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Photo Album</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">All Photos</Link>
                    </li>
                    <li>
                        <Link to="/create">Upload a Photo</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Nav);