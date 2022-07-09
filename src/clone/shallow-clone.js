import { getType, isPrimitive } from "../type/index"
import each from '../each/index'

const strategies = {
  array (target) {
    return target.slice()
  },
  object (target, Ctor) {
    const obj = new Ctor

    each(target, (key, value) => {
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

const shallowClone = target => {
  if(isPrimitive(target)) {
    return target
  }

  const type = getType(target)
  const Ctor = target.constructor

  return strategies[type](target, Ctor)
}

export default shallowClone