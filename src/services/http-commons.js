import axios from 'axios';
const url = 'https://dicodiaz-proyecto-final-be.herokuapp.com';

export default axios.create({
  baseURL: url,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  }
});
