import React from 'react';

const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    </div>
  </header>
);

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
