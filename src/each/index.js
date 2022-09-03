import keys from '../keys'
import { 
  isArray,
  isArrayLike ,
  isObject
} from '../type'

/**
 * 遍历（类）数组或对象
 * 
 * @param {(Array|Object)} target - 要遍历的目标
 * @param {Function} cb - 回调函数，会传递给它 key(index) 和 value，当回调函数的返
 *  回值为 false 时会结束循环。
 */
const each = (target, cb) => {
  if (isArray(target) || isArrayLike(target)) {
    for (let i = 0, l = target.length; i < l; i++) {
      if (cb.call(target, target[i], i) === false) {
        break
      }
    }
  }
  else if (isObject(target)) {
    const _keys = keys(target)

    for (let i = 0, l = _keys.length; i < l; i++) {
      const key = _keys[i]

      if (cb.call(target, target[key], key) === false) {
        break
      }
    }
  }

  return target
}

export default each