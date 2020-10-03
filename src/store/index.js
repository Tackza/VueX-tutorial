import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: { id: "123abc", name: "Adam jhar" },
    categories: [
      "substainability",
      "nature",
      "ability welfar",
      "housing",
      "education",
      "food",
      "communication",
    ],
    todos: [
      { id: 1, text: "....", done: true },
      { id: 2, text: "....", done: false },
      { id: 3, text: "....", done: false },
      { id: 4, text: "....", done: true },
      { id: 5, text: "....", done: false },
    ],
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    },
    actionAddCountByNumber(state, value) { 
      
      state.count += value
    }
  },
  getters: {
    catLength: (state) => {
      return state.categories.length;
    },
    doneTodo: (state) => {
      return state.todos.filter((item) => item.done);
    },
    getsTodo: (state) => {
      return state.todos.filter((item) => !item.done).length;
    },
    getEventById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
  actions: {
    actionAddCount(context) {
      context.commit("setCount", this.getters.getCount + 1);
    },
    actionMinusCount(context) {
      context.commit("setCount", this.getters.getCount - 1);
    },
  },
  modules: {},
});
