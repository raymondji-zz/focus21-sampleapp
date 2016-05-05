import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LoginForm from './LoginForm';
import UserHeadshot from './UserHeadshot';
import LoginFormInput from './LoginFormInput';

describe('<LoginForm />', () => {

    it('should display a UserHeadshot when email is verified', () => {
      const loginState = {
                        verifiedEmail: "someVerifiedEmail"
                      };

      const wrapper = shallow(<LoginForm loginState={loginState}/>);
      const actual = wrapper.find(UserHeadshot).length;
      const expected = 1;

      expect(actual).to.equal(expected);
    });
    
    it('should display two LoginFormInputs when email is not verified', () => {
      const loginState = {
                        verifiedEmail: ""
                      };

      const wrapper = shallow(<LoginForm loginState={loginState}/>);
      const actual = wrapper.find(LoginFormInput).length;
      const expected = 2;

      expect(actual).to.equal(expected);
    });
    
    it('should display one LoginFormInputs when email is verified', () => {
      const loginState = {
                        verifiedEmail: "someVerifiedEmail"
                      };

      const wrapper = shallow(<LoginForm loginState={loginState}/>);
      const actual = wrapper.find(LoginFormInput).length;
      const expected = 1;

      expect(actual).to.equal(expected);
    });
    
    it('should display an img with className login-apps-thumbnail when email is verified', () => {
      const loginState = {
                        verifiedEmail: "someVerifiedEmail"
                      };

      const wrapper = shallow(<LoginForm loginState={loginState}/>);
      const actual = wrapper.findWhere(n => n.prop('className') == 'login-apps-thumbnail').length;
      const expected = 1;

      expect(actual).to.equal(expected);
    });
    
    it('should not display an img with className login-apps-thumbnail when email is not verified', () => {
      const loginState = {
                        verifiedEmail: ""
                      };

      const wrapper = shallow(<LoginForm loginState={loginState}/>);
      const actual = wrapper.findWhere(n => n.prop('className') == 'login-apps-thumbnail').length;
      const expected = 0;

      expect(actual).to.equal(expected);
    });
});