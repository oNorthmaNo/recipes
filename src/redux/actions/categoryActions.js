import { CategoryApi } from '../../services/categoriesApi';
import  { categoryConstants } from '../constants/action-types';
import history from '../../helpers/history';

export function CreateCategory(category){
  return (dispatch, getState) => {
      return CategoryApi.createCategory(category).then(res => {
          dispatch(CreateCategorySuccess(res.data.data));
          history.push('/');
      }, error => {
        dispatch(CreateCategoryFaillure(error))
      });
  }
}

export function CreateCategorySuccess(category){
  return {
      type: categoryConstants.CREATE_CATEGORY_SUCCESS,
      category
  }
}

export function CreateUserFaillure(error) {
  return {
    type: categoryConstants.CREATE_CATEGORY_ERROR,
    error,
  }
}

//Read
export function GetCategories(){
  return (dispatch, getState) => {
      return CategoryApi.getCategories().then(res => {
          dispatch(GetCategoriesSuccess(res.data))
      })
  }
}

export function GetCategoriesSuccess(categories) {
  return {
      type:categoryConstants.GETALL_SUCCESS,
      categories
  }
}
