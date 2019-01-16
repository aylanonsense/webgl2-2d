import { loader, SCALE_MODES } from 'pixi.js'

export default callback => {
  loader
    .add('apple', 'img/apple.png')
    .load((loader, resources) => {
      resources.apple.texture.baseTexture.scaleMode = SCALE_MODES.NEAREST
      if (callback) {
        callback()
      }
    })
}
