import { Sprite, loader } from 'pixi.js'
import Entity from './Entity'

export default class Apple extends Entity {
  constructor({ game }) {
    super({ game })
    this.x = 100
    this.y = 100
  }
  update (dt) {
    this.x += dt
  }
  createSprite () {
    this.sprite = new Sprite(loader.resources.apple.texture)
    this.sprite.anchor.x = 0.5
    this.sprite.anchor.y = 0.5
    this.sprite.scale.x = 4
    this.sprite.scale.y = 4
  }
  render () {
    this.sprite.x = this.x
    this.sprite.y = this.y
  }
}
