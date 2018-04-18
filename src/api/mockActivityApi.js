import { activities } from './data';
import { uuidv4, delay } from './utils';

// This file mocks a web API by working with the hard-coded data in activities.js.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class ActivityApi {
  static getAllActivities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...activities]);
      }, delay);
    });
  }

  static saveActivity = activity => {
    activity = { ...activity };

    return new Promise(resolve => {
      setTimeout(() => {
        if (activity.id) {
          const existingActivityIndex = activities.findIndex(a => a.id === activity.id);
          activities.splice(existingActivityIndex, 1, activity);
        } else {
          activity.id = uuidv4();
          activities.push(activity);
        }

        resolve(activity);
      }, delay);
    });
  }
}

export default ActivityApi;
