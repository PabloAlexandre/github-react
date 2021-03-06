export const RESET_SEARCH = 'SEARCH_INITIALIZE_USER_LIST'
export const SET_USER_LIST = 'SEARCH_SET_USER_LIST'
export const SET_PAGE = 'SEARCH_SET_PAGE'
export const SET_COMPLETED = 'SEARCH_SET_COMPLETED'

const defaultValue = {
  users: [],
  loading: false,
  page: 0,
  total: 0,
  term: '',
  done: false
}

const search = (state = defaultValue, action) => {
  switch (action.type) {
  case RESET_SEARCH:
    return {...state, users: [], page: 0, total: 0, done: false, term: action.term}
  case SET_USER_LIST:
    return {...state, users: [...state.users, ...action.value], loading: false, total: action.total}
  case SET_PAGE:
    return {...state, page: action.value, loading: true}
  case SET_COMPLETED:
    return {...state, done: action.value}
  default:
    return state
  }
}

export {defaultValue}
export default search
