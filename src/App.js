import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { QuestionScreen } from './screens/question';
import { HomeScreen } from './screens/home';
import { ProfileScreen } from './screens/profile';

import './app.css';

class App extends Component {
    render() {
        const ScreensRoot = () => (
            <Router>
                <div>
                    <ul className="nav-bar">
                        <li>
                            <Link to="/">React MCQ</Link>
                        </li>
                        <li>
                            <Link to="/question">Questions</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/" component={HomeScreen} exact/>
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
