import { createStore } from 'vuex';

const persistedState = localStorage.getItem('devTeamMembers');
const initialState = persistedState ? JSON.parse(persistedState) : [];

export default createStore({
  state: {
    devTeamMembers: initialState,
  },
  mutations: {
    addTeamMember(state, teamMember) {
      state.devTeamMembers.push(teamMember);
      localStorage.setItem('devTeamMembers', JSON.stringify(state.devTeamMembers));
    },
  },
  actions: {
    addTeamMember({ commit }, teamMember) {
      commit('addTeamMember', teamMember);
    },
  },
  getters: {
    devTeamMembers: (state) => state.devTeamMembers,
  },
});
