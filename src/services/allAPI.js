import axios from "axios";

const serverURL = "https://ems-server-i3td.onrender.com";

// get all users api : called by dashboard component when it opens
export const getAllUsersAPI = async () => {
  return await axios.get(`${serverURL}/users`);
};
// add user api : called by manage component when add button is pressed
export const addUserAPI = async (userData) => {
  return await axios.post(`${serverURL}/add`, userData);
};
// edit user api : called by manage component when edit button is pressed
export const editUserAPI = async (userId, userData) => {
  return await axios.put(`${serverURL}/users/${userId}`, userData);
};
// delete user api : called by dashboard component when delete button is pressed
export const deleteUserAPI = async (userId) => {
  return await axios.delete(`${serverURL}/users/${userId}`);
};
