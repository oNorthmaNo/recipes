import { RecipeApi } from "../../services/recipesApi";
import { recipesConstants } from '../constants/action-types';

export function CreateRecipe(recipe){
  return (dispatch, getState) => {
      return RecipeApi.createRecipe(recipe).then(res => {
          dispatch(CreateRecipeSuccess(res.data.data))
      })
  }
}

export function CreateRecipeSuccess(recipe){
  return {
      type:recipesConstants.CREATE_RECIPE_SUCCESS,
      recipe
  }
}

export const requestRecipes = () => ({
  type: recipesConstants.REQUEST_RECIPE,
});

//Read
export function GetRecipes(){
  return (dispatch, getState) => {
      return RecipeApi.getRecipes().then(res => {
          dispatch(GetRecipesSuccess(res.data))
      }, error => {

      })
  }
}

export function GetRecipesSuccess(recipes) {
  return {
      type:recipesConstants.GET_RECIPES_SUCCESS,
      recipes
  }
}

export const GetDailyRecipe = () => {
  return (dispatch, getState) => {
    dispatch(requestRecipes())
      return RecipeApi.getDailyRecipe().then(res => {
          dispatch(GetDailyRecipeSuccess(res.data))
      }, error => {
        dispatch(GetDailyRecipeFaillure())
      });
  }
}

export function GetDailyRecipeSuccess(recipes) {
  return {
      type:recipesConstants.GET_DAILY_RECIPE_SUCCESS,
      recipes
  }
}

export function GetDailyRecipeFaillure() {
  return {
      type:recipesConstants.GET_DAILY_RECIPE_FAILLURE,
  }
}

export function GetRecipeDetails(id){
  return (dispatch, getState) => {
      return RecipeApi.getRecipeDetails(id).then(res => {
          dispatch(GetRecipeSuccess(res.data))
      }, error => {

      })
  }
}
export function SearchRecipe(searchObject){
  return (dispatch, getState) => {
      return RecipeApi.searchRecipe(searchObject).then(res => {
        dispatch(GetRecipesSuccess(res.data))
      }, () => {
        dispatch(GetRecipesFailure())
      })
  }
}

export function GetRecipeSuccess(recipe){
  return {
      type:recipesConstants.GET_RECIPE_SUCCESS,
      recipe
  }
}

export function GetRecipeFailure(){
  return {
      type:recipesConstants.GetRecipesFailure,
  }
}

export function ResetState() {
  return { 
    type: 'RESET_RECIPE_STATE'
  }
}
