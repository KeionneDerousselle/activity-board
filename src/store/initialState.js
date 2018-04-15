export default {
  activitiesFiltered: false,
  activities: {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  filters: {
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
