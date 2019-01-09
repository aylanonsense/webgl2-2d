export default class Attribute {
  constructor (gl, program, attributeName) {
    this.gl = gl
    this.program = program
    this.location = this.gl.getAttribLocation(this.program.program, attributeName)
  }
}
