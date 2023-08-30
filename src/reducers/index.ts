import { combineReducers } from 'redux';
// import sampleReducer from "./sample"; // Удалите этот импорт
import itemsReducer from './productData'; // Импортируйте itemsReducer

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
