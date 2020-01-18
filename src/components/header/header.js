import React from 'react';
import './header.scss';

const Header = (props) => {
  const showButton = props.isHidden ? 'hidden': '';
    return (
      <header className="daily-recipe__container-header">
        <h2 className="h2 daily-recipe__header"><span>{props.title}</span></h2>
        <button className={'button ' + showButton} disabled={props.isDisabled} type="button" onClick={() => props.action()}><i className="fas fa-sync"></i></button>
      </header>
    );
}

export default Header;