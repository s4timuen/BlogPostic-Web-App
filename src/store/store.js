import Vuex from 'vuex';
import ApiWrapper from 'blogpostic-api-wrapper';

const apiWrapper = new ApiWrapper();

const store = new Vuex.Store({
    state: {
        apiWrapper: apiWrapper,
    },
    mutations: {},
    getters: {
        apiWrapper: state => state.apiWrapper,
    },
});

export default store;
