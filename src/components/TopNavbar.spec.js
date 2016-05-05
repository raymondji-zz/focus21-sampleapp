import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TopNavbar from './TopNavbar';

chai.should();
chai.use(sinonChai);

describe('<TopNavbar />', () => {
    
  it('should have four links', () => {
    const wrapper = shallow(<TopNavbar />);

    const actual = wrapper.find('li').length;
    const expected = 4;

    actual.should.equal(expected);
  });
});
