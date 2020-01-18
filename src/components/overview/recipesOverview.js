import React from 'react';
import './recipesOverview.scss';

const RecipesOverview = (props) => {
    return (
        <ul className="detail-selector">
        {props.recipes.map((recipe) => (
            <li className="detail-selector__item" key={recipe.recipe_id}>
                <span className="detail-selector__title">{recipe.title}</span>
                <span className="detail-selector__description">{recipe.description}</span>
                <span className="detail-selector__description">{recipe.preperationTime}</span>
                <h4>Ingredients:</h4>
                <ul className="detail-selector__inner-list">
                    {recipe.ingredients.map((ingredient) => (
                        <li className="detail-selector__item" key={ingredient.ingredient_id}>
                            <span className="detail-selector__description">{ingredient.name}</span>
                        </li>
                    ))}
                </ul>
            </li>
        ))}
        </ul>
    );
}

export default RecipesOverview;