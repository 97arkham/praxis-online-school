import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

let IP = '192.168.1.32:8080'

export default new Vuex.Store({
  state: {
    peserta: [],
    karya: [
      {
        id: 1,
        title: "title",
        deskripsi: "diskripsi",
        github: 'github',
        anggota: ['1', '2', '3']
      },
      {
        id: 2,
        title: "title",
        deskripsi: "diskripsi",
        github: 'github',
        anggota: ['1', '2', '3']
      },
      {
        id: 3,
        title: "title",
        deskripsi: "diskripsi",
        github: 'github',
        anggota: ['1', '2', '3']
      }
    ]
  },
  getters: {
    gettersApiPeserta: function(state){
      return state.peserta
    },
    gettersKarya: function(state){
      return state.karya
    }
  },
  mutations: {
    getApiPeserta: function(state){
      axios(`http://${IP}/praxis/murid/get`)
      .then(res => res.data)
      .then(res => {
        state.peserta = res
        console.log("get api", res)
      })
      .catch(err => console.log(err))
    }
  },
  actions: {
    getApiPeserta: function({commit}){
      commit('getApiPeserta')
    }
  },
  modules: {
  }
})
