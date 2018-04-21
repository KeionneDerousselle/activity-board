import {
  REQUEST_TAGS,
  REQUEST_TAGS_SUCCESS,
  REQUEST_TAGS_FAILED
} from './tagActions';

import initialState from '../../store/initialState';

const tagsReducer = (state = initialState.tags, action) => {
  switch (action.type) {
  case REQUEST_TAGS:
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
      
  case REQUEST_TAGS_FAILED:
    return {
      ...state,
      isFetching: false
    };

  case REQUEST_TAGS_SUCCESS:
    return {
      ...state,
      isFetching: false,
      didInvalidate: false,
      items: action.tags,
      lastUpdated: action.receivedAt
    };

  default:
    return state;
  }
};

export default tagsReducer;
