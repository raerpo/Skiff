const express = require('express');
const app = express();
const api = require('./api');
const Knex = require('knex');
const knexConfig = require('./knexfile');
const path = require('path');
const consolidate = require('consolidate');
const session = require('cookie-session');
const bodyParser = require('body-parser');
const objection = require('objection');
const schedule = require('node-schedule');
const date = new Date;
const day = date.getDate();
const Model = require('objection').Model;

const knex = Knex(knexConfig.development);
Model.knex(knex)

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
  name: 'Ms',
  keys: ['key1', 'key2'],
  cookie: {
      secure: true,
      httpOnly: true,
      domain: 'localhost',
      path: '/',
      expires: expiryDate
    }
  })
);


api(app);

const listener = app.listen(3000, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`)
);
