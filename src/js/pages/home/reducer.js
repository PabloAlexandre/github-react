export const SET_INPUT_VALUE = 'HOME_SET_INPUT_VALUE'
const defaultValue = {
  search: ''
}

const home = (state = defaultValue, action) => {
  switch (action.type) {
  case SET_INPUT_VALUE:
    return {...state, search: action.value}
  default:
    return state
  }
}

export {defaultValue}
export default home
