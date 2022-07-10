/**
 * 返回给定值的数据类型
 * 
 * @param {*} v - 需要判断类型的值
 * @returns {string} 给定值的数据类型，都为小写字母。
 */
const getType = v => {
  if (v == null) {
    return `${v}`
  }

  const type = typeof v

  return !/^(object|function)$/.test(type)
    ? type
    : Object.prototype.toString.call(v).slice(8, -1).toLowerCase()
}

export default getType