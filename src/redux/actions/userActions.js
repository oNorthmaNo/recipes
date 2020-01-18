import { UserApi } from "../../services/userApi";
import  { userConstants } from '../constants/action-types';
import history from '../../helpers/history';

export function CreateUser(user){
  return (dispatch, getState) => {
    debugger;
      return UserApi.registerUser(user).then(res => {
          dispatch(CreateUserSuccess(res.data.data));
          dispatch(LoginUser(user));
      }, error => {
        dispatch(CreateUserFaillure(error))
      });
  }
}

export function CreateUserSuccess(user){
  return {
      type: userConstants.REGISTER_SUCCESS,
      user
  }
}

export function CreateUserFaillure(error) {
  return {
    type: userConstants.REGISTER_FAILURE,
    error,
  }
}

export function LoginUser(user) {
  return (dispatch, getState) => {
    return UserApi.loginUser(user).then(res => {
        dispatch(LoginUserSuccess(res.data));
        history.push('/');
    }, error => {
      dispatch(LoginUserFaillure(error))
    });
  }
}

export function LoginUserSuccess(user){
  return {
      type: userConstants.LOGIN_SUCCESS,
      user
  }
}

export function LoginUserFaillure(error) {
  return {
    type: userConstants.LOGIN_FAILURE,
    error,
  }
}

export function logout() {
  UserApi.logoutUser();
  return { type: userConstants.LOGOUT };
}


//Read
export function GetUser(){
  return (dispatch, getState) => {
      return UserApi.getUser().then(res => {
          dispatch(GetUserSuccess(res.data))
      })
  }
}

export function GetUserSuccess(user) {
  return {
      type:userConstants.GET_USER_SUCCESS,
      user
  }
}
