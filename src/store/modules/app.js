const state = {
    off: false,
    inSub: false
}

const mutations = {
    setSub(state, value) {
        state.inSub = value
    }
}

export default {
    namespaced: true,
    state,
    // getters,
    // actions,
    mutations
}