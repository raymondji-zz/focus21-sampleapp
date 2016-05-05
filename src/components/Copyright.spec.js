import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Copyright from './Copyright';
import { Link } from 'react-router';

describe('<AppLink />', () => {
  it('should have a title with className copyright-footer_text', () => {
    const wrapper = shallow(<Copyright />);
    const actual = wrapper.find('h4').prop('className');
    const expected = 'copyright-footer_text';
    
    expect(actual).to.equal(expected);
  });

  it('should have a span with className copyright-footer_symbol', () => {
    const wrapper = shallow(<Copyright />);
    const actual = wrapper.find('span').prop('className');
    const expected = 'copyright-footer_symbol';
    
    expect(actual).to.equal(expected);
  });
});
