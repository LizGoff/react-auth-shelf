import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to="/shelf">
            Shelf Page
=======
          <Link to="/add">
          Add Shelf Items
>>>>>>> master
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
