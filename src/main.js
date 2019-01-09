import { vertexShaderSource, fragmentShaderSource } from './shader/simple'
import { createVertexShader, createFragmentShader, createProgram } from './util/shader'

export default () => {
  const canvas = document.getElementById('canvas')
  const gl = canvas.getContext('webgl2')
  const program = createProgram(gl, createVertexShader(gl, vertexShaderSource), createFragmentShader(gl, fragmentShaderSource))

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
  const positionBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
  const positions = [
    0, 0,
    0, 0.5,
    0.7, 0,
  ]
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)
  gl.enableVertexAttribArray(positionAttributeLocation)

  const size = 2
  const type = gl.FLOAT
  const normalize = false
  const stride = 0
  const offset = 0
  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
  gl.clearColor(0, 0, 0, 0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.useProgram(program)
  gl.bindVertexArray(vao)

  const primitiveType = gl.TRIANGLES
  const offset2 = 0
  const count = 3
  gl.drawArrays(primitiveType, offset2, count)
}
