export default class Buffer {
  constructor (gl) {
    this.gl = gl
    this.buffer = this.gl.createBuffer()
  }
  bind () {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer)
  }
  insert (data, isStatic) {
    this.bind()
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), isStatic ? this.gl.STATIC_DRAW : undefined)
  }
}
