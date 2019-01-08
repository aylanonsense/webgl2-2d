const path = require('path')
const express = require('express')
const webpack = require('webpack')

const port = process.env.PORT || 3000

// Create a server
const app = express()

// Bundle index.js
webpack({
  mode: 'none',
  target: 'web',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src')
    ]
  }
}, (err, stats) => {
  stats.compilation.warnings.forEach(console.warn)
  stats.compilation.errors.forEach(console.error)
});

// Set up routes
app.get('/index.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.js'))
})
app.use(express.static('public'))

// Start the server
app.listen(port)
console.log(`Server listening on port ${port}`)
