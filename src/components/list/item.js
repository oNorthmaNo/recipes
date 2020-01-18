import React , { Component } from 'react';
import { Rating } from '../rating/rating';
import './item.scss';

class ListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const navigateEvent = this.props.navigateEvent;
        return (
        <li className="daily-recipe-list__item"  onClick={() => navigateEvent(this.props.recipe)}>
            <img className="daily-recipe-list__image" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"/>
            <div className="daily-recipe-list__body">
                <span className="daily-recipe-list__title">{this.props.recipe.title}</span>
                <div className="daily-recipe__card__content">
                    <p>
                        {this.props.recipe.description}  
                    </p> 
                </div>
                <div className="daily-recipe-list__footer">
                    <div>
                        <span className="daily-recipe__time">{this.props.recipe.preperationTime}</span>
                        <span className="daily-recipe__minutes">Minutes</span>
                    </div>
                    <Rating></Rating>
                </div>
            </div>
        </li>
    )
    }
}

export { ListItem };