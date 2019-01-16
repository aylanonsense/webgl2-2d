import { Application } from 'pixi.js'
import loadSprites from './loadSprites'
import Game from './Game'

export default async () => {
  // Load the sprites
  loadSprites(() => {
    // Create a PIXI.js app
    const app = new Application({
      view: document.getElementById('canvas'),
      width: 600,
      height: 600,
      roundPixels: true
    })

    // Create a game
    const game = new Game({ app })

    // Schedule a game loop
    app.ticker.add(dt => {
      game.update(dt)
      game.render()
    })
  })
}
