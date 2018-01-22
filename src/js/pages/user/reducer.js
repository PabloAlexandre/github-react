export const SET_USER = 'USER_SET_USERS'
export const SET_REPOSITORIES = 'USER_SET_REPOSITORY'
export const SET_TAB = 'USER_SET_TAB'
export const SET_CURRENT_USER = 'USER_SET_CURRENT_USER'

const defaultValue = {
  users: [],
  current: {},
  tab: 'Information'
}

const getUsers = (currentUsers, newUser) => {
  if(currentUsers.find((v) => v.id === newUser.id)){
    return currentUsers.reduce((keep, v) => {
      if(v.id === newUser.id){
        return [...keep, {...v, ...newUser}]
      } else {
        return [...keep, v]
      }
    }, [])
  } else {
    return [...currentUsers, newUser]
  }
}

const user = (state = defaultValue, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return {...state, current: state.users.find((v) => v.login === action.user)}
  case SET_USER:
    return {...state, users: getUsers(state.users, action.value)}
  case SET_REPOSITORIES:
    return {...state, users: state.users.map((v) => {
      if(v.login === action.user){
        return {...v, repositories: action.value}
      }

      return v
    })}
  default:
    return state
  }
}

export {defaultValue}
export default user
