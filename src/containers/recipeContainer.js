import React, { Component } from 'react';
import * as RecipesActions from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RecipesOverview from '../components/overview/recipesOverview';
import RecipeDetails from '../components/recipe-details/recipe-details';
import history from '../helpers/history';

export class RecipeContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        const {location: { pathname}} = history;
        const recipeId = pathname.split('/').pop();
        if (this.props.showDetail && recipeId) {
            this.getRecipeDetails(recipeId);
        }
    }

    //Create
    createRecipe = (recipe) => {
        this.props.actions.createRecipe(recipe)
    }

    getRecipeDetails = (recipeId) => {
        this.props.actions.GetRecipeDetails(recipeId);
    }

    //Delete
    deleteRecipe = (recipe) => {
        this.props.actions.deleteRecipe(recipe)
    }

    render() {
        return (
            <React.Fragment>
                {this.props.showDetail ? (
                    <RecipeDetails recipe={this.props.recipe} />
                ) : 
                (<div className="recipe-container">
                    <RecipesOverview
                        recipes={this.props.recipes}
                    />
                </div>)}
            </React.Fragment>
        );
    }
}

// Define the property types of this Container Component

RecipeContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    recipes: PropTypes.array,
    recipe: PropTypes.object,
    showDetail: PropTypes.bool
}

// This maps the state to the property of the component

function mapStateToProps(state) {
    return {
        recipes: state.recipeReducer.recipes,
        recipe: state.recipeReducer.recipe,
    }
}

// This maps the dispatch to the property of the component

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(RecipesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeContainer);