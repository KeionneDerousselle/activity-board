import delay from './delay';
import activities from './activities';

// This file mocks a web API by working with the hard-coded data in activities.js.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
};

class ActivityApi {
  static getAllActivities = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...activities]);
      }, delay);
    });
  }

  static saveActivity = activity => {
    activity = {...activity};
    
    return new Promise(resolve => {
      setTimeout(() => {
        if(activity.id) {
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
