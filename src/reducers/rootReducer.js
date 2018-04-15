import { combineReducers } from 'redux';
import { activitiesReducer } from '../components/activities';

const rootReducer = combineReducers({
  activities: activitiesReducer
});

export default rootReducer;
