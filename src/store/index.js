import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchUserInfo } from '../api/index';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    newsList: [],
    userInfo: {},
  },

  mutations: {
    setNewsList(state, list) {
      state.newsList = list;
      console.log('state.newsList', state.newsList);
    },
    setUserInfo(state, user) {
      state.userInfo = user;
      console.log('state.setUserInfo', state.userInfo);
    },
  },

  actions: {
    async actionNewsList(context) {
      try {
        let response = await fetchNewsList();
        context.commit('setNewsList', response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async actionUserInfo(context, user) {
      try {
        let response = await fetchUserInfo(user);
        console.log(user);
        context.commit('setUserInfo', response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getNewsList(state) {
      return state.newsList;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
  },
});
