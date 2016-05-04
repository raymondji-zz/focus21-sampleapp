import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions'
import * as loginActions from '../actions/loginActions';
import LoginForm from '../components/LoginForm';
import Copyright from '../components/Copyright'
import authHelper from '../businessLogic/authHelper.js'
import objectAssign from 'object-assign';

export class LoginPage extends Component {

  render() {
    console.log("loginpage props:", this.props);
    return (
      <div>
        <LoginForm
          emailKeypress={this.props.actions.emailKeypress}
          passwordKeypress={this.props.actions.passwordKeypress}
          verifyEmail={this.props.actions.verifyEmail}
          submitLogin={this.props.actions.submitLogin}
          loginState={this.props.loginState}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    loginState: state.loginAppState
  };
}

function mapDispatchToProps(dispatch) {
  let actions = {};
  objectAssign(actions, authActions, loginActions);
  
  let boundActions = bindActionCreators(actions, dispatch);
  objectAssign(boundActions, {
    verifyEmail: (email) => {
        authHelper.verifyEmail(dispatch, email);
    },
    submitLogin: (email, password) => {
        authHelper.login(dispatch, email, password);
    }
  });
  
  return {
    actions: boundActions
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);