export const SET_REPOSITORY = 'REPOSITORY_SET_INFO'
export const SET_COMMITS = 'REPOSITORY_SET_COMMITS'

const defaultValue = {
  commits: [],
  repositoryInfo: {}
}

const repository = (state = defaultValue, action) => {
  switch (action.type) {
  case SET_REPOSITORY:
    return {...state, repositoryInfo: action.value}
  case SET_COMMITS:
    return {...state, commits: action.value}
  default:
    return state
  }
}

export {defaultValue}
export default repository
