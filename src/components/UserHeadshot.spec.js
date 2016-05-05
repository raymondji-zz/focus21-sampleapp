import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import UserHeadshot from './UserHeadshot';

chai.should();
chai.use(sinonChai);

describe('<UserHeadshot />', () => {
    
  it('should render an img with the src as photoUrl', () => {
    const photoUrl = "testUrl.png";
    const wrapper = shallow(<UserHeadshot photoUrl={photoUrl} />);

    const actual = wrapper.find({ src: photoUrl }).length;
    const expected = 1;

    actual.should.equal(expected);
  });
});
