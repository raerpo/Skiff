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
  app.post('/turns/take/validate', function(req, res){
    req.body.data.forEach(function(data){
      const newData = {
        user_id : req.session.user,
        hour_id : parseInt(data.hour),
        day_id : parseInt(data.day),
        work_id : req.session.work
      }
      Turn
      .query()
      .insert(newData)
      .then(console.log)
      .catch(console.error)
    });
  });

  // <---------------- ADMIN -------------->
  app.get('/admin/home', (req, res) => {
    if(req.session.work == null){
      res.redirect('/admin/work/create')
    }

    res.render('session');
  });
  app.get('/admin/work/create', function(req, res){
    if(req.session.market){
      res.redirect('/admin/home');
    }else{
      res.render('session');
    }
  })
  app.get('/admin/worker/approve', (req, res) => res.render('session'));
  app.get('/admin/worker/view', (req, res) => res.render('session'));
  app.get('/admin/worker/viewAllTurns', (req, res) => res.render('session'));
  app.get('/admin/view/work', (req, res) => res.render('session'));
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
          hour = i;
        }
    };

    Turn
      .query()
      .select('name', 'lastName', 'value')
      .joinRelation('[user, hour]')
      .where('day_id', numberDay)
      .then(results => res.json({results, 'time': {hourNow, minuteNow, secondNow, numberDay}}))
  })

  app.get('/data/lokrsiidlldiiwesoodl', function(req, res){
    res.json({'day' : day});
  });

  // <-------- DATA: TAKE TURN -------->
  app.get('/data/w9rie82jfns8fgd82ks' , function(req, res){
    let result = [];

    Day
    .query()
    .then(days => {
      Hour.query().then(hours => {
        days.map(function(day, index){
          hours.forEach(hour => {
            result.push({
              id_d: day.id_d,
              name: day.name,
              numberDay: day.numberDay,
              id_h: hour.id_h,
              value: hour.value
            });
          })
        })
        res.json(result);
      })
    })
  });

  app.get('/data/kdfkjg82s02kkd9337f' , function(req, res){
    Turn
      .query()
      .where('work_id', '=', req.session.work)
      .andWhere('user_id', '=', req.session.user)
      .then(result => {
        res.json(result);
    })

  })

  //get places Work
  app.get('/data/fvht3sd120980ksd881s', function(req, res){
    Work
      .query()
      .select('totalPlaces')
      .where('id', '=', req.session.work)
      .then(result => {
        res.json(result[0].totalPlaces)
      })
    });

  // get all turns of the work
  app.get('/turns/frsdkff2apod9983' , function(req, res){
    Turn
      .query()
      .where('work_id', '=', req.session.work)
      .then(result => {
        res.json(result);
      });
  })

  // get Workers disabled
  app.get('/data/user/jdqwerdfisllediifkwuyh', function(req, res){
    User
      .query()
      .select('rut', 'name', 'lastNane', 'phone', 'statusAccount')
      .where('work_id', '=', req.session.work)
      .andWhere('statusAccount', '=', 2)
      .then(result => {
        res.json(result);
      })
  });

  app.post('/admin/workers/add', function(req, res){
    const rut = req.body.data.rut;

    User
      .query()
      .update({
        statusAccount: 1
      })
      .where('rut', '=', req.body.data.rut)
      .then(console.log)
  });

  app.post('/admin/workers/remove', function(req, res){
    User
      .query()
      .delete()
      .where('rut', '=', req.body.data.rut)
      .then(console.log);
  });

  app.get('/data/market/dfg43g3gfdg42fyy', function(req, res){
    Work
      .query()
      .where('admin_rut', '=', req.session.user)
      .then(result => res.json(result));
  });

  // getTurnsToView
  app.get('/data/jj8dd1scsa82jsass224', function(req, res){
    Turn
      .query()
      .select('value', 'name')
      .joinRelation('[day, hour]')
      .where('user_id', req.session.user)
      .then(result => res.json(result))
  });

  //get all turns
  app.get('/data/turns/k82rjhsd8883kfdsss', function(req, res){
    Turn
      .query()
      .select('user.name as UserName', 'lastName', 'day_id', 'day.name as dayName', 'id_h', 'value')
      .joinRelation('[user, day, hour]')
      .where('turn.work_id', req.session.work)
      .then(result => res.json(result));
  });

  // get workers in work for admin
  app.get('/data/workers/j563238k9jkggfff4g', function(req, res){
    User
      .query()
      .select('name', 'lastName', 'email', 'phone', 'rut')
      .where('work_id', req.session.work)
      .then(result => res.json(result))

  });

}
