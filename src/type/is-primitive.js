import isObject from "./is-object"

const isPrimitive = v => {
  return !isObject(v)
}

export default isPrimitive