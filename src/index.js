import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import AppTemplate from './components/template';
import Intro from './components/intro';
import Movies from './components/movies';
import Top from './components/top';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

ReactDOM.render(
  <Router>
    <AppTemplate>
      <Route render={({location}) => (
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} timeout={2000} classNames="fade">
            <Switch location={location}>
              <Route
                path="/"
                exact={true}
                component={Intro}
              />
              <Route
                path="/movies"
                component={Movies}
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