export default {
  activitiesFiltered: false,
  tags: {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  activities: {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  filters: {
    title: '',
    price: {
      min: 0,
      max: 0
    },
    rating: 0,
    location: 0,
    types: [],
    tags: []
  }
};
