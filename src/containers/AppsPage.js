import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/appsPageActions';
import apiHelper from '../businessLogic/apiHelper';
import Copyright from '../components/Copyright';
import TopNavbar from '../components/TopNavbar';
import AppLink from '../components/AppLink';
import '../styles/app-links-page.scss';

export class AppsPage extends Component {
    componentWillMount() {
        apiHelper.getUserApps().then((appData) => {
             this.props.actions.appsListReceived(appData);
        });
    }
    
    render() {
        const { appsList } = this.props.appState;
        return (
            <div>
                <TopNavbar />
                <div className="app-links-container">
                    <img className="app-links-logo" src="../assets/images/washington-department-of-health-2151214158-std@2x.png"/>
                    <ul className="app-links-grid">
                        {appsList.map(function(appLinkData){
                            return <AppLink appLinkData={appLinkData} key={appLinkData.appId} />;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

AppsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.appsPageState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppsPage);