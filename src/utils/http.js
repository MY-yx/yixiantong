import axios from "axios";
import qs from 'qs';

export default class HTTP {
  get(opts) {
    axios({
      method: 'get',
      url: opts.url
    })
      .then(res => opts.success(res))
      .catch(err => opts.error(err))
  }
  post(opts) {
    axios({
      method: 'post',
      url: opts.url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(opts.data)
    })
      .then(res => opts.success(res))
      .catch(err => opts.error(err))
  }
}