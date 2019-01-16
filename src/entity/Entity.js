export default class Entity {
  constructor({ game }) {
    this.game = game
  }
  update (dt) {}
  shouldCreateSprite() {
    return !this.sprite
  }
  getSprite() {
    return this.sprite
  }
  createSprite () {}
  render () {}
}
