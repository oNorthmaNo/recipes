import React, { Component } from 'react';
import './topBar.scss';
import { NavLink, withRouter } from 'react-router-dom';
import { Logo } from '../logo/logo';
import { UserAccount } from '../user-account/user-account';
import { PropTypes } from 'prop-types';

class TopBarClass extends Component {

    static propTypes = {
        user: PropTypes.object,
        logout: PropTypes.func,
        hasLoggedOut: PropTypes.bool,
    }

    constructor(props) {
        super();
        this.props = props;
    }
    
   render() {
       const options = [
        {
            label: 'My account',
            action: () => {}
        },
        {
            label: 'Logout',
            action: this.props.logout
        },
        ]
       return (
        <nav className="app-layout__top-bar top-bar">
            <div className="top-bar__container">
                <div className="top-bar__container__block"></div>
                <div className="top-bar__logo-container">
                    <NavLink className="top-bar__logo" to="/">
                        <Logo></Logo>
                    </NavLink>
                    <div className="top-bar__title"><h1 className="h1">Helms Kitchen</h1></div>
                </div>
                <div className="top-bar__container__block">
                    {this.props.user && !this.props.hasLoggedOut ? (
                        <UserAccount user={this.props.user} options={options}></UserAccount>
                    ) : (
                        <button className="button" type="button" onClick={this.props.navigateToLogin}>Login</button>
                    )}
                </div>
            </div>
            {this.props.children}
        </nav>
    )};
}


export const TopBar = withRouter(TopBarClass);

const TopBarMenu = (props) => (
    <ul className="top-bar__menu">
        {props.children}
    </ul>
);

export { TopBarMenu };

const TopBarLink = (props) => {
    return (
    <li className="top-bar__item">
        <NavLink
            activeClassName="top-bar__link--active"
            className="top-bar__link"
            exact={props.exact ? true : false}
            to={props.to}
            >
            {props.title}
        </NavLink>
    </li>
)}

export { TopBarLink };