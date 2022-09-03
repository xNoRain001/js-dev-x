import { isArray, isObject } from '../type'

const strategies = {
  replace (target, sources, key) {
    target[key] = sources
  }
}

const merge = (target, sources, prevTarget, key) => {
  if (
    (isObject(target) && isObject(sources)) ||
    (isArray(target) && isArray(sources))
  ) {
    for (const key in sources) {
      const value1 = target[key]
      const value2 = sources[key]

      merge(value1, value2, target, key)
    }
  } else {
    strategies.replace(prevTarget || target, sources, key)
  }

  return target
}

export default merge