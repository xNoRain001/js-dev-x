import getType from '../type/get-type'
import keys from '../keys'
import each from '../each'
import { isArray, isObject } from '../type'

const strategies = {
  object (target, keys, isStrict, set) {
    each(keys, key => {
      const value = target[key]

      if (set.has(value)) {
        delete target[key]

        return
      }

      if (
        !isStrict && 
        isArray(value)
      ) {
        target[key] = useless(value, undefined, isStrict, set)
      }

      if (isObject(value)) {
        useless(value, undefined, isStrict, set)
      }
    })

    return target
  },

  array (target, keys, isStrict, set) {
    const ary = []

    each(keys, key => {
      const value = target[key]

      if (set.has(value)) {
        return
      }

      if (
        !isStrict && 
        isObject(value)
      ) {
        ary.push(useless(value, undefined, isStrict, set))
      }

      if (isArray(value)) {
        ary.push(useless(value, undefined, isStrict, set))
      }
    })

    return ary
  }
}

/**
 * 根据 value 去除对象或数组中的无用 key，会修改目标对象或数组。
 * 
 * @param {(Object|Array)} target - 目标对象或数组
 * @param {Array} options - 如果目标对象或数组的属性值和此数组中的任何一个元素相等，
 *  那么该属性会被去除。
 * @param {boolean} [isStrict=true] - 是否开启严格模式，默认开启。未开启时，如果对
 * 象属性值是对象或数组，那么对象或数组内和 options 中相等的属性或元素会被去除；如果
 * 数组属性值是对象或数组，那么对象或数组内和 options 中相等的属性或元素会被去除。
 * @returns {(Object|Array)} - 去除属性后的目标对象或数组
 */
const useless = (target, options = [], isStrict = true, set = new Set()) => {
  const _keys = keys(target)
  
  if (!set.size) {
    each(options, key => {
      set.add(key)
    })
  }

  const type = getType(target)
  return strategies[type](target, _keys, isStrict, set)
}

export default useless