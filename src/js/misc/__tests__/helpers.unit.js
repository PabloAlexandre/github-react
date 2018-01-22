import { qs, reduce, sortObject } from '../helpers'

describe('Test all methods registered in generic helpers file', () => {
  const mockedObj = [
    {stars: 2, name: 'A'},
    {stars: 3, name: 'B'},
    {stars: 1, name: 'C'},
  ]

  test('Check if reduce method keeps correctly output from object', () => {
    const obj = {a: 12, b: 24}
    const response = reduce(obj, (keep, v) => keep + v, 0)
    expect(response).toBe(36)
  })
  test('Check if reduce method keeps correctly output from array', () => {
    const obj = [12, 24]
    const response = reduce(obj, (keep, v) => keep + v, 0)
    expect(response).toBe(36)
  })

  test('Check if query string parse object with non empty value correctly', () => {
    expect(qs({a: true, b: 'test'})).toBe('a=true&b=test')
  })

  test('Check if query string parse object with empty value correctly', () => {
    expect(qs({a: true, b: false})).toBe('a=true')
  })

  test('Check if sort object with quicksort and with even length works correctly', () => {
    expect(sortObject(mockedObj, 'stars')).toEqual([
      {stars: 3, name: 'B'},
      {stars: 2, name: 'A'},
      {stars: 1, name: 'C'},
    ])
  })

  test('Check if sort object with quicksort and with odd length works correctly', () => {
    expect(sortObject([...mockedObj, {stars: 5, name: 'D'}], 'stars')).toEqual([
      {stars: 5, name: 'D'},
      {stars: 3, name: 'B'},
      {stars: 2, name: 'A'},
      {stars: 1, name: 'C'}
    ])
  })

  test('Check if sort object with quicksort and object has equal values works correctly', () => {
    expect(sortObject([...mockedObj, {stars: 1, name: 'D'}], 'stars')).toEqual([
      {stars: 3, name: 'B'},
      {stars: 2, name: 'A'},
      {stars: 1, name: 'D'},
      {stars: 1, name: 'C'}
    ])
  })

  test('Check if sort object (ASC) with quicksort works correctly', () => {
    expect(sortObject(mockedObj, 'stars', true)).toEqual([
      {stars: 1, name: 'C'},
      {stars: 2, name: 'A'},
      {stars: 3, name: 'B'}
    ])
  })
})
