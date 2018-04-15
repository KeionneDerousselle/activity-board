import delay from './delay';
import activities from './activities';


// This file mocks a web API by working with the hard-coded data in activities.js.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

class ActivityApi {
  static getAllActivities = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...activities]);
      }, delay);
    });
  }
}

export default ActivityApi;
