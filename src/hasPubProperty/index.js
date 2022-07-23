const hasPubProperty = (target, prop) => {
  return prop in target && !target.hasOwnProperty(prop)
}

export default hasPubProperty