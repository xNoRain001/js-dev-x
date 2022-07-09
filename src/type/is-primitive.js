const isPrimitive = v => {
  return !(v !== null && typeof v === 'object')
}

export default isPrimitive