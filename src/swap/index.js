const swap = (target, a, b) => {
  const temp = target[a]
  target[a] = target[b]
  target[b] = temp

  return target
}

export default swap