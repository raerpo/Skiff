const User = require('../models/User');
const Work = require('../models/Work');
const Admin = require('../models/Admin');

// Register User
const registerUser = (req, res) => {
  const data = req.body.data;

  User
  .query()
  .insert({
    rut: data.rut,
    password: data.password,
    name: data.name,
    work_id: 1,
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
      admin_rut: req.session.user,
      totalPlaces: parseInt(data.totalPlaces),
      comune: data.city,
      address: data.address,
      country: 'Chile',
      type: data.type
    }).then(result => {
        Admin
          .query()
          .update({work_id: result.id })
          .where('rut', '=', req.session.user)
          .then(data => {
            req.session.work = result.id;
            res.json({url:'/admin/home'});
          })
          .catch(console.error)
    })
};

module.exports = { registerUser, registerLocation };
