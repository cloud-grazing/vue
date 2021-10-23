import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        Data: {
        },
        mainRouter: ''
    },
    mutations: {
        getData: (state) => state.Data,
        getMainRouter: (state) => state.mainRouter
    },
    actions: {
        setData: ({ commit }, obj = {}) => { commit('setData', obj); },
        setMainRouter: ({ commit }, obj = {}) => { commit('setMainRouter', obj); }
    },
    modules: {
        setData: (state, obj) => { state.Data = { ...state.Data, ...obj }; },
        setMainRouter: (state, strging) => { state.mainRouter = { strging }; }
    }
});
