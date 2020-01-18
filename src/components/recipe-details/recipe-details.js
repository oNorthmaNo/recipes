import React , { Component } from 'react';
import './recipe-details.scss';
import { withRouter } from 'react-router-dom'
import { Rating } from '../rating/rating';
class RecipeDetails extends Component {

    constructor(props) {
        super(props)
    }

    
    goToDetailPage = (recipe) => {
        this.props.history.push(`/details/${recipe.recipe_id}`);
    }

    render() {
        const recept = this.props.recipe;
        return (
        <section>
          <article className="recipe-details">
            <header>
            <nav>
              <p className="recipe-details__breadcrumb">
                <a onClick={this.props.history.goBack} className="recipe-details__link">Overzicht</a>
              </p>
            </nav>
              <h1 className="h1 recipe-details__title">{recept.title}</h1>
            </header>
            <div className="recipe-details__subTitle">
              <Rating></Rating>
              <div className="recipe-details__difficulty"><span>Makkelijk</span></div>
              <span className="recipe-details__favorite">Bewaar</span>
            </div>
            <div className="recipe-details__content">
              <div className="recipe-details__ingredients">
                <h2 className="h2">Ingredienten</h2>
              </div>
            </div>
          </article>
        </section>
        )
    }
}

export default withRouter(RecipeDetails);