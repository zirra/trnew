// import { api } from '@/utils/api'
// import { storage } from '@/utils/storage'

const state = {
  modalActive: false,
  modalState: 'Signin'
}

const mutations = {
  setModal (state, view) {
    if(!view) {
      state.modalActive = false
    } else {
      if(state.modalActive) {
        state.modalActive = false
      } else {
        state.modalActive = true
      }
      state.modalState = view
    }
  }
}

const actions = {
}

const getters = {
  modalActive: state => state.modalActive,
  modalState: state => state.modalState
}

export default {
  state,
  actions,
  mutations,
  getters
}
