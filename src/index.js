import mount from "./mount"

const utils = Object.create(null)

mount(utils)

if (utils.isUndefined(window)) {
  global._ = utils
}

export default utils
