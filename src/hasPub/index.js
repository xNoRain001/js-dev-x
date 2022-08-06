import has from "../has"

const hasPub = (target, prop) => {
  return prop in target && !has(target, prop)
}

export default hasPub