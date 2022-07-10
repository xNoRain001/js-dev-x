import { getType, isArrayLike } from '../type/index'

/**
 * 遍历（类）数组或对象
 * 
 * @param {(Array|Object)} obj - 要遍历的对象
 * @param {Function} cb - 回调，会传递给它 index(key) 和 value
 */
const each = (obj, cb) => {
  const type = getType(obj)

  if (type === 'array' || isArrayLike(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (cb.call(obj, i, obj[i]) === false) {
        break
      }
    }
  }
  else if (type === 'object') {
    const stringProp = Object.keys(obj)
    const symbolProp = Object.getOwnPropertySymbols(obj)
    const keys = stringProp.concat(symbolProp)

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]

      if (cb.call(obj, key, obj[key]) === false) {
        break
      }
    }
  }

  return obj
}

export default each