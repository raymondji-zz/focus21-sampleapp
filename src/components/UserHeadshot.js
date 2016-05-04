import React, { Component, PropTypes } from 'react';
import "../styles/user-headshot.scss";

const UserHeadshot = ({
  name,
  email,
  photoUrl
}) => {
    return (
        <div className="user-headshot">
            <img className="user-headshot_img" src={photoUrl}/>
            <h2 className="user-headshot_name">{name}</h2>
            <h5 className="user-headshot_email">{email}</h5>
        </div>
    );
};

UserHeadshot.propTypes = {
	name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
};

export default UserHeadshot;
