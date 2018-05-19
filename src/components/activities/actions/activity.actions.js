
import { ActivityApi } from '../../../api';

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
  if (activities.isFetching) {
    return false;
  }

  if (!activities.items || activities.items.length === 0) {
    return true;
  }

  return activities.didInvalidate;
};

export const fetchActivitiesIfNeeded = () =>
  (dispatch, getState) => {
    if (shouldFetchActivities(getState().activities)) {
      return dispatch(fetchActivities());
    }
  };

export const REQUEST_SAVE_ACTIVITY = 'REQUEST_SAVE_ACTIVITY';
export const requestSaveActivity = () => ({
  type: REQUEST_SAVE_ACTIVITY
});

export const CREATE_ACTIVITY_SUCCESS = 'CREATE_ACTIVITY_SUCCESS';
export const createActivitySuccess = activity => ({
  type: CREATE_ACTIVITY_SUCCESS,
  activity
});

export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS';
export const updateActivitySuccess = activity => ({
  type: UPDATE_ACTIVITY_SUCCESS,
  activity
});

export const REQUEST_SAVE_ACTIVITY_FAILED = 'REQUEST_SAVE_ACTIVITY_FAILED';
export const requestSaveActivityFailed = error => ({
  type: REQUEST_SAVE_ACTIVITY_FAILED,
  error
});

export const saveActivity = activity =>
  async dispatch => {
    try {
      dispatch(requestSaveActivity());
      if (activity.id) {
        await putActivity(activity, dispatch);
      } else {
        await postActivity(activity, dispatch);
      }
    } catch (error) {
      throw error;
    }
  };

// TODO: Create a reducer factory
const postActivity = async(activity, dispatch) => {
  try {
    const response = await ActivityApi.postActivity(activity);
    switch (true) {
      case response.status >= 200 && response.status < 300:
        dispatch(createActivitySuccess(response.data));
        break;
      case response.status >= 300 && response.status < 500:
        // dispatch bad request
        break;
      default:
        dispatch(requestSaveActivityFailed(response));
        break;
    }
  } catch (error) {
    throw error;
  }
};

const putActivity = async(activity, dispatch) => {
  try {
    const response = await ActivityApi.putActivity(activity);
    switch (true) {
      case response.status >= 200 && response.status < 300:
        dispatch(updateActivitySuccess(response.data));
        break;
      case response.status >= 300 && response.status < 500:
        // dispatch bad request
        break;
      default:
        dispatch(requestSaveActivityFailed(response));
        break;
    }
  } catch (error) {
    throw error;
  }
};
