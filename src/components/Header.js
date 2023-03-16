import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to={`/`}>
        <h2>Courses. Self development. Improve yourself.</h2>
      </Link>
    </div>
  );
}

export default Header;