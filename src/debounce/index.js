/**
 * 函数防抖 https://github.com/jashkenas/underscore
 * 
 * @param {Function} fn - 需要进行防抖处理的原函数
 * @param {number} wait - 防抖的时间间隔
 * @param {boolean} immediate - 开始边界触发
 * @returns {Function} - 生成的防抖函数
 */
const debounce = (fn, wait, immediate) => {
  let context = null,
    timer = null,
    params = null,
    result = null,
    previous = 0

  const later = () => {
    const passed = Date.now() - previous

    if (wait > passed) {
      timer = setTimeout(later, wait - passed);
    } else {
      timer = null

      if (!immediate) {
        result = fn.call(context, ...params)
      }
    }
  }

  const _debounce = function (...args) {
    context = this
    params = args
    previous = Date.now()

    if (!timer) {
      timer = setTimeout(later, wait)

      if (immediate) {
        result = fn.call(context, ...params)
      }
    }

    return result
  }

  _debounce.cancel = () => {
    clearTimeout(timer)
    timer = context = params = null
  }

  return _debounce
}

export default debounce