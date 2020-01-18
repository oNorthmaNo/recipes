import React, { Component } from 'react';
import { TopBar, TopBarMenu, TopBarLink } from '../topbar/topBar';
import history from '../../helpers/history';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: undefined
        }
    }

    isOnLogin = () => {
        const pathName = history.location.pathname;
        return pathName === '/login' ||  pathName === '/signup';
    }

    componentWillMount() {
        try {
            const { user } = JSON.parse(localStorage.getItem('user'));
            this.setState({ user });
        } catch (err) {
            // do nothing;
        }
    }

    render() {
        return (
            <React.Fragment>
            {!this.isOnLogin() &&
            <TopBar>
                <TopBarMenu>
                    <TopBarLink exact to="/" title="Home"/>
                    <TopBarLink to="/recepten" title="Recepten"/>
                    <TopBarLink to="/top10" title="Top10"/>
                </TopBarMenu>
            </TopBar>
            }
            </React.Fragment>
        )
    }
}




export { Menu }