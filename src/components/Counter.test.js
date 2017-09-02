import React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';

const setup = () => {
  const props = {
    count: 1,
    increment: jest.fn(),
    isIncrementing: false
  };

  const enzymeWrapper = mount(<Counter {...props} />);

  return {
    props,
    enzymeWrapper
  };
};

describe('Counter component', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('button').text()).toBe('Increment');
  });
});
