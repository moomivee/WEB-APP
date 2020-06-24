import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import Client from './components/Client';

// import more components

export default (
    <HashRouter history={hashHistory}>
     <div>
      <Route path='/' component={Home} />
      <Route path='/client' component={Client}/>
     </div>
    </HashRouter>
);