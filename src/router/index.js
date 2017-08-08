import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Projects from '../containers/Projects';
import Project from '../containers/Project';
import About from '../containers/About';
import NotFound from '../containers/NotFound';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

export default class Router extends Component {
  render() {
    // NOTE: routerProps need to be removed once the gh-pages site url is changed to
    // http://berebarcena.com
    const routerProps = {};
    if (process.env.NODE_ENV === 'production') {
      routerProps.basename = '/berebarcena.com';
    }
    return (
      <BrowserRouter {...routerProps}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route path="/projects/:projectId" component={Project} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
