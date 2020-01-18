import React, { Component } from 'react';
import * as RecipesActions from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import DailyRecipe from '../components/dailyrecipe/daily-recipe';

export class DailyRecipeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.getDailyRecipe();
    }

    componentWillUnmount = () => {
       this.props.actions.ResetState();
    }

    //READ
    getDailyRecipe = () => {
        this.props.actions.GetDailyRecipe();
    }

    render() {
        const { isFetching, recipes, actions} = this.props;
        return (
            <DailyRecipe isFetching={isFetching} recipes={recipes} actions={actions} />
        );
    }
}

// Define the property types of this Container Component

DailyRecipeContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    recipes: PropTypes.array,
    isFetching: PropTypes.bool.isRequired
}

// This maps the state to the property of the component

const mapStateToProps = (state) => {
    return {
        recipes: state.recipeReducer.recipes,
        isFetching: state.recipeReducer.isFetching
    }
}

// This maps the dispatch to the property of the component

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(RecipesActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DailyRecipeContainer);