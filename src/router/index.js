import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Partners from '../containers/Partners';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/partners" component={Partners} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
