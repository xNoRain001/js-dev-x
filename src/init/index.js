import has from "../has"
import each from "../each"
import uniq from "../uniq"
import keys from "../keys"
import merge from "../merge"
import random from "../random"
import hasPub from "../hasPub"
import useless from "../useless"
import throttle from "../throttle"
import debounce from "../debounce"
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
  isBoolean,
  isFunction,
  isUndefined,
  isArrayLike,
  isPrimitive,
  isPlainObject
} from "../type"

const init = utils => {
  utils.has = has
  utils.uniq = uniq
  utils.keys = keys
  utils.each = each
  utils.isDef = isDef
  utils.merge = merge
  utils.isNull = isNull
  utils.random = random
  utils.hasPub = hasPub
  utils.isUndef = isUndef
  utils.isArray = isArray
  utils.getType = getType
  utils.useless = useless
  utils.isObject = isObject
  utils.isNumber = isNumber
  utils.isString = isString
  utils.throttle = throttle
  utils.debounce = debounce
  utils.isBoolean = isBoolean
  utils.deepClone = deepClone
  utils.isFunction = isFunction
  utils.isArrayLike = isArrayLike
  utils.isUndefined = isUndefined
  utils.isPrimitive = isPrimitive
  utils.shallowClone = shallowClone
  utils.isPlainObject = isPlainObject
}

export default init