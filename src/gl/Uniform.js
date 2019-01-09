export default class Uniform {
  constructor (gl, program, uniformName, uniformType) {
    this.gl = gl
    this.program = program
    this.location = this.gl.getUniformLocation(this.program.program, uniformName)
    this.uniformType = uniformType
  }
  set (...args) {
    this.program.use()
    this.gl[`uniform${this.uniformType}`](this.location, ...args)
  }
}
