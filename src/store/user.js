export default {
  namespaced: true,
  state: {
    username: '',
    password: '123',
    de: '',
    logging: false,
    error: false
  },
  mutations: {
    SET_USER_STATE(state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
    login({ state, commit, rootState }) {
      if (!state.password) {
        alert('password in empty')
        return;
      }
      commit('SET_USER_STATE', { key: 'logging', value: true})

      setTimeout(() => {
        // TODO replace on another way
        const username = rootState.system.settings.user.username
        lightdm_login(username, state.password, () => {
          setTimeout(() => lightdm_start(rootState.system.settings.desktop.key), 400);
        }, () => {
          commit('SET_USER_STATE', { key: 'error', value: true})
          commit('SET_USER_STATE', { key: 'password', value: ''})
          commit('SET_USER_STATE', { key: 'logging', value: false})
        })
      }, 150);
    }
  }
}
