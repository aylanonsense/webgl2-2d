export const vertexShaderSource = `#version 300 es

in vec4 a_position;

void main() {
  gl_Position = a_position;
}`

export const fragmentShaderSource = `#version 300 es

precision mediump float;

out vec4 outColor;

void main() {
  outColor = vec4(1, 0, 0, 1);
}`
