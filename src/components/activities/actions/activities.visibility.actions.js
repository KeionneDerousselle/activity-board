export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';
export const filterByTitle = title => ({
  type: FILTER_BY_TITLE,
  title
});

export const searchByTitle = title =>
  dispatch => dispatch(filterByTitle(title));
