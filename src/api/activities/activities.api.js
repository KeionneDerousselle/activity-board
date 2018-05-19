import fetch from 'isomorphic-fetch';
import environmentUrls from '../environment-urls';
import { uuidv4 } from '../utils';

const jsonHeaders = {
  'Content-Type': 'application/json'
};

class ActivityApi {
  static getAllActivities = async() => {
    try {
      const url = environmentUrls.local;
      const response = await fetch(`${url}/activities`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static saveActivity = async activity => {
    try {
      let method = 'PUT';

      if(!activity.id) {
        method = 'POST';
        activity.id = uuidv4();
      }
      
      const url = environmentUrls.local;
      const response = await fetch(`${url}/activities/${activity.id}`, {
        method: method,
        body: JSON.stringify(activity),
        headers: jsonHeaders
      });

      return {
        status: response.status,
        data: await response.json()
      };
    } catch (error) {
      throw error;
    }
  };
}

export default ActivityApi;
