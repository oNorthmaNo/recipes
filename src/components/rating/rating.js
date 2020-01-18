import React , { Component } from 'react';
import './rating.scss';
import '../../styles/icons/icons.scss';

class Rating extends Component {
    state = {
        readOnly: this.props.readOnly,
        rate: this.props.rating
    }
    
    constructor(props) {
        super(props);
    }

    update = param => event => {
        event.stopPropagation();
        if (this.readOnly) {
            return;
        }
        this.setState({rate: param});    
    }

    active(item) {
        let modifier = '';
        if (item <= this.state.rate) {
            modifier = '-filled'
        }
        return modifier;
    }

    setReadOnly(newVal) {
        this.readOnly = newVal;
    }
    
    render() {
        const items = [1, 2, 3, 4, 5];
        return (
            <div className="rating">
                {items.map((item, key) => {
                    return <span onClick={this.update(item)} key={key}>
                        <i className={`icon-chef${this.active(item)}`}></i>
                    </span>
                })}
             </div>
        )
    }
}

export { Rating };