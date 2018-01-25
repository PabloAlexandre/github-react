import reducer, {defaultValue, SET_USER_LIST, SET_PAGE} from '../reducer'

describe('Testing some functions in search reducer', () => {
  let state

  it('Check if reducer is started with default value', () => {
    expect(reducer(undefined, {})).toEqual(defaultValue)
  })


  it('Check if set user list saves correctly new users and keep old users', () => {
    state = reducer(state, {
      type: SET_USER_LIST,
      value: [
        {name: 'User 1'},
        {name: 'User 2'}
      ]
    })

    expect(state).toHaveProperty('users')
    expect(state.users).toHaveLength(2)
  })

  it('Check if set page works correctly', () => {
    state = reducer(state, {
      type: SET_PAGE,
      value: 2
    })

    expect(state).toHaveProperty('page')
    expect(state.page).toBe(2)
  })
})
