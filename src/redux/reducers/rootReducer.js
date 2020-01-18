import {combineReducers} from 'redux';
import {RecipeListReducer} from './recipes';
import { UserReducer } from './userReducer';
import { AuthenticationReducer } from './authentication';
import { CategoriesReducer } from './categoriesReducer';
import { IngredientsReducer } from './ingredientsReducer';

const rootReducer = combineReducers({
    recipeReducer: RecipeListReducer,
    userReducer: UserReducer,
    authenticationReducer: AuthenticationReducer,
    categoriesReducer: CategoriesReducer,
    ingredientsReducer: IngredientsReducer
})

export default rootReducer;