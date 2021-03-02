export const add = data => {
  return {
    type: 'ADD',
    payload: data
  }
}

export const update = data => {
  return {
    type: 'UPDATE',
    payload: data
  }
}

export const updateIndex = index => {
  return {
    type: 'UPDATE-INDEX',
    payload: index
  }
}

export const remove = id => {
  return {
    type: 'REMOVE',
    payload: id
  }
}