import React from "react";

const Header = () => {
  const updateUrl = () => {};

  return (
    <div className="ui secondary pointing menu">
      <a href="/accordion" className="item">
        Accordion
      </a>
      <a href="/search" className="item">
        Search
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
      <a href="/dropdown" className="item">
        Dropdown
      </a>
    </div>
  );
};

export default Header;
