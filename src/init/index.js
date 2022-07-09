import { 
  getType,
  isArrayLike
} from "../type/index"
import each from "../each/index"
import { shallowClone, deepClone } from '../clone/index'

const init = utils => {
  utils.getType = getType
  utils.isArrayLike = isArrayLike
  utils.each = each
  utils.shallowClone = shallowClone
  utils.deepClone = deepClone
}

export default init