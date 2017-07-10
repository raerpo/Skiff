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
      .andWhere('statusAccount', '=', 1)
      .then( hit => {
        if(hit.length == 1){
          req.session.user = hit[0].rut;
          req.session.work = hit[0].work_id;
          req.session.name = hit[0].name;
          req.session.lastName = hit[0].lastName;
          req.session.availableDays = hit[0].availableDays;
          req.session.type = hit[0].type;
          req.session.country = hit[0].country;
          console.log('session usuario: ', req.session)
          res.redirect('/worker/home');
        }else{
          res.redirect('/')
        }
      });
    })

  app.post('/admin/session', (req, res) => {
    const username = req.body.admin;
    const password = req.body.password;

    Admin
      .query()
      .where('rut', '=', username)
      .andWhere('password', '=', password)
      .then( hit => {
        if(hit.length == 1){
          req.session.user = hit[0].rut;
          req.session.work = hit[0].work_id;
          req.session.name = hit[0].name;
          req.session.lastName = hit[0].lastName;
          req.session.availableDays = hit[0].availableDays;
          req.session.type = hit[0].type;
          req.session.country = hit[0].country;
          res.redirect('/admin/home');
        }else{
          res.redirect('/')
        }
      })
    })
}
