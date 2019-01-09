import Attribute from './Attribute'
import Uniform from './Uniform'

const createShader = (gl, type, source) => {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader
  } else {
    gl.deleteShader(shader)
    throw new Error('Could not create shader')
  }
}

const createVertexShader = (gl, source) => {
  return createShader(gl, gl.VERTEX_SHADER, source)
}

const createFragmentShader = (gl, source) => {
  return createShader(gl, gl.FRAGMENT_SHADER, source)
}

const createProgram = (gl, vertexShaderSource, fragmentShaderSource) => {
  const program = gl.createProgram()
  gl.attachShader(program, createVertexShader(gl, vertexShaderSource))
  gl.attachShader(program, createFragmentShader(gl, fragmentShaderSource))
  gl.linkProgram(program)
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program
  } else {
    gl.deleteProgram(program)
    throw new Error('Could not create shader program')
  }
}

export default class Program {
  constructor (gl, shader, attributes = [], uniforms = {}) {
    this.gl = gl
    this.program = createProgram(this.gl, shader.vertex, shader.fragment)
    this.attributes = {}
    for (let attributeName of attributes) {
      this.attributes[attributeName] = new Attribute(gl, this, attributeName)
    }
    this.uniforms = {}
    for (let [ uniformName, { type } ] of Object.entries(uniforms)) {
      this.uniforms[uniformName] = new Uniform(gl, this, uniformName, type)
    }
  }
  use () {
    this.gl.useProgram(this.program)
  }
}
