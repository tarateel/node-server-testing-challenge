const express = require('express');
const Companions = require('./companions/companions-model');
const morgan = require('morgan');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({
    message: "Welcome to our list of The Doctor's Companions, starting from the 9th Doctor.",
  })
})

server.get('/companions', async (req, res, next) => {
  try {
    const companions = await Companions.find()
    res.status(200).json(companions)
  } catch (err) {
    next(err)
  }
})

server.post('/companions', async (req, res, next) => {
  try {
    const companion = await Companions.insert(req.body)
    res.status(201).json(companion)
  } catch (err) {
    next(err)
  }
})

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong',
  })
})

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n=> Server up at http://localhost:${port}\n`)
  })
}

module.exports = server