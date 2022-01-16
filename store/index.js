export const state = () => ({
  list: [],
  counter: 0,
  drawer : false,
})

export const mutations = {
  set_drawer(state,newDrawer){
    state.drawer = newDrawer
  },

  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}