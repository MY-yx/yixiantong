import HTTP from "../utils/http";
import { API } from '../utils/config';

class ListModel extends HTTP {
  getListDatas(cityId, field) {
    return new Promise((resolve, reject) => {
      this.post({
        url: API.GET_LIST_DATAS,
        data: {
          cityId,
          field
        },
        success(res) {
          resolve(res.data);
        },
        error(err) {
          reject(err);
        }
      })
    })
  }
}

export default ListModel;