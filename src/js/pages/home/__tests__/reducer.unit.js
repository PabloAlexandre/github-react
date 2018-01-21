import reducer, {defaultValue, SET_INPUT_VALUE} from '../reducer'

describe('Testing some functions in home reducer', () => {
  it('Check if reducer is started with default value', () => {
    expect(reducer(undefined, {})).toEqual(defaultValue)
  })

  it('Check if search input changes when I dispatch this event change', () => {
    expect(reducer(undefined, {
      type: SET_INPUT_VALUE,
      value: 'My Search'
    })).toHaveProperty('search', 'My Search')
  })
})
