import fetch from 'isomorphic-fetch';
import environmentUrls from '../environment-urls';

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

  static postActivity = async activity => {
    try {
      const url = environmentUrls.local;
      const response = await fetch(`${url}/activities/`, {
        method: 'POST',
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

  static putActivity = async activity => {
    try {
      const url = environmentUrls.local;
      const response = await fetch(`${url}/activities/${activity.id}`, {
        method: 'PUT',
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
