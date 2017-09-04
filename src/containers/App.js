import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
