import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        love: []
    },
    mutations: {
        increment(state, arr) {
            state.love.push(arr)
        },
        cleanAll(state) {
            state.love = [];
        },
        removeOne(state, key) {
            state.love.map((self, i) => {
                let title;

                title = self.title;
                if (title === key) {
                    state.love = state.love.splice(i, 1)
                }
            })
        }
    }
})