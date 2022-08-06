import eachReverse from "../eachReverse/each-reverse"

const uniq = (ary, isMutation = false) => {
  if (isMutation) {
    const set = new Set()

    eachReverse(ary, (index, value) => {
      if (set.has(value)) {
        ary.splice(index, 1)
      } else {
        set.add(value)
      }
    })

    return ary
  }

  return [...new Set(ary)]
}

export default uniq