import each from "../each/index"
import random from "../random/index"
import throttle from "../throttle/index"
import debounce from "../debounce/index"
import merge from "../merge/index"
import { shallowClone, deepClone } from '../clone/index'
import { getType } from "../type/index"

const init = utils => {
  utils.getType = getType
  utils.each = each
  utils.shallowClone = shallowClone
  utils.deepClone = deepClone
  utils.random = random
  utils.throttle = throttle
  utils.debounce = debounce
  utils.merge = merge
}

export default init