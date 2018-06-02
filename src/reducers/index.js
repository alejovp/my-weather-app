import { combineReducers } from 'redux';
import WeatherReduecer from './weather';

const rootReducer = combineReducers({
  weather: WeatherReduecer
});

export default rootReducer;
