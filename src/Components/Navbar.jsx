import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-center NavbarMenu">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <Link to="/Home">
              <span>Home</span>
            </Link>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <Link to="/Likes">
              <span>Likes</span>
            </Link>
            Likes
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
