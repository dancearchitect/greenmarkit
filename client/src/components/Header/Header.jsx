import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <header>
        <Link
          to={"/"}
          style={{ textDecoration: "none", color: "#E0B564", fontSize: "18px" }}
        >
          Home
        </Link>
        <Link
          to={"/vendors"}
          style={{ textDecoration: "none", color: "#E0B564", fontSize: "18px" }}
        >
          All Producers
        </Link>
        <Link
          to={"/maps"}
          style={{ textDecoration: "none", color: "#E0B564", fontSize: "18px" }}
        >
          Market Map
        </Link>
        <Link
          to={"/create"}
          style={{ textDecoration: "none", color: "#E0B564", fontSize: "18px" }}
        >
          Become a Producer
        </Link>
        {/* Login will be a dropdown */}
        {/* <Link to={'/vendor/login'}>Login</Link> */}
      </header>
    </nav>
  );
};

export default Header;
