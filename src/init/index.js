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
  isArray,
  isUndef,
  getType, 
  isObject,
  isPrimitive,
  isPlainObject,
} from "../type"

const init = utils => {
  utils.has = has
  utils.uniq = uniq
  utils.keys = keys
  utils.each = each
  utils.isDef = isDef
  utils.merge = merge
  utils.random = random
  utils.hasPub = hasPub
  utils.isUndef = isUndef
  utils.isArray = isArray
  utils.getType = getType
  utils.useless = useless
  utils.isObject = isObject
  utils.throttle = throttle
  utils.debounce = debounce
  utils.deepClone = deepClone
  utils.isPrimitive = isPrimitive
  utils.shallowClone = shallowClone
  utils.isPlainObject = isPlainObject
}

export default init