const lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm'
const upCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

const stragegies = {
  number (range) {
    const isLeftOpen = range[0] === '('
    const isRightOpen = range[range.length - 1] === '('
    const parts = range.split(',')

    let a = +parts[0].slice(1)
    let b = +parts[1].slice(1, -1)

    isLeftOpen
      ? a++
      : isRightOpen
          ? b--
          : null

    return Math.floor(Math.random() * (b - a)) + a
  },

  lowerCaseLetter (number) {
    let res = ''

    for (let i = 0; i < number; i++) {
      const index = this.number('[0, 25]')
      res += lowerCaseLetters[index]
    }

    return res
  },

  upCaseLetter (number) {
    let res = ''

    for (let i = 0; i < number; i++) {
      const index = this.number('[0, 25]')
      res += upCaseLetters[index]
    }

    return res
  },

  letter (number) {
    let res = ''

    for (let i = 0; i < number; i++) {
      const index = this.number('[0, 51]')
      res += letters[index]
    }

    return res
  },
}

/**
 * 生成随机正整数或字母
 * 
 * @param {string} type - 类型，可选值有
 *  number | lowerCaseLetter | upCaseLetter | letter
 * @param {(string|number)} rangeOrNumber - 随机数范围或字母数量，示例如下：
 *  [3, 5] 表示随机生成 3、4、5 中的一个数
 *  (5, 8) 表示随机生成 6、7 中的一个数
 *  3 表示生成三个字母
 * @returns {(string|number)} - 生成的随机整数或字母
 */
const random = (type, rangeOrNumber) => {
  return stragegies[type](rangeOrNumber)
}

export default random