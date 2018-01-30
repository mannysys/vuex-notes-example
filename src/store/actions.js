// 在应用里，通过actions动作去执行的
export const initial = ({ commit }) => {
  commit('setInitialData')
}

export const create = ({ commit }) => {
  commit('createEntity')
}

export const update = ({ commit }, entity) => {
  commit('updateEntity', entity)
}

export const destroy = ({ commit }, entity) => {
  commit('destroyEntity', entity)
}
