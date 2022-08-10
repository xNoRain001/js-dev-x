import has from "../has"
import now from "../now"
import wait from "../wait"
import swap from "../swap"
import each from "../each"
import last from "../last"
import uniq from "../uniq"
import keys from "../keys"
import merge from "../merge"
import random from "../random"
import hasPub from "../hasPub"
import useless from "../useless"
import throttle from "../throttle"
import debounce from "../debounce"
import eachReverse from "../eachReverse/each-reverse"
import { shallowClone, deepClone } from '../clone'
import { 
  isDef,
  isNull,
  getType,
  isArray,
  isUndef,
  isObject,
  isNumber,
  isString,
  isPromise,
  isBoolean,
  isFunction,
  isUndefined,
  isArrayLike,
  isPrimitive,
  isPlainObject
} from "../type"

const methods = {
  has,
  now,
  wait,
  swap,
  uniq,
  last,
  keys,
  each,
  isDef,
  merge,
  isNull,
  random,
  hasPub,
  isUndef,
  isArray,
  getType,
  useless,
  isObject,
  isNumber,
  isString,
  throttle,
  debounce,
  isPromise,
  isBoolean,
  deepClone,
  isFunction,
  isArrayLike,
  isPrimitive,
  isUndefined,
  eachReverse,
  shallowClone,
  isPlainObject
}

const init = utils => {
  utils.init = (options = [], ...args) => {
    if (!isArray(options)) {
      args.unshift(options)
      options = args
    }

    each(methods, method => {
      if (options.indexOf(method) < 0) {
        delete utils[method]
      }
    })
  }

  each(methods, (key, value) => {
    utils[key] = value
  })
}

export default init