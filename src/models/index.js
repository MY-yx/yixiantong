import HTTP from "../utils/http";
import { API } from '../utils/config';

class IndexModel extends HTTP {
  getHomeDatas(cityId) {
    return new Promise((res, rej) => {
      this.post({
        url: API.GET_HOME_DATAS,
        data: {
          cityId
        },
        success(data) {
          res(data.data);
        },
        error(err) {
          rej(err);
        }
      })
    })
  }
}

export default IndexModel;