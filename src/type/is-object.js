import getType from "./get-type"

const isObject = v => {
  return getType(v) === 'object'
}

export default isObject