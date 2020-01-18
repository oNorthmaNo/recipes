import { categoryConstants } from '../constants/action-types';

const initialState = {
  categories: [],
  isFetching: true,
}

export function CategoriesReducer (state=initialState, action) {
  console.log('hoi hoi', action)
  switch(action.type) {
    case categoryConstants.GETALL_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case categoryConstants.GETALL_SUCCESS:
      return {
        ...state,
        categories: action.categories,
        isFetching: false,
      }
    case categoryConstants.GETALL_FAILURE:
      return {
        ...state,
        isFetching: false,
        categories: []
      }
    default:
      return state
  }
}