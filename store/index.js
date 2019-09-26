import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        love: [
            {
                embed: "https://giphy.com/embed/Y4pAQv58ETJgRwoLxj",
                id: "Y4pAQv58ETJgRwoLxj",
                image: "https://media0.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy.gif?cid=a0d6d3c16ff4fa52ff4b4be1bb48c889cfb154dc62291efc&rid=giphy.gif",
                likes: 0,
                title: "adorable dog GIF",
            }
        ],
        likes: 0,
    },
    mutations: {
        increment(state, arr) {
            state.love.push(arr)
        },
        like(state, el) {
            state.likes++;
        },
        unlike(state, el) {
            state.likes--
        },
        cleanAll(state) {
            state.love = [];
        },
        remove(state, arr) {
            arr.map((item, i) => {
                let ID, singleID, harnestID = [];

                singleID = item;
                for (let x = 0; x < state.love.length; x++){
                    harnestID.push(state.love[x].id);
                }

                for (let x = 0; x < state.love.length; x++) {
                    let selected = state.love[x].id;
                    if (selected === singleID) {
                        state.love.splice(harnestID.indexOf(selected), 1);
                        harnestID.splice(harnestID.indexOf(selected), 1);
                    }
                }
            })
        }
    }
})