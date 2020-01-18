import React , { Component } from 'react';
import './dropdown.scss';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    static propTypes = {
      placeholder: PropTypes.object.isRequired,
      options: PropTypes.array.isRequired,
      parentOutput: PropTypes.func.isRequired,
      // onClick: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props)

      this.state = {
        active: false,
      }
    }

    dropdownState = () => {
      if (this.state.active) {
        return 'dropdown__focus'
      } else {
        return '';
      }
    }

    handleChange = (event) => {
      this.props.parentOutput(event.target.value);
    }

    updateDropdownState = (event) => {
      this.setState({active: !this.state.active});
    }

    componentDidMount = () => {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  
    componentWillUnmount = () => {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  
    handleClickOutside = (event) => {
      if (this.dropdownRef && !this.dropdownRef.contains(event.target) && this.state.active) {
        this.updateDropdownState();
      }
    }

    setRef = (node) => {
      this.dropdownRef = node;
    }
    

    render() {
      const { placeholder, options } = this.props;
        return (
        <React.Fragment>
          <select ref={this.setRef} onChange={this.handleChange} className={`dropdown ${this.dropdownState()}`} id="select-dropdown" onClick={() => this.updateDropdownState()}>
            <option value={placeholder.value}>{placeholder.label}</option>
            {options.map((option, key) => {
              return (
                <option key={key} value={option.value}>{option.label}</option>
              )
            })}
          </select>
        </React.Fragment>
    )
    }
}

export { Dropdown };