import { TagsApi } from '../../api';

export const REQUEST_TAGS = 'REQUEST_TAGS';
export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const REQUEST_TAGS_SUCCESS = 'REQUEST_TAGS_SUCCESS';
export const requestTagsSuccess = tags => ({
  type: REQUEST_TAGS_SUCCESS,
  tags: tags,
  receivedAt: Date.now()
});

export const REQUEST_ACTIVITIES_FAILED = 'REQUEST_ACTIVITIES_FAILED';
export const requestTagsFailed = error => ({
  type: REQUEST_ACTIVITIES_FAILED,
  error
});

export const fetchTags = () =>
  dispatch => {
    dispatch(requestTags());

    return TagsApi.getAllTags()
      .then(tags => dispatch(requestTagsSuccess(tags)))
      .catch(error => {
        dispatch(requestTagsFailed(error));
        throw error;
      });
  };

const shouldFetchTags = tags => {
  if (tags.isFetching) {
    return false;
  }

  if (!tags.items || tags.items.length === 0) {
    return true;
  }

  return tags.didInvalidate;
};

export const fetchTagsIfNeeded = () =>
  (dispatch, getState) => {
    if (shouldFetchTags(getState().tags)) {
      return dispatch(fetchTags());
    }
  };
