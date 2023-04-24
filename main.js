// Import required modules
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

// Create Express app and HTTP server
const app = express()
const server = http.createServer(app)

// Initialize Socket.io
const io = socketIO(server)

// Serve static files from the "public" directory
app.use(express.static('public'))

app.get('/motion/stop', (req, res) => {
  io.emit('stop_motion')
  res.status(200).send('OK.')
})

app.get('/motion/slow', (req, res) => {
  io.emit('slow_motion')
  res.status(200).send('OK.')
})

app.get('/motion/forward', (req, res) => {
  io.emit('move_forward')
  res.status(200).send('OK.')
})

app.get('/motion/back', (req, res) => {
  io.emit('move_back')
  res.status(200).send('OK.')
})

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
