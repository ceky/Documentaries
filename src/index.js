import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import AppTemplate from './components/template';
import App from './components/main';
import About from './components/about';
import Top from './components/top';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

ReactDOM.render(
    <Router>
        <AppTemplate>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={3000} classNames="fade">
                        <Switch location={location}>
                            <Route
                                path="/"
                                exact={true}
                                component={App}
                            />
                            <Route
                                path="/about"
                                component={About}
                            />
                            <Route
                                path="/top"
                                component={Top}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </AppTemplate>
    </Router>, 
    document.getElementById('root')
);