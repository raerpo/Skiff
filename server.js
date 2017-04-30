const express = require('express');
const app = express();
const path = require('path');
const consolidate = require('consolidate');

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/static', express.static('static'));

// index without session
require('./routes/visit')(app); 

const listener = app.listen(1000, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));