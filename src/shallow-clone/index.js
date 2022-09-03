import each from '../each'
import { getType, isPrimitive } from "../type"

const strategies = {
  array (target) {
    return target.slice()
  },
  object (target, Ctor) {
    const obj = new Ctor

    each(target, (value, key) => {
      obj[key] = value
    })

    return obj
  },
  regexp (target, Ctor) {
    return new Ctor(target)
  },
  date (target, Ctor) {
    return new Ctor(target)
  },
  error (target, Ctor) {
    return new Ctor(target.message) 
  }
}

/**
 * 返回一个值的浅拷贝
 * 
 * @param {*} target - 需要浅拷贝的值
 * @returns {*} 浅拷贝后的值
 */
const shallowClone = target => {
  if(isPrimitive(target)) {
    return target
  }

  const type = getType(target)
  const Ctor = target.constructor

  return strategies[type](target, Ctor)
}

export default shallowClone