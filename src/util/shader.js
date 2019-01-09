const createShader = (gl, shaderType, source) => {
  const shader = gl.createShader(shaderType)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return shader
  } else {
    gl.deleteShader(shader)
    throw new Error('Could not create shader')
  }
}

export const createVertexShader = (gl, source) => {
  return createShader(gl, gl.VERTEX_SHADER, source)
}

export const createFragmentShader = (gl, source) => {
  return createShader(gl, gl.FRAGMENT_SHADER, source)
}

export const createProgram = (gl, vertexShader, fragmentShader) => {
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
    return program
  } else {
    gl.deleteProgram(program)
    throw new Error('Could not create shader program')
  }
}
