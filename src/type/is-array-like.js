const isArrayLike = v => {
  return v != null && 
    isLength(v.length) && 
    !/^function$/.test(typeof v)
}

const isLength = n => {
  return typeof n === 'number' &&
    n > -1 &&
    n % 1 === 0 &&
    n <= Number.MAX_SAFE_INTEGER
}

export default isArrayLike