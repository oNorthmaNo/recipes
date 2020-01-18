import React , { Component } from 'react';
import './login-card.scss';
import { Logo } from '../logo/logo';
import { Tabs } from '../tabs/tabs';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import history from '../../helpers/history';

class LoginCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            submitted: false,
            activeTab: 'Login'
        };

        this.props.dispatch(userActions.logout());
    }

    componentWillMount() {
        const {location: { pathname}} = history;

        this.setState({
            activeTab: pathname.slice(1)
        })
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e, login = false) => {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;

        
        if (username && password) {
            if (login) {
                dispatch(userActions.LoginUser({username, password}));
            } else {
                dispatch(userActions.CreateUser({username, password}));
            }
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, email, submitted, activeTab } = this.state;
        return (
            <div className="card">
                <div className="card__header">
                    <div className="login__logo">
                        <Logo></Logo>
                    </div>
                </div>
                <div className="card__content">
                    <Tabs activeTab={activeTab}>
                        <div label="login">
                            <form className="login__form" onSubmit={(e) => this.handleSubmit(e, true)}>
                                <fieldset className="login__fieldset">
                                    <div className="login__input-field">
                                        <label className="login__label">Username:</label>
                                        <input className="login__input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
                                    </div>
                                    <div className="login__input-field">
                                        <label className="login__label">Password:</label>
                                        <input className="login__input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
                                    </div>
                                </fieldset>
                                <div className="login__button-container">
                                    <button type="submit" className="button login__button">Login</button>
                                </div>
                            </form>
                            <div className="card__footer">
                                <button className="card__footer__link">Forgot your username?</button>
                                <button className="card__footer__link">Forgot your password?</button>
                            </div>
                        </div>
                        <div label="signup">
                            <form className="login__form" onSubmit={(e) => this.handleSubmit(e, false)}>
                                <fieldset className="login__fieldset">
                                    <div className="login__input-field">
                                        <label className="login__label">Username:</label>
                                        <input className="login__input" type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
                                    </div>
                                    <div className="login__input-field">
                                        <label className="login__label">Password:</label>
                                        <input className="login__input" type="password" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
                                    </div>
                                    <div className="login__input-field">
                                        <label className="login__label">Email:</label>
                                        <input className="login__input" type="text" name="email" value={email} onChange={this.handleChange} placeholder="email"/>
                                    </div>
                                </fieldset>
                                <div className="login__button-container">
                                    <button type="submit" className="button login__button">Signup</button>
                                </div>
                            </form>
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authenticationReducer;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginCard);
export { connectedLoginPage as LoginCard }; 