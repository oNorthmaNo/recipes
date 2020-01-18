const initialState = {
    user: {}
  }
  
  export function UserReducer (state=initialState, action) {
      switch(action.type) {
        case 'LOAD_USER':
        return {
            ...state,
            user: action.user
        }
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                user: action.user
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: action.user
            }
        default:
        return state
    }
  }
