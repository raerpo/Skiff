const User = require('../models/User');
const Work = require('../models/Work');

// Register User
const registerUser = (req, res) => {
  const data = req.body.data;

  User
  .query()
  .insert({
    rut: data.rut,
    password: data.password,
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    type: parseInt(data.type),
    statusAccount: parseInt(data.statusAccount)
  })
  .then((result) => {
    res.json({ url: '/' });
  });
};

// Register Work
const registerLocation = (req, res) => {
  if(req.session.work){
    res.redirect('/admin/home');
    return;
  }

  const data = req.body;

  Work
    .query()
    .insert({
      id: 1,
      admin_rut: req.session.user.toString(),
      totalPlaces: parseInt(data.totalPlaces),
      comune: data.city,
      address: data.address,
      country: 'Chile',
      type: data.type
    }).then((result) => {
      console.log('added: ' , result);
    });
};

module.exports = { registerUser, registerLocation };
