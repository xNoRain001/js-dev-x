const keys = target => {
  const stringKeys = Object.keys(target)
  const symbolKeys = Object.getOwnPropertySymbols(target)
  
  return stringKeys.concat(symbolKeys)
}

export default keys