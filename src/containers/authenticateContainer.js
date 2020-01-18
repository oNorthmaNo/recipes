import React, { Component } from 'react';
import * as UserActions from '../redux/actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { LoginCard } from '../components/login-card/login-card';

export class AuthenticateContainer extends Component {
    // Define the property types of this Container Component
    static propTypes = {
        actions: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    //Create
    createUser = (user) => {
        this.props.actions.createUser(user)
    }

    //Delete
    deleteUser = (user) => {
        this.props.actions.deleteUser(user)
    }

    render() {
        return (
            <LoginCard user={this.props.user} />
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
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer);
