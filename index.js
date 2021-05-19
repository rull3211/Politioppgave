const express = require('express')
const app = express()
const cors = require('cors')
const port = 9090

const comments = require('./src/comments.js')

const profiles = [
  {
    id: '123',
    name: 'Palpatine',
    title: 'Emperor',
    age: 63,
    evil: true,
    description: 'Wanted by the Jedi Council for crimes against the galaxy',
    imageUrl: '/img/sidious.jpg'
    
  },
  {
    id: '321',
    name: 'Darth Vader',
    title: 'Sith Lord',
    age: 23,
    evil: true,
    description: 'Wanted dead or alive by the Jedi Council for manslauther of younglings. ',
    imageUrl: '/img/vader.jpg'
  },
  {
    id: '414',
    name: 'Yoda',
    title: 'Jedi Master',
    age: 877,
    evil: false,
    description: 'Wanted by the Empire for being a nuisance.',
    imageUrl: '/img/yoda.jpg'
  }
]

app.use(express.json())
app.use(cors())

app.get('/profile', (req, res) => {
  res.json(
    profiles.map((p) => {
      return {id: p.id, name: p.name}
    })
  )
})

app.get('/profile/:id', (req, res) => res.json(
  profiles.find(p => p.id === req.params.id)
))

app.get('/comments/:id', (req, res) => res.json(comments.list(req.params.id)))

app.post('/comments/:id', (req, res) => {
  // Expected body: { comment: "This is my comment" }
  console.log(req.body)
  comments.add(req.params.id, req.body.comment);
  return res.json(req.body)

})

app.use(express.static('static'))

app.listen(port, () => {
  console.log(`Criminal profile server running on http://localhost:${port}`)
})

