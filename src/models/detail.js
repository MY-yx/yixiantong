import HTTP from "../utils/http";
import { API } from '../utils/config';

class DetailModel extends HTTP {
  getDetailData(field, id) {
    return new Promise((resolve, reject) => {
      this.post({
        url: API.GET_DETAIL,
        data: {
          field,
          id
        },
        success(res) {
          resolve(res.data);
        },
        error(err) {
          reject(err);
        }
      })
    });
  }
}

export default DetailModel;