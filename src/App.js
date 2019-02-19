import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav';
import ListPhoto from './components/ListPhoto';
import CreatePhoto from './components/CreatePhoto';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' component={ListPhoto} />
                <Route exact path='/create' component={CreatePhoto} />
            </div>
        );
    }
}

export default withRouter(App);