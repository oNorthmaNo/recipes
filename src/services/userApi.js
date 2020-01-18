import {HttpClient} from './httpClient';
import {API_CONSTANTS} from '../constants/api.constants';

//Setting the URI

const USER_API = `${API_CONSTANTS.apiUrl}/users`;

//Create
const registerUser = user => {
    return HttpClient.post(`${USER_API}/register`, user);
}

const loginUser = (user) => {
    return HttpClient.post(`${USER_API}/authenticate`, user)
        .then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data;
        });
}

const logoutUser = () => {
    localStorage.removeItem('user');
}

//Read
const getUser = () => {
    return HttpClient.get(USER_API);
}


//Update
const updateUser = user => {
    return HttpClient.patch(USER_API, user);
}

//Delete
const removeUser = user => {
    return HttpClient.delete(`${USER_API}/${user._id}`);
}

//Encapsulating in a JSON object

const UserApi = {registerUser, loginUser, logoutUser, getUser, updateUser, removeUser}

export { UserApi }