import Apple from './entity/Apple'

export default class Game {
  constructor ({ app }) {
    this.app = app
    this.apple = new Apple({ game: this })
  }
  update (dt) {
    this.apple.update(dt)
  }
  render () {
    if (this.apple.shouldCreateSprite()) {
      this.apple.createSprite()
      this.app.stage.addChild(this.apple.getSprite())
    }
    this.apple.render()
  }
}
