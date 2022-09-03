import mount from "./mount"

const utils = Object.create(null)

mount(utils)

if (typeof window === 'undefined') {
  global._ = utils
}

export default utils
