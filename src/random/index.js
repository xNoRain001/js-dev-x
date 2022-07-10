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

const random = (type, range, number) => {
  return stragegies[type](range, number)
}

export default random