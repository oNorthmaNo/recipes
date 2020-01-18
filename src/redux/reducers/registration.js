import { userConstants } from '../constants/action-types';
  
  export function RegistrationReducer (state=initialState, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
          return { registering: true };
        case userConstants.REGISTER_SUCCESS:
          return {};
        case userConstants.REGISTER_FAILURE:
          return {};
        default:
          return state
    }
  }
