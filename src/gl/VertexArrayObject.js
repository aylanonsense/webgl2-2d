export default class VertexArrayObject {
  constructor (gl, buffer, attribute, size, type) {
    this.gl = gl
    this.vao = gl.createVertexArray()
    this.bind()
    buffer.bind()
    this.gl.enableVertexAttribArray(attribute.location)
    this.gl.vertexAttribPointer(attribute.location, size, type, false, 0, 0)
  }
  bind () {
   this.gl.bindVertexArray(this.vao)
  }
}
