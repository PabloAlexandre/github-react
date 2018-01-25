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

export const sortObject = (arr, propertyName, asc = false) => {
  const quicksort = (array, left, right) => {
    let i = left
    let j = right
    let pivot = array[parseInt((i + j) / 2)][propertyName]
    while(i <= j){
      while(array[i][propertyName] < pivot) i++
      while(array[j][propertyName] > pivot) j--

      if(i <= j){
        const swap = array[i]
        array[i++] = array[j]
        array[j--] = swap
      }
    }

    if(j > left) quicksort(array, left, j)
    if(i < right) quicksort(array, i, right)
    return array
  }
  let copy = [...arr]
  copy = quicksort(copy, 0, copy.length - 1)
  return !asc ? copy.reverse() : copy
}
