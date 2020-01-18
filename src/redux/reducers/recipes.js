const initialState = {
  recipes: [],
  recipe: {},
  isFetching: false,
}

export function RecipeListReducer (state=initialState, action) {
  switch(action.type) {
    case 'REQUEST_RECIPE':
      return {
        ...state,
        isFetching: true,
      }
    case 'GET_RECIPES_SUCCESS':
      return {
        ...state,
        recipes: action.recipes
      }
    case 'GET_DAILY_RECIPE_SUCCESS':
      return {
        ...state,
        isFetching: false,
        recipes: action.recipes
    }
    case 'GET_DAILY_RECIPE_FAILLURE':
      return {
        ...state,
        isFetching: false,
        recipes: []
      }
    case 'GET_RECIPE_SUCCESS':
      return {
        ...state,
        recipe: action.recipe
    }
    case 'RESET_RECIPE_STATE':
      return initialState;
    default:
      return state
  }
}