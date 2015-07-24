/**
 * ===========
 * = MODULES =
 * =========== 
 */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from 'config';
import Handlers from './app/handlers';

let app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
      next();
    });

/**
 * ==========
 * = MODELS =
 * ==========
 */


/**
 * ==========
 * = ROUTES =
 * ==========
 */
app.get('/', (req, res) => {
  res.send({ message: 'Aw yiss!' });
})
// app.get('/', Handlers.test(req, res));
// app.get('/applicants', Handlers.fetchApplicants(req, res));
// app.post('/applicants', Handlers.createApplicant(req, res));
// app.put('/applicants/:id', Handlers.moveApplicant(req, res));
// app.delete('applicants/:id', Handlers.deleteApplicant(req, res));

/**
 * ============
 * = DATABASE =
 * ============
 */
let { uri, host, port } = config.get('ServerInfo.db');
mongoose.connect(uri, (err, database) => {
  if (err) console.log(err);
  else console.log('(>^_^)> Connected to database. <(^_^<)');
});

/**
 * =============
 * = START APP =
 * =============
 */
let server = app.listen(port, () => {
  console.log('flux-grok is listening on port: ' + port);
});

