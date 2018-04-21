import { tags } from './data';
import { uuidv4, delay } from './utils';

class TagsApi{
  static getAllTags = () =>
  {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...tags])
      }, delay);
    });
  }
}

export default TagsApi;
