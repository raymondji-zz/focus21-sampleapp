import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const AppLink = ( props ) => {
  const { photoUrl, appId } = props.appLinkData;
  const appUrl = `/apps/${appId}`;
  let appLinkTileStyle = {
    backgroundImage: 'url(' + photoUrl + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
    backgroundPosition: 'center'
  };
  
  return (
    <Link to={appUrl}><li className="app-links-grid_tile" style={appLinkTileStyle}></li></Link>
  );
};

AppLink.propTypes = {
	appLinkData: PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      appId: PropTypes.string.isRequired
    })
};

export default AppLink;
