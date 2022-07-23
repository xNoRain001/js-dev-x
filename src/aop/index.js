const aop = (fn, beforeFn, afterFn) => {
  return function (...args) {
    beforeFn.call(this, ...args)
    fn.call(this, ...args)
    afterFn.call(this, ...args)
  }
}

export default aop