import axios from 'axios'
import moment from 'moment'
import { OSS_URL } from '@/utils/constants'
import CommonServer from '@/api/common'

/**
 * 文件扩展名提取
 * @param fileName
 * @returns {string}
 */
export const fileType = fileName => {
  return fileName.substring(fileName.lastIndexOf('.') + 1)
}

/**
 * oss路径定义
 * @param file
 */
export const ossPath = file => {
  const folder = moment().format('YYYY-MM-DD')
  if (file.name) {
    return `admin/${folder}/${moment().format('YYYY-MM-DD-HH-mm-ss')}.${fileType(file.name)}`
  } else {
    return `admin/${folder}/${moment().format('YYYY-MM-DD-HH-mm-ss')}.html`
  }
}

/**
 * oss formData上传
 * @param file
 * @returns {Promise<unknown>}
 */
export const ossUpload = file => {
  return new Promise((resolve, reject) => {
    CommonServer.getOssSign().then((res) => {
      const { accessid, policy, signature } = res
      const formData = new FormData()
      const key = ossPath(file)
      formData.append('key', key)
      formData.append('OSSAccessKeyId', accessid)
      formData.append('policy', policy)
      formData.append('signature', signature)
      formData.append('success_action_status', '200')
      formData.append('file', file)
      axios.post(OSS_URL, formData).then((res) => {
        const { status } = res
        if (status === 200) {
          const data = {
            url: `${OSS_URL}/${key}`,
            type: file.name ? fileType(file.name) : 'html'
          }
          resolve(data)
        } else {
          reject(res)
        }
      }).catch(err => {
        reject(err)
      })
    }).catch(err => {})
  })
}
