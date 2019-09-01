import axios from 'axios'
import { storage } from '@/utils/storage'

export const api = {

  testAPI (path) {
    return (this._genUrl(path)) 
  },
  getRaw (path) { return axios.get(this._genUrl(path)) },
  getRawSpec (path) { return axios.get(path) },
  get (path) { return axios.get(this._genUrl(path), this._genOpts()) },
  rawPost (path, body) { return axios.post(this._genUrl(path), body) },
  rawPostSpec (path, body) { return axios.post(path, body) },
  post (path, body) { return axios.post(this._genUrl(path), body, this._genOpts()) },
  put (path, body) { return axios.put(this._genUrl(path), body, this._genOpts()) },
  patch (path, body) { return axios.patch(this._genUrl(path), body, this._genOpts()) },
  delete (path) { return axios.delete(this._genUrl(path), this._genOpts()) },

  _genUrl (path) {
    let baseUrl = process.env.VUE_APP_ROOT_API
    if (!baseUrl.endsWith('/')) {
      baseUrl += '/'
    }
    let p = path
    if (p.startsWith('/')) {
      p = path.slice(1)
    }
    return `${baseUrl}${p}`
  },

  _genOpts () {
    let ttoken= JSON.parse(storage.getValue('token'))
    return {
      headers: { token: ttoken }
    }
  }
}