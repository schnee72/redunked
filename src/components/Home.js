import React from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increment} from '../reducers/counter';
import PropTypes from 'prop-types';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
    </p>
    <p>
      <button onClick={() => props.changePage()}>Go to about page via redux</button>
    </p>
  </div>
);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  changePage: () => push('/about')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
