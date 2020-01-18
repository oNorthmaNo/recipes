import {HttpClient} from './httpClient';
import {API_CONSTANTS} from '../constants/api.constants';

//Setting the todos URI

const CATEGORIES_API = `${API_CONSTANTS.apiUrl}/categories`

//Create
const createCategory = category => {
    return HttpClient.post(CATEGORIES_API, recipe);
}

//Read
const getCategories = () => {
    return HttpClient.get(CATEGORIES_API);
}

//Delete
const removeCategory = category => {
    return HttpClient.delete(`${CATEGORIES_API}/${category._id}`);
}

//Encapsulating in a JSON object

const CategoryApi = {createCategory, getCategories, removeCategory}

export { CategoryApi }