import * as PIXI from 'pixi.js'
import * as shader from './shader/simple-red'

export default async () => {
  const app = new PIXI.Application({
    view: document.getElementById('canvas'),
    width: 600,
    height: 600,
    roundPixels: true
  })
  app.renderer.reset()

  let apple

  const update = dt => {
    apple.rotation += 0.01 * dt
  }

  PIXI.loader
    .add('apple', 'img/apple.png')
    .load((loader, resources) => {
      resources.apple.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST
      apple = new PIXI.Sprite(resources.apple.texture);
      apple.x = app.renderer.width / 2
      apple.y = app.renderer.height / 2
      apple.anchor.x = 0.5
      apple.anchor.y = 0.5
      apple.scale.x = 4
      apple.scale.y = 4
      app.stage.addChild(apple)
      app.ticker.add(delta => update(delta))
    })
}
