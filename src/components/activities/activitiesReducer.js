import {
  REQUEST_ACTIVITIES,
  RECEIVE_ACTIVITIES,
  REQUEST_ACTIVITIES_FAILED 
} from './activityActions';

import initialState from '../../store/initialState';

const activitiesReducer = (state = initialState.activities, action) => {
  switch(action.type) {
  case REQUEST_ACTIVITIES:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };

  case REQUEST_ACTIVITIES_FAILED:
    return {
      ...state,
      isFetching: false
    };

  case RECEIVE_ACTIVITIES:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.activities,
      lastUpdated: action.receivedAt
    };

  default:
    return state;
  }
};

export default activitiesReducer;
