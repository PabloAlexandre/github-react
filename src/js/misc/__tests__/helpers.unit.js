import { qs, reduce } from '../helpers'

describe('Test all methods registered in generic helpers file', () => {

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

})
