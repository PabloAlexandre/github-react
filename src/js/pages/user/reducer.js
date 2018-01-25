export const SET_USER = 'USER_SET_USERS'
export const SET_REPOSITORIES = 'USER_SET_REPOSITORY'
export const SET_LOADING = 'USER_IS_LOADING'

const defaultValue = {
  current: {},
  loading: true
}

const user = (state = defaultValue, action) => {
  switch (action.type) {
  case SET_LOADING:
    return {...state, loading: action.value}
  case SET_USER:
    return {...state, current: action.value}
  case SET_REPOSITORIES:
    return {...state, current: {...state.current, repositories: action.value}}
  default:
    return state
  }
}

export {defaultValue}
export default user
