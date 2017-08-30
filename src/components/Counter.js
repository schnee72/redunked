import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div>
    <p>Count: {props.count}</p>
    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    </p>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool.isRequired
};

export default Counter;
