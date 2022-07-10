import { 
  getType,
  isArrayLike
} from "../type/index"
import each from "../each/index"
import { shallowClone, deepClone } from '../clone/index'
import random from "../random/index"

const init = utils => {
  utils.getType = getType
  utils.isArrayLike = isArrayLike
  utils.each = each
  utils.shallowClone = shallowClone
  utils.deepClone = deepClone
  utils.random = random
}

export default init