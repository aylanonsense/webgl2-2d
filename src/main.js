import * as PIXI from 'pixi.js'
import * as shader from './shader/simple-red'

export default async () => {
  const app = new PIXI.Application()
  document.body.appendChild(app.view)
  PIXI.loader.add('hat', 'img/wizard-hat.png').load((loader, resources) => {
    const hat = new PIXI.Sprite(resources.hat.texture);
    hat.x = app.renderer.width / 2
    hat.y = app.renderer.height / 2
    hat.anchor.x = 0.5
    hat.anchor.y = 0.5

    app.stage.addChild(hat)

    app.ticker.add(() => {
      hat.rotation += 0.01
    })
  })
}
