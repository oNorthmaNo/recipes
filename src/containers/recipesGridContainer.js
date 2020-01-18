import React, { Component } from 'react';
import * as CategoryActions from '../redux/actions/categoryActions';
import * as RecipesActions from '../redux/actions/actions';
import * as IngredientActions from '../redux/actions/ingredientActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RecipesGrid from '../components/recipes-grid/recipes-grid';
import CategoriesGrid from '../components/categories-grid/categories-grid';
import Header from '../components/header/header';
import { Jumbotron } from '../components/jumbotron/jumbotron';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import { withRouter, Route, useParams, Switch } from 'react-router-dom';

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { category } = useParams();

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
}


export class RecipesGridContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchValue: '',
      categories: [],
      ingredients: [],
      nav: true,
      selectedCategories: [],
      selectedIngredients: [],
    };
  }

  componentDidMount = () => {
    console.log('component did mount');
    this.getAllCategories();
    this.getAllIngredients();
  }

  // static getDerivedStateFromProps = (nextProps, prevstate) => {
  //   console.log(prevstate, nextProps.history);
  //   const { recipes } = nextProps;
  //   if (recipes && recipes.length && recipes[0] && recipes[0].category && prevstate.nav) {
  //     const { recipes, history } = nextProps;
  //     const { url } = nextProps.match;
  //     const category = recipes[0].category.name;
  //     const navToCategory = recipes.every(recipe => recipe.category.name === category);
  //     if (navToCategory) {
  //       console.log('push event!');
  //       // history.push(`${url}/${category}`);
  //       return { nav: false }
  //     }
  //   } 
  //   return null;
    
  // }

  // handleBreadcrumb = () => {
  //   if (recipes || !!recipes.length) {
  //     items.push( {
  //       label: 'Recipes',
  //       action: () => {}
  //     });
  //   } 
  // }

  //READ
  getAllCategories = () => {
    this.props.actions.GetCategories();
  }

  getAllIngredients = () => {
    this.props.ingredientActions.GetIngredients();
  }

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  searchCallback = () => {
    if (!this.state || typeof this.state.searchValue === 'undefined') {return;}
    this.props.recipeActions.SearchRecipe(this.state);
  }

  createCollection = collection => {
    return collection && collection.map(item => ({ label: item.name, value: item.name}));
  }

  handleCategories = selectedOption => {
    selectedOption = selectedOption ? selectedOption.map(option => option.value): selectedOption;
    this.setState({ categories: selectedOption }); 
  };

  handleIngredients = selectedOption => {
    selectedOption = selectedOption ? selectedOption.map(option => option.value): selectedOption;
    this.setState({ ingredients: selectedOption }); 
  };

  updateHeaderTitle = () => {
    return (!this.props.recipes || !this.props.recipes.length) ? 'Categories' : 'Recipes';
  };

  categorySelected = (category) => {
    const { path } = this.props.match;
    this.state.categories.push(category)
    this.setState(
      { 
        categories: this.state.categories,
        selectedCategories: [{ label: category, value: category}]
      }
    ); 
    this.props.recipeActions.SearchRecipe(this.state);
    this.props.history.push(`${path}/${category}`);
  }

    render() {
      const { isFetching, categories, actions, ingredients, isFetchingIngredients, recipes, recipeActions } = this.props;
      const { searchValue } = this.state;
      const items = [];
      const { path } = this.props.match;
        return (
            <React.Fragment>
              <Breadcrumb>
                {items.map(({ action, label }) => (
                  <button onClick={action} className="button-link">{label}</button>
                ))}
              </Breadcrumb>
              {
                !isFetching && !isFetchingIngredients && 
                <Jumbotron 
                  searchValue={searchValue}
                  handleSearch={this.handleSearch}
                  searchAction={this.searchCallback} 
                  searchOptions={[
                  {
                    action: this.handleCategories,
                    label: 'categories',
                    collection: this.createCollection(categories),
                    value: this.state.selectedCategories
                  },
                  {
                    action: this.handleIngredients,
                    label: 'ingredients',
                    collection: this.createCollection(ingredients),
                    value: this.state.selectedIngredients
                  }
                  ]}></Jumbotron>
              }
              <Route path={`${path}`} exact>
                {!recipes || !recipes.length ? (
                <React.Fragment>
                  <Header isHidden={true} title={'Categories'}></Header>
                  <CategoriesGrid 
                      isFetching={isFetching}
                      categories={categories}
                      actions={actions}
                      categorySelected={this.categorySelected}
                  ></CategoriesGrid>
                </React.Fragment>
                ) : (
                  <React.Fragment>
                  <Header isHidden={true} title={'Recipes'}></Header>
                  <RecipesGrid 
                      isFetching={isFetching}
                      actions={recipeActions}
                      recipes={recipes}
                  ></RecipesGrid>
                  </React.Fragment>
                )}
              </Route>
              <Route path={`${path}/:category`}>
                <Header isHidden={true} title={'Recipes'}></Header>
                <RecipesGrid 
                    isFetching={isFetching}
                    actions={recipeActions}
                    recipes={recipes}
                ></RecipesGrid>
              </Route>
            </React.Fragment>
        );
    }
}

// Define the property types of this Container Component
RecipesGridContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    categories: PropTypes.array,
    ingredients: PropTypes.array,
    isFetching: PropTypes.bool,
    isFetchingIngredients: PropTypes.bool,
}

// This maps the state to the property of the component
function mapStateToProps(state) {
    return {
      categories: state.categoriesReducer.categories,
      ingredients: state.ingredientsReducer.ingredients,
      isFetching: state.categoriesReducer.isFetching,
      isFetchingIngredients: state.ingredientsReducer.isFetchingIngredients,
      recipes: state.recipeReducer.recipes
    }
}

// This maps the dispatch to the property of the component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CategoryActions, dispatch),
        ingredientActions: bindActionCreators(IngredientActions, dispatch),
        recipeActions: bindActionCreators(RecipesActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RecipesGridContainer));