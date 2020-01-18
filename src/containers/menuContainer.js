import React, { Component } from 'react';
import * as UserActions from '../redux/actions/userActions';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import history from '../helpers/history';
import { TopBar, TopBarMenu, TopBarLink } from '../components/topbar/topBar';
import { PropTypes } from 'prop-types';

export class MenuContainer extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
    }

    // Define the property types of this Container Component
    constructor(props) {
        super(props);

        this.state = {
            showMenu: true,
            user: undefined,
            hasLoggedOut: false,
        }

        history.listen(() => {
            // location is an object like window.location
            this.isOnLogin();
        });
    }

    verifyUser() {
        try {
            if (!this.state.user) {
                const { user } = JSON.parse(localStorage.getItem('user'));
                this.setState({ user });
            }
        } catch (err) {
            // do nothing;
            if (this.state.user) {
                this.setState({ user: undefined });
            }
        }
    }
    
    componentWillMount() {
        this.verifyUser();
    }
    
    componentDidUpdate() {
        this.verifyUser();
    }

    isOnLogin = () => {
        const pathName = history.location.pathname;
        const showMenu = !(pathName === '/login' ||  pathName === '/signup');
        if (this.state.showMenu !== showMenu) {
            this.setState({showMenu});
        }
    }

    navigateToLogin = () => {
        this.setState({showMenu: false, hasLoggedOut: false});
        history.push('login');
    }

    logout = () => {
        this.props.actions.logout();
        this.setState({hasLoggedOut: true, user: undefined});
    }

    render() {
        return (
             <React.Fragment>
             {this.state.showMenu &&
             <TopBar 
                logout={this.logout}
                navigateToLogin={this.navigateToLogin} 
                hasLoggedOut={this.state.hasLoggedOut}
                user={this.state.user}
            >
                 <TopBarMenu>
                     <TopBarLink exact to="/" title="Home"/>
                     <TopBarLink to="/recepten" title="Recepten"/>
                     {this.state.user &&
                        <TopBarLink to="/top10" title="Top10"/>
                    }
                 </TopBarMenu>
             </TopBar>
             }
             </React.Fragment>
        );
    }
}



// This maps the state to the property of the component

function mapStateToProps(state) {
    return {
        user: state.userReducer.user
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuContainer));
