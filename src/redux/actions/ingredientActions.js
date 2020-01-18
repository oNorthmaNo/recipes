import { IngredientApi } from '../../services/ingredientsApi';
import  { ingredientConstants } from '../constants/action-types';
import history from '../../helpers/history';

export function CreateIngredient(ingredient){
  return (dispatch, getState) => {
      return IngredientApi.createIngredient(ingredient).then(res => {
          dispatch(CreateIngredientSuccess(res.data.data));
          history.push('/');
      }, error => {
        dispatch(CreateIngredientFailure(error))
      });
  }
}

export function CreateIngredientSuccess(ingredient){
  return {
      type: ingredientConstants.CREATE_INGREDIENT_SUCCESS,
      ingredient
  }
}

export function CreateIngredientFailure(error) {
  return {
    type: ingredientConstants.CREATE_INGREDIENT_ERROR,
    error,
  }
}

//Read
export function GetIngredients() {
  return (dispatch, getState) => {
      return IngredientApi.getIngredients().then(res => {
          dispatch(GetIngredientsSuccess(res.data))
      })
  }
}

export function GetIngredientsSuccess(ingredients) {
  return {
      type:ingredientConstants.GETALL_SUCCESS,
      ingredients
  }
}
