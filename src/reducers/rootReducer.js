import { combineReducers } from 'redux';
import { activityFilters, activities } from '../components/activities';
import { tagsReducer } from '../components/tags';

const rootReducer = combineReducers({
  activities,
  activityFilters,
  tags: tagsReducer
});

export default rootReducer;
