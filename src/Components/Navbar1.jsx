import React from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <div className="container">
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          <Link to="/Home">Home</Link>
        </a>
        <a href="#news">
          <Link to="/Home">Likes</Link>
        </a>
      </div>
    </div>
  );
};
export default Navbar1;
