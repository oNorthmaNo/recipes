import { ingredientConstants } from '../constants/action-types';

const initialState = {
  ingredients: [],
  isFetchingIngredients: true,
}

export function IngredientsReducer (state=initialState, action) {
  switch(action.type) {
    case ingredientConstants.GETALL_REQUEST:
      return {
        ...state,
        isFetchingIngredients: true,
      }
    case ingredientConstants.GETALL_SUCCESS:
      return {
        ...state,
        ingredients: action.ingredients,
        isFetchingIngredients: false,
      }
    case ingredientConstants.GETALL_FAILURE:
      return {
        ...state,
        ingredients: [],
        isFetchingIngredients: false,
      }
    default:
      return state
  }
}