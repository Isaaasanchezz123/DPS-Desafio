//En esta parte del proyecto es la tienda 
import { createStore } from 'redux';
import parkingReducer from './reducers';

const configureStore = () => {
  return createStore(parkingReducer);
};

const store = configureStore();

export default store;