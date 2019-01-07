import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QuestionScreen } from './screens/Question';
import { HomeScreen } from './screens/Home';
import { ProfileScreen } from './screens/Profile';
import { SummaryScreen } from './screens/Summary';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import './App.css';

class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
    };

    backdropClickHandler = () => {
        this.setState(this.setState({ sideDrawerOpen: false }));
    };

    render() {
        let backDrop;

        if (this.state.sideDrawerOpen) {
            backDrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div>
                <Router>
                    <div className="container">
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer isOpen={this.state.sideDrawerOpen} />
                        {backDrop}
                        <Switch>
                            <Route path="/" component={HomeScreen} exact />
                            <Route path="/question" component={QuestionScreen} />
                            <Route path="/profile" component={ProfileScreen} />
                            <Route path="/summary" component={SummaryScreen} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
