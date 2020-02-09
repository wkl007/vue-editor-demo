import axios from 'axios'
import { API_URL } from '@/utils/constants'

const request = axios.create({
  baseURL: API_URL,
  timeout: 60000
})

// http请求拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http响应拦截器
request.interceptors.response.use(
  response => {
    const { errCode, errMsg, data, status } = response.data
    if (status === 1) {
      return data
    } else {
      return Promise.reject(response.data)
    }
  },
  error => {
    const errorString = error.toString()
    if (errorString.includes('timeout')) {
      console.log('接口请求超时')
    } else if (errorString.includes('Network Error')) {
      console.log('网络故障，请稍后再试')
    } else {
      console.log(error.errMsg || '系统错误')
    }
    return Promise.reject(error)
  }
)

export default request
