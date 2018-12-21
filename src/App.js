import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QuestionScreen } from './screens/Question';
import { HomeScreen } from './screens/Home';
import { ProfileScreen } from './screens/Profile';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';

class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => (
            { sideDrawerOpen: !prevState.sideDrawerOpen }
        ));
    };

    render() {
        const ScreensRoot = () => (
            <Router>
                <div style={{ height: '100vh' }}>
                    <Toolbar />
                    <SideDrawer />
                    <Backdrop />
                    <Switch>
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/question" component={QuestionScreen} />
                        <Route path="/profile" component={ProfileScreen} />
                    </Switch>
                </div>
            </Router>
        );

        return (
            <div>
                <ScreensRoot />
            </div>
        );
    }
}

export default App;
