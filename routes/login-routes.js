const User = require('../models/User');
const Admin = require('../models/Admin');

const sessionHandler = (req, res, userType) => hit => {
  if (!hit.length) {
    res.redirect('/');
    return;
  }

  req.session.user = hit[0].rut;
  req.session.work = hit[0].work_id;
  req.session.name = hit[0].name;
  req.session.lastName = hit[0].lastName;
  req.session.availableDays = hit[0].availableDays;
  req.session.type = hit[0].type;
  req.session.country = hit[0].country;

  res.redirect(`/${userType}/home`);
};

const userLogin = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User
    .query()
    .where('rut' , '=', username)
    .andWhere('password', '=', password)
    .then(sessionHandler(req, res, 'worker'));
};

const adminLogin = (req, res) => {
  const username = req.body.admin;
  const password = req.body.password;

  Admin
    .query()
    .where('rut', '=', username)
    .andWhere('password', '=', password)
    .then(sessionHandler(req, res, 'admin'));
};

module.exports = { userLogin, adminLogin };
