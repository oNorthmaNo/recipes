import {HttpClient} from './httpClient';
import {API_CONSTANTS} from '../constants/api.constants';
//Setting the todos URI

const INGREDIENTS_API = `${API_CONSTANTS.apiUrl}/ingredients`

//Create
const createIngredient = ingredient => {
    return HttpClient.post(CATEGORIES_API, ingredient);
}

//Read
const getIngredients = () => {
    return HttpClient.get(INGREDIENTS_API);
}

//Delete
const removeIngredient = ingredient => {
    return HttpClient.delete(`${INGREDIENTS_API}/${ingredient._id}`);
}

//Encapsulating in a JSON object

const IngredientApi = {createIngredient, getIngredients, removeIngredient}

export { IngredientApi }