import reducer, {SET_REPOSITORIES, SET_USER, SET_CURRENT_USER} from '../reducer'

describe('Test all interactions with users reduce' , () => {
  let state

  const mockedRepositories = [
    {name: 'Repo 1'},
    {name: 'Repo 2'}
  ]

  const mockedUser = {
    id: 123,
    name: 'Test',
    login: 'mylogin'
  }

  test('Expect that new user has been added correctly in state', () => {
    state = reducer(undefined, {
      type: SET_USER,
      value: mockedUser
    })

    expect(state).toHaveProperty('users')
    expect(state.users).toHaveLength(1)
    expect(state.users).toEqual(expect.arrayContaining([mockedUser]))
  })

  test('Expect if add repositories in existent user will keep in state', () => {
    state = reducer(state, {
      type: SET_REPOSITORIES,
      user: mockedUser.login,
      value: mockedRepositories
    })

    expect(state).toHaveProperty('users')
    expect(state.users).toHaveLength(1)
    expect(state.users).toEqual(expect.arrayContaining([{
      ...mockedUser,
      repositories: mockedRepositories
    }]))
  })

  test('Expect if I set current user, this will be setted in state', () => {
    state = reducer(state, {
      type: SET_CURRENT_USER,
      user: 'mylogin'
    })

    expect(state).toHaveProperty('current', {
      ...mockedUser,
      repositories: mockedRepositories
    })
  })
})
