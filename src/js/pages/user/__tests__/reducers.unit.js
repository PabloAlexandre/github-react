import reducer, {SET_REPOSITORIES, SET_USER} from '../reducer'

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

    expect(state).toHaveProperty('current')
    expect(state.current).toEqual(mockedUser)
  })

  test('Expect if add repositories in existent user will keep in state', () => {
    state = reducer(state, {
      type: SET_REPOSITORIES,
      value: mockedRepositories
    })

    expect(state).toHaveProperty('current')
    expect(state.current).toHaveProperty('repositories')
    expect(state.current.repositories).toHaveLength(2)
    expect(state.current.repositories).toEqual(expect.arrayContaining(mockedRepositories))
  })
})
