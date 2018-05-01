import initialState, { } from '../../../store/initialState';
import { FILTER_BY_TITLE } from '../actions/activities.visibility.actions';

const visibilityFilter = (state = initialState.filters, action) => {
  switch (action.type) {
  case FILTER_BY_TITLE: 
    return { 
      ...state,
      title: action.title
    };
    
  default:
    return state;
  }
};

export default visibilityFilter;
