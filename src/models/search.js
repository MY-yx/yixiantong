import HTTP from "../utils/http";
import { API } from '../utils/config';

class SearchModel extends HTTP {
  searchAction(keyword, cityId) {
    return new Promise((resolve, reject) => {
      this.post({
        url: API.SEARCH_ACTION,
        data: {
          keyword,
          cityId
        },
        success(res) {
          resolve(res.data);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
}

export default SearchModel;