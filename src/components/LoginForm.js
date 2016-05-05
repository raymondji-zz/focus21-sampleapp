import React, {PropTypes} from 'react';
import LoginFormInput from './LoginFormInput';
import UserHeadshot from './UserHeadshot';
import { Link } from 'react-router';
import '../styles/login-page.scss';

// Destrucuring props for brevity below.
const LoginForm = ({
    emailKeypress, passwordKeypress,
    verifyEmail, submitLogin, loginState
}) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!loginState.verifiedEmail) {
            verifyEmail(loginState.emailInput);
        } else {
            submitLogin(loginState.emailInput, loginState.passwordInput);
        }
    };
        
    return (
        <div className="login-container">
            <img className="login-title-img" src="../assets/images/washington-department-of-health-2151214158-std.png"/>
            <form className="login-form" onSubmit={handleOnSubmit}>
                { !loginState.verifiedEmail ||
                  <UserHeadshot name={loginState.name} email={loginState.verifiedEmail} photoUrl={loginState.photoUrl} /> }   
                { !loginState.errorMessage || <p className="login-form_error-message">{loginState.errorMessage}</p> }            
                { !!loginState.verifiedEmail || 
                  <LoginFormInput onChange={emailKeypress} onBlur={verifyEmail}
                                  inputType="email" name="email" error={loginState.errorMessage}
                                  inProgress={loginState.emailVerificationInProgress} /> }
                <LoginFormInput onChange={passwordKeypress} inputType="password"
                            name="password" error={loginState.errorMessage} inProgress={loginState.loginInProgress} />
                <button className="login-form_submit" type="submit" value="Login">{ !loginState.verifiedEmail ? "Next" : "Sign In" }</button>
                <Link className="login-form_help" to="/help"><p>Need help?</p></Link>      
            </form>
            { !loginState.verifiedEmail || <img className="login-apps-thumbnail" src="../assets/images/logo-thumbnail@2x.png"/> }          
        </div>
    );
};

LoginForm.propTypes = {
    emailKeypress: PropTypes.func.isRequired,
    passwordKeypress: PropTypes.func.isRequired,
    verifyEmail: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired,
    loginState: PropTypes.object.isRequired
};

export default LoginForm;
