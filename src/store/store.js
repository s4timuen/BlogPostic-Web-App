import Vuex from 'vuex';
import ApiWrapper from 'blogpostic-api-wrapper';

const apiWrapper = new ApiWrapper();

const store = new Vuex.Store({
    state: {
        apiWrapper: apiWrapper,
        user: {},
        jwt: '',
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setJwt(state, jwt) {
            state.jwt = jwt;
        }
    },
    getters: {
        getApiWrapper: state => state.apiWrapper, 
        getUser: state => state.user,
        getJwt: state => state.jwt
    },
});

export default store;
