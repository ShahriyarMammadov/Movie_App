import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div id={"header"}>
      <div className="logo">
        <Link to={"/"}>Movie App</Link>
      </div>
      <div className="user">
        <img src="https://archive.org/services/img/user-img" alt="" />
      </div>
    </div>
  );
};

export default Header;
