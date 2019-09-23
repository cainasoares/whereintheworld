import React from "react";

import "./styles.scss";

const Header = () => (
  <header id="main-header">
    <div className="container">
      <div className="content">
        <h1>Where in the world?</h1>
        <button id="dark-mode">
          <i className="icon ion-md-moon"></i>Dark Mode
        </button>
      </div>
    </div>
  </header>
);

export default Header;
