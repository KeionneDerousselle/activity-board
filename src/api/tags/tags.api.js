import fetch from 'isomorphic-fetch';
import environmentUrls from '../environment-urls';

class TagsApi {
  static getAllTags = async() => {
    try{
      const url = environmentUrls.local;
      const response = await fetch(`${url}/tags`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default TagsApi;
