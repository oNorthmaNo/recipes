import React , { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Rating } from '../rating/rating';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        recipe: PropTypes.object.isRequired,
        navigateEvent: PropTypes.func.isRequired,
      };

    render() {
        const { recipe, navigateEvent } = this.props;
        return (
        <div className="daily-recipe__card" onClick={() => navigateEvent(recipe)}>
            <div className="daily-recipe__card__header">
                <img className="daily-recipe__card__image" src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"/>
                <span className="daily-recipe__card__title">{recipe.title}</span>
                <span className="daily-recipe__favorite"></span>
            </div>
            <div className="daily-recipe__card__content">
                <p>
                    {recipe.description}  
                </p>
            </div>
            <div className="daily-recipe__card__footer">
                <div className="daily-recipe__time-container">
                    <span className="daily-recipe__time">{recipe.preperationTime}</span>
                    <span className="daily-recipe__minutes">Minutes</span>
                </div>
                <div className="daily-recipe__card__icons">
                    <Rating></Rating>
                </div>
            </div>
        </div>
    )
    }
}

export default withRouter(Card);