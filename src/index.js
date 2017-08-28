import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AddOne from './components/AddOne';
import addOne from './reducers';

const store = createStore(addOne);

const render = () => ReactDOM.render(
  <AddOne
    value={store.getState()}
    addOne={() => store.dispatch({type: 'INCREMENT'})}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
