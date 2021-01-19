import axios from 'axios';

const signIn = (email, password) => axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
  email,
  password,
});

const signUp = (email, fullName, password) => axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
  email,
  fullName,
  password,
});
export default {
  signIn,
  signUp,
};
