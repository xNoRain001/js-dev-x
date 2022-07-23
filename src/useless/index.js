import getType from '../type/get-type'
import keys from '../keys/index'
import each from '../each/index'
import { isObject } from '../type/index'

const strategies = {
  object (target, key) {
    delete target[key]
  },

  array (target, key) {
    console.log(target, key)
  }
}

const useless = (target, options = [], isStrict) => {
  const _keys = keys(target)
  const set = new Set()

  each(options, (_, key) => {
    set.add(key)
  })

  each(_keys, (_, key) => {
    if (set.has(target[key])) {
      const type = getType(target)
      strategies[type](target, key)

      return
    }

    const value = target[key]

    if (isObject(value)) {
      useless(value, options, isStrict)
    }
  })
}

export default useless