import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">contact</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Nav