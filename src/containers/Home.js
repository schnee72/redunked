import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment } from '../actions/Counter';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <Counter count={props.count} isIncrementing={props.isIncrementing} increment={props.increment} />
    <p>
      <button onClick={() => props.changePage()}>Go to about page via react-router-redux</button>
    </p>
  </div>
);

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.Counter.count,
  isIncrementing: state.Counter.isIncrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  changePage: () => push('/about')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
