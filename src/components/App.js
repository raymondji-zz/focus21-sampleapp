import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Copyright from './Copyright';

const App = (props) => {
  return (
    <div className="wrapper">
      {props.children}
      <Copyright />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
