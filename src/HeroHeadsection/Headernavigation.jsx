
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dropdown = ({ title, options }) => {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">{title}</button>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <Link key={index} to={option.path}>
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="http://idoxaaj.sufydely.com/zysklogo.png" alt="Logo" className="logo-img" />
        <span id="logoname">Untitled UI</span>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Dropdown
          title="Products"
          options={[
            { label: "Product 1", path: "/product1" },
            { label: "Product 2", path: "/product2" },
          ]}
        />
        <Dropdown
          title="Resources "
          options={[
            { label: "Resource 1", path: "/resource1" },
            { label: "Resource 2", path: "/resource2" },
          ]}
        />
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className="profile">
        <img
          src="http://idoxaaj.sufydely.com/girlpic.png"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </nav>
  );
};

const Headernavigation = () => {
  return (
    <Router>
      <Navbar />
      {/* <Routes className='route'>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/product1" element={<h1>Product 1</h1>} />
        <Route path="/product2" element={<h1>Product 2</h1>} />
        <Route path="/resource1" element={<h1>Resource 1</h1>} />
        <Route path="/resource2" element={<h1>Resource 2</h1>} />
        <Route path="/pricing" element={<h1>Pricing Page</h1>} />
      </Routes> */}
    </Router>
  );
}

export default Headernavigation;
