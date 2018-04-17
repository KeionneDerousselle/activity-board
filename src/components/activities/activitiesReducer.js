import {
  REQUEST_ACTIVITIES,
  RECEIVE_ACTIVITIES,
  REQUEST_ACTIVITIES_FAILED, 
  CREATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_SUCCESS
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

  case CREATE_ACTIVITY_SUCCESS:
    return [...state, action.activity];
  
  case UPDATE_ACTIVITY_SUCCESS: {
    const stateCopy = {...state};
    const activities = [...stateCopy.items];

    const existingActivityIndex = activities.findIndex(a => a.id === action.activity.id);
    activities.splice(existingActivityIndex, 1, action.activity);
    
    return {
      ...stateCopy,
      items: activities
    };
  }

  default:
    return state;
  }
};

export default activitiesReducer;
