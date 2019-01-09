export default class Renderer {
  constructor (gl) {
    this.gl = gl
  }
  resizeViewport () {
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height)
  }
  clear () {
    this.gl.clearColor(0, 0, 0, 0)
    this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }
  drawTriangles (numTriangles) {
    this.gl.drawArrays(this.gl.TRIANGLES, 0, numTriangles)
  }
}
