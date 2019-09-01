import { api } from '@/utils/api'
import { storage } from '@/utils/storage'

const moment = require('moment')

const state = {
  userType: 'anon',
  userName: getUser(),
  loginErr: null,
  loginErrMsg: null,
  authorized: false
}

const mutations = {
  userType (state, utype) {
    state.userType = utype
  },
  setAuthorized (state, bool) {
    state.authorized = bool
  },
  setLoginError (state, err) {
    state.loginErr = true
    state.loginErrMsg = err
  },
  clearLoginError (state) {
    state.loginErr = null
    state.loginErrMsg = null
  },
  setUserName (state, name) {
    state.userName = name
  }
}

const actions = {
  authorize ({commit}, data){
    commit('setAuthorized', data)
  },
  amAuthorized({commit}) {
    api.get('/v1/auth')
    .then(() => {
      commit('setAuthorized', true)
    })
    .catch(error => {
      commit('setAuthorized', false)
      console.log(error)
    })
  },
  login ({commit}, user) {
    api.rawPost('/v1/user/login', user)
    .then( response => {
      console.log(response)
      let token = response.data.token
      storage.storeValue('token', token)
      storage.storeValue('user', response.data.user)
      commit('setAuthorized', true)
      commit('setUserName', response.data.user)
    })
    .catch((error) => {
      commit('setLoginError', error)
      commit('setAuthorized', false)
    })
  },
  logout ({commit}) {
    storage.clearValue('token')
    commit('setAuthorized', false)
  },
  clearLoginError ({commit}) {
    commit('clearLoginError', false)
  }
}

const getters = {
  theDate: () => {
    return moment().format('MMMM DD YYYY')
  },
  userType: state => state.userType,
  authorized: state => state.authorized,
  loginErr: state => state.loginErr,
  loginErrMsg: state => state.loginErrMsg,
  userName: state => state.userName
}

export default {
  state,
  actions,
  mutations,
  getters
}

function getUser () {
  if(storage.getValue('user')) {
    return JSON.parse(storage.getValue('user'))
  } else {
    return null
  }
}