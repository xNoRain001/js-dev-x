const uniq = (ary, isMutation = false) => {
  if (isMutation) {
    const set = new Set()

    for (let i = 0; i < ary.length; i++) {
      const value = ary[i]

      if (set.has(value)) {
        ary.splice(i, 1)
        i--
      } else {
        set.add(value)
      }
    }

    console.log('@')
    return ary
  }

  return [...new Set(ary)]
}

export default uniq