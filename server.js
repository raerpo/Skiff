const express = require('express');
const app = express();
const path = require('path');
const consolidate = require('consolidate');

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/static', express.static('static'));

//default route
// app.get('/', (req, res) => res.redirect('/index'));
app.get('/', (req, res) => res.render('index'));


const listener = app.listen(1000, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
//Test;