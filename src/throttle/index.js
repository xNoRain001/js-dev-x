/**
 * 函数节流 Credits: borrowed code from https://github.com/jashkenas/underscore
 * 
 * @param {Function} fn - 需要进行节流处理的原函数
 * @param {number} wait - 节流的时间间隔
 * @param {Object} options - 用于设置开始边界和结束边界是否触发的配置项
 * @param {boolean} options.leading - 开始边界是否触发
 * @param {boolean} options.trailing - 结束边界是否触发
 * @returns {Function} - 生成的节流函数
 */
const throttle = (fn, wait = 200, options = {}) => {
  const { leading, trailing } = options
  let context = null,
      parmas = null,
      result = null,
      timer = null,
      prev = 0

  // 结束边界触发的函数
  const later = () => {
    
    // 之后再次触发时当作第一次点击，如果开始边界要不触发，应该让 prev 为 0。
    prev = leading
      ? Date.now()
      : 0
    timer = null
    result = fn.call(context, ...parmas)

    if (!timer) {
      context = parmas = null
    }
  }

  const _throttle = function (...args) {
    parmas = args
    context = this

    // 记录点击的时间
    const now = Date.now()

    // 开始边界不触发，本来需要用一个变量标识是否是第一次点击，由于 prev 只有初始时的
    // 值是 0，正好可以用来标识是否是第一次点击。
    if (!prev && !leading) {
      prev = now
    }

    // 计算需要等待的时间
    const remaining = wait - (now - prev)

    if (remaining <= 0 || remaining > wait) { // remaining > wait 代表修改了时间

      // 清除之前因结束边界触发而设置的定时器，这种情况只会在结束边界定时器回调即将触
      // 发的同时又点击了一下时出现，此时正好超过等待时间。如果因时间误差先执行了点击
      // 时的代码，就会取消掉定时器回调；如果因时间误差先执行了定时器回调，prev 会更
      // 新，就不会执行下面的代码。总之保证了规定时间内只会执行一次。
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      prev = now
      result = fn.call(context, ...parmas)
      
      if (!timer) {
        context = parmas = null
      }

      return result
    } 
    
    // 结束边界触发
    if (!timer && trailing) {
      timer = setTimeout(later, remaining)

      return result
    }
  }

  // 取消
  _throttle.cancle = () => {
    clearTimeout(timer)
    prev = 0
    timer = context = parmas = null
  }

  return _throttle
}

export default throttle