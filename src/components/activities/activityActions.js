
import ActivityApi from '../../api/mockActivityApi';

export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES';
export const requestActivities = () => ({
  type: REQUEST_ACTIVITIES
});

export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const receiveActivities = activities => ({
  type: RECEIVE_ACTIVITIES,
  activities: activities,
  receivedAt: Date.now()
});

export const REQUEST_ACTIVITIES_FAILED = 'REQUEST_ACTIVITIES_FAILED';
export const requestForActivitiesFailed = error => ({
  type: REQUEST_ACTIVITIES_FAILED,
  error
});

export const fetchActivities = () =>
  dispatch => {
    dispatch(requestActivities());
    
    return ActivityApi.getAllActivities()
      .then(activities => dispatch(receiveActivities(activities)))
      .catch(error => {
        dispatch(requestForActivitiesFailed(error));
        throw error;
      });
  };

const shouldFetchActivities = activities => {
  if(activities.isFetching) {
    return false;
  }

  if(!activities.items || activities.items.length === 0) {
    return true;
  }
  
  return activities.didInvalidate;
};

export const fetchActivitiesIfNeeded = () =>
  (dispatch, getState) => {
    if(shouldFetchActivities(getState().activities)) {
      return dispatch(fetchActivities());
    }
  };
