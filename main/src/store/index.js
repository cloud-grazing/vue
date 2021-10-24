import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: {
            user: ''
        },
        mainRouter: ''
    },
    mutations: {
        setData: (state, obj) => {
            state.data = { ...state.data, ...obj };
        }
    },
    actions: {
        setData: ({ commit }, obj = {}) => { commit('setData', obj); },
        setMainRouter: ({ commit }, obj = {}) => { commit('setMainRouter', obj); }
    },
    modules: {
        // setData: (state, obj) => { state.data = { ...state.data, ...obj }; },
        // setMainRouter: (state, strging) => { state.mainRouter = { strging }; }
    }
});
