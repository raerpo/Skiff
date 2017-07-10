const Admin = require('./models/Admin');
const AdminUser = require('./models/AdminUser');
const AdminWork = require('./models/AdminWork');
const Day = require('./models/Day');
const Hour = require('./models/Hour');
const Turn = require('./models/Turn');
const User = require('./models/User');
const UserWork = require('./models/UserWork');
const Work = require('./models/Work');

module.exports = (app) => {
  // <---------------- HOME --------------->
  app.get('/', (req, res) => res.redirect('/home'));
  app.get('/index', (req, res) => res.redirect('/home'))
  app.get('/home', (req, res) => res.render('index'));
  app.get('/contact', (req, res) => res.render('index'));
  app.get('/about', (req, res) => res.render('index'));
  app.get('/register', (req, res) => res.render('index'));

  // Register User
  app.post('/register/createAccount', (req, res) => {
    const data = req.body.data;

    User.query()
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
      console.log('a new user was created')
      res.json({ url: '/' });
    });
  });

  // Login User
  app.post('/session' , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User
      .query()
      .where('rut' , '=', username)
      .andWhere('password', '=', password)
      .then( result => {
        console.log(result);
      })
      .catch(err => {
        console.log('Datos incorrectos');
      });
  })

}
