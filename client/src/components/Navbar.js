import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Apply Yourself</h1>
      <Link to="/create">Add An Application</Link>
    </nav>
  );
};

export default Navbar;
