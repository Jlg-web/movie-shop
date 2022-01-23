import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({

  state: {
    movies: [],
    moviesInBag: []
  },

  mutations: {

    loadmovies (state, movies) {
      state.movies = movies;
    },

    loadBag(state, movies) {
      state.moviesInBag = movies;
    },

    addToBag(state, movie) {
      state.moviesInBag.push(movie);
      localStorage.setItem("moviesInBag", JSON.stringify(state.moviesInBag))
    },

    removeFromBag(state, movieId) {
      var updatedBag = state.moviesInBag.filter(item => movieId != item._id);
      state.moviesInBag = updatedBag;
      localStorage.setItem("moviesInBag", JSON.stringify(state.moviesInBag))
    },


  },

  actions: {

    loadmovies({ commit }) {
      axios
      .get('http://localhost:5500/posts')
      .then(response => {
        commit('loadmovies', response.data);
      })
    },

    loadBag({ commit }) {
      if (localStorage.getItem("moviesInBag")) {
        commit('loadBag', JSON.parse(localStorage.getItem("moviesInBag")));
      }
    },

    addToBag({ commit }, movie) {
      commit('addToBag', movie);
    },

    removeFromBag({ commit }, movieId) {
        commit('removeFromBag', movieId);
    },

  }
  
})
