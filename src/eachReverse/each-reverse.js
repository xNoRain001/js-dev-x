import keys from '../keys/index'
import { 
  isArray,
  isArrayLike ,
  isObject
} from '../type/index'

const eachReverse = (target, cb) => {
  if (isArray(target) || isArrayLike(target)) {
    for (let i = target.length - 1; i >= 0; i--) {
      if (cb.call(target, i, target[i]) === false) {
        break
      }
    }
  }
  else if (isObject(target)) {
    const _keys = keys(target)

    for (let i = _keys.length - 1; i >= 0; i--) {
      const key = _keys[i]

      if (cb.call(target, key, target[key]) === false) {
        break
      }
    }
  }

  return target
}

export default eachReverse