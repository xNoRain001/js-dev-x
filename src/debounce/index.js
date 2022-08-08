import now from "../now"

/**
 * 函数防抖 Credits: borrowed code from https://github.com/jashkenas/underscore
 * 
 * @param {Function} fn - 需要进行防抖处理的原函数
 * @param {number} wait - 防抖的时间间隔
 * @param {boolean} [immediate=false] - 假设 wait 为 1000，再这个时间段内调用了两次
 *  防抖函数，如果 immediate 为 false，表示开始边界不触发，结束边界，即触发第二次调用
 *  的防抖函数，如果 immediate 为 true，表示开始边界触发，结束边界不触发，即触发第一
 *  次调用的防抖函数。
 * @returns {Function} - 生成的防抖函数
 */
const debounce = (fn, wait, immediate) => {
  let prev = 0, // prev 是上次点击的时间戳，不是 fn 执行的时间戳。
      timer = null,
      params = null,
      result = null,
      context = null

  const later = () => {
    const remaining = wait - (now() - prev)

    if (remaining > 0) {

      // 还需要等 remaining 秒，如果之后又马上点击，又会进入这里，
      // 确保点击间隔大于 wait 时才触发。
      timer = setTimeout(later, remaining);
    } else {
      
      // 点击间隔大于 wait 时进入这里，如果设置了开始边界触发，不让它执行。
      if (!immediate) {
        result = fn.call(context, ...params)
      }

      timer = null
    }
  }

  const _debounce = function (...args) {
    prev = now() // 更新上次点击时间
    context = this
    params = args

    if (!timer) {
      timer = setTimeout(later, wait)

      // 开始边界触发
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