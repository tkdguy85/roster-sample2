export const rosterReducer = (state, action) => {
  let list = JSON.parse(localStorage.getItem('roster'))
  switch (action.type) {
    
    case 'ADD':
      list.push(action.payload)
      localStorage.setItem('roster', JSON.stringify(list))
      return { list, currentIndex: -1 }
  
    case 'UPDATE':
      list[state.currentIndex] = action.payload
      localStorage.setItem('roster', JSON.stringify(list))
      return { list, currentIndex: -1 }

    case 'UPDATE-INDEX':
      return { list, currentIndex: action.payload }
    
    case 'REMOVE':
      list.splice(action.payload, 1)
      localStorage.setItem('roster', JSON.stringify(list))
      return { list, currentIndex: -1 }

    default:
      return state;
    }
}

export default rosterReducer