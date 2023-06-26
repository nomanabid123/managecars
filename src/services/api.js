import axios from 'axios';
import { store } from '../app/store';
//create an instance of axios
const authApi = axios.create({ baseURL: 'http://localhost:5000' });

//setting the headers for the axios instance
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/hal+json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
};

//intercepting the request and adding the token to the header
authApi.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state?.auth?.token;
    config.headers = {
      ...headers,
      Authorization: 'Bearer ' + token,
    };
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('Unauthorized');
    }
    return Promise.reject(error);
  }
);

//getCategories
const getCategories = async () => {
  const response = await authApi.get('/categories/get');
  return response;
};

//createCategory function
const createCategory = async (category) => {
  const response = await authApi.post('/categories/create', category);
  return response;
};

//updateCategory function
const updateCategory = async (id, name) => {
  const response = await authApi.put('/categories/update', {
    _id: id,
    name,
  });
  return response;
};

//deleteCategory function
const deleteCategory = async (id) => {
  const response = await authApi.delete('/categories/delete', {
    params: {
      _id: id,
    },
  });
  return response;
};

//getCars function
const getCars = async (category) => {
  const response = await authApi.get('/cars/get', {
    params: {
      category,
    },
  });
  return response;
};

//createCar function
const createCar = async (car) => {
  const response = await authApi.post('/cars/create', car);
  return response;
};

//updateCar function
const updateCar = async (car) => {
  const response = await authApi.put('/cars/update', car);
  return response;
};

//deleteCar function
const deleteCar = async (id) => {
  const response = await authApi.delete('/cars/delete', {
    params: {
      _id: id,
    },
  });
  return response;
};

//exporting the functions
export {
  authApi,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCars,
  createCar,
  updateCar,
  deleteCar,
};
