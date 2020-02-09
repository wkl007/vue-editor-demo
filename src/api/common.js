import axios from 'axios'
import request from '@/utils/request'

export default class CommonServer {
  // 获取上传签名
  static getOssSign () {
    return request({
      url: '/common/oss_sign/',
      method: 'post'
    })
  }

  // 获取html代码片段
  static getHtml (url) {
    return axios({
      url,
      method: 'get'
    })
  }
}
