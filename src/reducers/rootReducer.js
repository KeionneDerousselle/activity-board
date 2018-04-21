import { combineReducers } from 'redux';
import { activitiesReducer } from '../components/activities';
import { tagsReducer } from '../components/tags';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  tags: tagsReducer
});

export default rootReducer;
