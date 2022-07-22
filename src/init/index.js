import each from "../each/index"
import random from "../random/index"
import { shallowClone, deepClone } from '../clone/index'
import { getType } from "../type/index"

const init = utils => {
  utils.getType = getType
  utils.each = each
  utils.shallowClone = shallowClone
  utils.deepClone = deepClone
  utils.random = random
}

export default init