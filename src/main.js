import * as shader from './shader/simple-red'
import Buffer from './gl/Buffer'
import Program from './gl/Program'
import Renderer from './gl/Renderer'
import VertexArrayObject from './gl/VertexArrayObject'

export default () => {
  // Find the canvas
  const canvas = document.getElementById('canvas')
  const gl = canvas.getContext('webgl2')
  const renderer = new Renderer(gl)

  // Create program
  const program = new Program(gl, shader, [ 'a_position' ], {
    u_resolution: { type: '2f' }
  })
  program.uniforms.u_resolution.set(gl.canvas.width, gl.canvas.height)

  // Create geometry
  const positionBuffer = new Buffer(gl)
  positionBuffer.insert([
    30, 60,
    240, 60,
    30, 90,
    30, 90,
    240, 60,
    240, 90
  ], true)

  // Bind it all together
  const vao = new VertexArrayObject(gl, positionBuffer, program.attributes.a_position, 2, gl.FLOAT)

  // Render the scene
  renderer.resizeViewport()
  renderer.clear()
  program.use()
  vao.bind()
  renderer.drawTriangles(6)
}
