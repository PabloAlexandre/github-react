export const qs = (args) => {
  return reduce(args, (qs, v, k) => {
    if(!args[k]) return qs
    return [...qs, `${k}=${v}`]
  }, []).join('&')
}

export const reduce = (property, callback, defaultValue = null) => {
  const isObject = property instanceof Object
  const collection = isObject ? Object.keys(property) : property
  const length = collection.length
  const key = (index) => isObject ? collection[index] : index
  const value = (index) => isObject ? property[collection[index]] : collection[index]

  if (length == 0) throw 'Reduce of empty array/object with no initial value'

  let current = defaultValue

  for (var i = 0; i < length; i++){
    current = callback(current, value(i), key(i))
  }

  return current
}
