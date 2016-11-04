export function add(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

export function del(id) {
  return {
    type: 'DEL_TODO',
    id
  }
}
