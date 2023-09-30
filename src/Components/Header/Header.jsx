import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="w-full navigation p-5 flex bg-transparent justify-center items-center text-green-800 text-lg font-robot font-semibold max-sm:text-sm max-sm:p-3">
        <ul className="flex flex-row space-x-10 z-50 max-sm:space-x-3">
          <li className="nav-button">
            <a href="#">Home</a>
          </li>
          <li className="nav-button">
            <a href="#">About</a>
          </li>
          <li className="nav-button">
            <a href="#">Service</a>
          </li>
          <li className="nav-button">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
