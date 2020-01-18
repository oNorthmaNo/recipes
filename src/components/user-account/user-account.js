import React, { Component } from 'react';
import './user-account.scss';
import { PropTypes } from 'prop-types';

class UserAccountClass extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            action: PropTypes.func,
        }))
    }

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            selectedOption: null,
            openDropdown: false,
        };
    }


    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    handleDropdown = () => {
        this.setState({
            openDropdown: !this.state.openDropdown
        })
    }
    
   render() {
    const { selectedOption, openDropdown } = this.state;
    const {user, options} = this.props;

       return (
        <div className="user-account__dropdown">
            <a className="user-account__dropdown__trigger" onClick={() => this.handleDropdown()}>
                <span><i className="icon-user"></i>{user.username}</span>
            </a>
            {openDropdown && 
            <ul className="user-account__dropdown__content">
                {options.map((option, index) => {
                    return <li onClick={ () => option.action()} key={index}>{option.label}</li>
                })}
            </ul>
            }
        </div>
    )};
}

export const UserAccount = UserAccountClass;
