const express = require('express');
const app = express();

const listener = app.listen(1000, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
//Test;