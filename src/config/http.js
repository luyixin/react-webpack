/*
* created by lu.yixin on 2018/02/23
*/

import axios from 'axios'

export default {
  get (obj, url, params, cb, failure = () => {}) {
    axios.get(url, { params }).then(data => {
      if (data.status !== 200) return obj.$bus.$emit('warning.open', {title: '错误', msg: '接口错误'})
      cb && cb(data.data)
    })
  },
  post (obj, url, data, cb, failure = () => {}) {
    axios.post(url, data).then(data => {
      if (data.status !== 200) return obj.$bus.$emit('warning.open', {title: '错误', msg: '接口错误'})
      cb && cb(data.data)
    })
  }
}
