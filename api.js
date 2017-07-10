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

  app.post('/register/createAccount', (req, res) => {
    console.log(req.body.data)

    User.query().insert(req.body.data);

    User
      .query()
        .then(person => {
        console.log('La persona ingresada fue: ');
        console.log(person)
      })
  })

  app.post('/session' , (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User
      .query()
      .where('rut' , '=', username)
      .andWhere('password', '=', password)
      .then(user => {
        console.log(user.length, ' users in total');
      })
      .catch(err => {
        console.log('Datos incorrectos');
      });
  })

}
