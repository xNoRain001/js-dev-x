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
import { getType } from "../type"

const init = utils => {
  utils.has = has
  utils.uniq = uniq
  utils.keys = keys
  utils.each = each
  utils.merge = merge
  utils.random = random
  utils.hasPub = hasPub
  utils.getType = getType
  utils.useless = useless
  utils.throttle = throttle
  utils.debounce = debounce
  utils.deepClone = deepClone
  utils.shallowClone = shallowClone
}

export default init