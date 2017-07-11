const Admin = require('./models/Admin');
const AdminUser = require('./models/AdminUser');
const AdminWork = require('./models/AdminWork');
const Day = require('./models/Day');
const Hour = require('./models/Hour');
const Turn = require('./models/Turn');
const User = require('./models/User');
const UserWork = require('./models/UserWork');
const Work = require('./models/Work');
const date = new Date;
const day = date.getDate();

const registerRoutes = require('./routes/register-routes');
const loginRoutes = require('./routes/login-routes');

module.exports = (app) => {
  // <---------------- HOME --------------->
  app.get('/', (req, res) => res.redirect('/home'));
  app.get('/index', (req, res) => res.redirect('/home'))
  app.get('/home', (req, res) => res.render('index'));
  app.get('/contact', (req, res) => res.render('index'));
  app.get('/about', (req, res) => res.render('index'));
  app.get('/register', (req, res) => res.render('index'));

  // <---------------- USER --------------->
  app.get('/worker/home', (req, res) => res.render('session'));
  app.get('/worker/turns/take', (req, res) => res.render('session'));
  app.get('/worker/turns/view', (req, res) => res.render('session'));
  app.get('/worker/turns/viewAll', (req, res) => res.render('session'));

  // <---------------- ADMIN -------------->
  app.get('/admin/home', (req, res) => { if(req.session.work == null){ res.redirect('/admin/market/create');}});
  app.get('/admin/market/create', function(req, res){
    if(req.session.market){
      res.redirect('/admin/home');
    }else{
      res.render('session');
    }
  })
  app.get('/admin/worker/approve', (req, res) => res.render('session'));
  app.get('/admin/worker/view', (req, res) => res.render('session'));
  app.get('/admin/worker/viewAllTurns', (req, res) => res.render('session'));
  app.get('/admin/view/supermarket', (req, res) => res.render('session'));
  app.get('/exit', function(req, res){
    req.session = null;
    res.redirect('/');
  });

  // Register User
  app.post('/register/createAccount', registerRoutes.registerUser);
  // Register Work
  app.post('/admin/market/create/validate', registerRoutes.registerLocation);
  // Login User
  app.post('/session', loginRoutes.userLogin);
  // Logon Admin
  app.post('/admin/session', loginRoutes.adminLogin);

  // <------------------- JSON DATA ---------------->
  app.get('/data/cxcdjewikkd2k34kk56kkfssh' , function(req, res){
  // date now
    const dateNow = new Date;
    const hourNow = dateNow.getHours();
    const minuteNow = dateNow.getMinutes();
    const secondNow = dateNow.getSeconds();

    const user = req.session.user;
    var hour = null;
    var numberDay = (dateNow.getDay() - 1);
    if(numberDay == -1) numberDay = 6;
    const hours = [[8,10], [10,12], [12,14], [14,16], [16,18], [18,20], [20, 22]]

    for (var i = 0;i < hours.length; i++){
        if (hourNow >= hours[i][0] && hourNow < hours[i][1]){
          console.log(i);
          hour = i;
        }
    };

    res.json({ status: 'ok' });

    // const query = `SELECT user.name, lastName, value FROM user, turns, hours
    //   WHERE turns.id_hour=${hour}
    //   AND turns.id_day=${numberDay}
    //   And user.rut=turns.id_user
    //   AND hours.id_h=turns.id_hour`;

    // connection.query(query , function(err, results){
    //   res.json({ results, 'time': {hourNow, minuteNow, secondNow, numberDay} });
    // })
  })

  app.get('/data/lokrsiidlldiiwesoodl', function(req, res){
    res.json({'day' : day});
  });

  app.get('/data/w9rie82jfns8fgd82ks' , function(req, res){
  // const query = "SELECT * FROM days, hours";
  // connection.query(query , function(err, results){
  //   res.json(results);
  // })
  })

}
