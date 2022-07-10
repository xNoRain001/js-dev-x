import { getType } from '../type/index'

const LOWERCASELETTERS = 'qwertyuiopasdfghjklzxcvbnm'
const UPPERCASELETTERS = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const LETTERS = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

const stragegies = {
  int (range) {
    const isLeftOpen = range[0] === '('
    const isRightOpen = range[range.length - 1] === '('
    const parts = range.split(',')

    let a = parts[0].slice(1) * 1
    let b = parts[1].slice(0, -1) * 1

    isLeftOpen
      ? a++
      : isRightOpen
          ? b--
          : null

    return Math.floor(Math.random() * (b - a)) + a
  },
  letters (type, number) {
    if (getType(type) === 'number') {
      number = type
      type = undefined
    }

    let res = ''

    for (let i = 0; i < number; i++) {
      if (type === 'lower') {
        const index =  Math.floor(Math.random() * 26)
        res += LOWERCASELETTERS[index]
      }
      else if (type === 'upper') {
        const index =  Math.floor(Math.random() * 26)
        res += UPPERCASELETTERS[index]
      }
      else {
        const index =  Math.floor(Math.random() * 53)
        res += LETTERS[index]
      }
    }
    
    return res
  }
}

/**
 * 生成指定范围的随机整数或字母
 * 
 * @param {string} type - 类型，可选值有 'int' | 'letters'
 * @param {string} [range=undefined] - 范围，示例如下：
 *  '[3, 5]' 表示随机生成 3、4、5 中的一个数，
 *  '(5, 8)' 表示随机生成 6、7 中的一个数，
 *  'lower' 表示随机生成小写字母
 *  'upper' 表示随机生成大写字母
 *  undefined 表示随机生成字母
 * @param {number} number - 生成字母的数量，生成随机整数时传入该参数无意义。
 * @returns {(string|number)} - 生成的随机整数或字母
 */
const random = (type, range, number) => {
  return stragegies[type](range, number)
}

export default random