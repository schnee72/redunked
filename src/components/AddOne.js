import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddOne extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addOne}>Add One</button>
        {' '}
        <span>{this.props.value}</span>
      </div>
    );
  }
}

AddOne.propTypes = {
  value: PropTypes.number.isRequired,
  addOne: PropTypes.func.isRequired
};

export default AddOne;
