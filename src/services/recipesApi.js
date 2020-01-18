import {HttpClient} from './httpClient';
import {API_CONSTANTS} from '../constants/api.constants';

//Setting the todos URI

const RECIPES_API = `${API_CONSTANTS.apiUrl}/recipes`

//Create
const createRecipe = recipe => {
    return HttpClient.post(RECIPES_API, recipe);
}

//Read
const getRecipes = () => {
    return HttpClient.get(RECIPES_API);
}

const getRecipeDetails = (id) => {
    return HttpClient.get(`${RECIPES_API}/${id}`)
}

//Read
const getDailyRecipe = () => {
    return HttpClient.get(`${RECIPES_API}/daily-recipe`);
}

//Update
const updateRecipe = recipe => {
    return HttpClient.patch(RECIPES_API, recipe);
}

//Delete
const removeRecipe = recipe => {
    return HttpClient.delete(`${RECIPES_API}/${recipe._id}`);
}

const searchRecipe = (searchObject) => {
    let searchQuery;
    if(searchObject.searchValue) {
      searchQuery = `filter=${searchObject.searchValue}`;
    }

    if (searchObject.categories && !!searchObject.categories.length) {
        searchQuery = `${searchQuery}&categories=${searchObject.categories.join(',')}`
    }

    if (searchObject.ingredients && !!searchObject.ingredients.length) {
        searchQuery = `${searchQuery}&ingredients=${searchObject.ingredients.join(',')}`
    }

    return HttpClient.get(`${RECIPES_API}?${searchQuery}`)
}

//Encapsulating in a JSON object

const RecipeApi = {createRecipe, getRecipes, updateRecipe, removeRecipe, getDailyRecipe, getRecipeDetails, searchRecipe}

export { RecipeApi }