import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import LoginFormInput from './LoginFormInput';

chai.should();
chai.use(sinonChai);

describe('<LoginFormInput />', () => {
    
  it('should have one input element', () => {
    const props = {
      name: "testName",
      onChange: sinon.spy(),
      placeholder: "Type Here",
      value: 100
    };

    const wrapper = shallow(<LoginFormInput {...props} />);

    const actual = wrapper.find('input').length;
    const expected = 1;

    actual.should.be.equal.to(expected);
  });

  it('should handle change', () => {
    const props = {
      name: "testName",
      onChange: sinon.spy(),
      placeholder: "Type Here",
      value: "hi"
    };

    const wrapper = shallow(<LoginFormInput {...props} />);

    props.onChange.should.not.have.been.called;
    wrapper.simulate('change', { target: { value: 'bye' }});
    props.onChange.should.have.been.calledWith('bye');
  });
});
