import React from "react";
import Logo from "../Logo";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
