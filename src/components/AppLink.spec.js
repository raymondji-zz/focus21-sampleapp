import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import AppLink from './AppLink';
import { Link } from 'react-router';

describe('<AppLink />', () => {
  it('should have a li with app-links-grid_tile className', () => {
    const appLinkData = {
      photoUrl: "",
      appId: 1
    }
    const wrapper = shallow(<AppLink appLinkData={appLinkData} />);
    const actual = wrapper.find('li').prop('className');
    const expected = 'app-links-grid_tile';
    
    expect(actual).to.equal(expected);
  });

   it('should link to the given app url', () => {
    const appId = 1;
    const appLinkData = {
      photoUrl: "",
      appId: 1
    }
    const wrapper = shallow(<AppLink appLinkData={appLinkData} />);
    const actual = wrapper.findWhere(n => n.prop('to') == `/apps/${appId}`).length;
    const expected = 1;
    
    expect(actual).to.be.equal(expected);
  });
});
