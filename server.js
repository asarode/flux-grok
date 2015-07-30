/**
 * ===========
 * = MODULES =
 * =========== 
 */
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from 'config'

let app = express();
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
      next()
    });

/**
 * ==========
 * = MODELS =
 * ==========
 */
import Applicant from './app/models/applicant'

/**
 * ==========
 * = ROUTES =
 * ==========
 */
app.get('/', (req, res) => {
  res.send({ message: 'Aw yiss!' })
})

app.get('/applicants', (req, res) => {
  Applicant
    .find()
    .sort('-createdAt')
    .exec((err, data) => {
      if (err) {
        res
          .status(500)
          .send({ error: 'Error fetching all applicants: ', err })
          return
      }
      if (!data.length) {
        res
          .status(404)
          .send({ message: 'Nothing was found, please forgive me' })
          return
      }
      res.json(data)
    })
})

app.get('/applicants/:id', (req, res) => {
  Applicant.findById(req.params.id, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: 'Error fetching user, sorry about that' })
        return
    }
    res.json(data)
  })
})

app.post('/applicants', (req, res) => {
  let applicant       = new Applicant()
  applicant.firstName = req.body.firstName
  applicant.lastName  = req.body.lastName
  applicant.bio       = req.body.bio

  applicant
    .save((err) => {
      if (err) {
        res
        .status(500)
        .send({ message: 'Error saving new applicant: ', err })
        return
      }
      res.json({ message: 'Applicant created, good work buddy' })
    })
})

app.put('/applicants/:id', (req, res) => {
  let update = { $set: { status: req.body.status } }
  Applicant
    .findByIdAndUpdate(req.params.id, update, (err, data) => {
      if (err) {
        res
          .status(500)
          .send({ message: 'Error updating user, my bad'})
          return
      }
      if (!data) {
        res
          .status(404)
          .send({ message: 'Couldn\'t find that user, maybe they\'re lost?' })
          return
      }
      res.json(data)
    })
})

app.delete('applicants/:id', (req, res) => {
  Applicant.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: 'Error deleting the user, they put up a good fight' })
        return
    }
    res.json({ message: 'Deleted user' })
  })
})

/**
 * ============
 * = DATABASE =
 * ============
 */
let { uri, host, port } = config.get('ServerInfo.db')
mongoose.connect(uri, (err, database) => {
  if (err) console.log(err);
  else console.log('(>^_^)> Connected to database. <(^_^<)')
})

/**
 * =============
 * = START APP =
 * =============
 */
let server = app.listen(port, () => {
  console.log('flux-grok is listening on port: ' + port)
})

