const path = require('path');
const consolidate = require('consolidate');
const session = require('cookie-session');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const helmet = require('helmet');
const date = new Date;
const day = date.getDate();
const schedule = require('node-schedule');
app.use(helmet());
app.use(bodyParser());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'market'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

const expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour
app.use(session({
  name: 'Ms',
  keys: ['key1', 'key2'],
  cookie: { secure: true,
            httpOnly: true,
            domain: 'localhost',
            path: '/',
            expires: expiryDate
        }
  })
);

//redirect to home
function redicForAdmin(req, res){
	if(!req.session.user){
		res.redirect('/');
	}else{
		if(req.session.type === 1){
			res.redirect('/home');
		}else{
			res.render('session');
		}
	}
}

//redirect to admin/home
function redicForUser(req, res){
	if(!req.session.user){
		res.redirect('/');
	}else{
		if(req.session.type === 0){
			res.redirect('/admin/home');
		}else{
			res.render('session');
		}
	}
}


app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates'));

//middlewares
app.use('/static', express.static('static'));

//default route
app.get('/', (req, res) => res.redirect('/index'));

app.get('/index', (req, res) => res.render('index'));

app.post('/admin/session' , function(req, res){
	const query = 'SELECT * FROM admin';
	const username = req.body.admin;
	const password = req.body.password;

	connection.query( query , function(err, results){
		if (err) throw err
		const hit = results
			.filter(user => user.rut == username && user.password == password);

		if(hit.length == 1){
			req.session.user = hit[0].rut;
			req.session.market = hit[0].id_market;
			req.session.name = hit[0].name;
			req.session.lastName = hit[0].lastName;
			req.session.avaibleDays = hit[0].avaibleDays;
			req.session.type = hit[0].type;
			req.session.country = hit[0].country;
		    res.redirect('/admin/home');
		}
		else{
			res.redirect('/');
		}
	})
})

app.post('/session' , function(req, res){
	const query = 'SELECT * FROM user';
	const username = req.body.username;
	const password = req.body.password;

	connection.query( query , function(err, results){
		if (err) throw err
		const hit = results
			.filter(user => user.rut == username && user.password == password);

		if(hit.length == 1){
			if(results[0].statusAccount == 1){
				req.session.user = hit[0].rut;
				req.session.market = hit[0].id_market;
				req.session.name = hit[0].name;
				req.session.lastName = hit[0].lastName;
				req.session.avaibleDays = hit[0].avaibleDays;
				req.session.type = hit[0].type;
			    res.redirect('/home');
			}else{
				res.redirect('/');
			}	
		}
	})
})

// if(!req.session.username){res.redirect("/")}
// app.get('/login', (req, res) => res.render('index'));
app.get('/register', (req, res) => res.render('index'));
app.post('/register/createAccount', function(req, res){

	connection.query(`SELECT avaibleDays, id_market FROM admin WHERE keygen='${req.body.key}'`, function(err, results){
		req.body.data.id_market = results[0].id_market;
		req.body.data.avaibleDays = results[0].avaibleDays;
		const data = req.body.data;

		connection.query('INSERT INTO user SET ?' , data , function (err, results, fields){
			if (err) throw error;
		});
	})

	
})

app.get('/contact', (req, res) => res.render('index'));
app.get('/about', (req, res) => res.render('index'));
// app.get('/admin/login' , (req, res) => res.render('index'));

//session admin
app.get('/admin/home' ,function(req, res){
	if(req.session.market == null){
		res.redirect('/admin/market/create');
	}else{
		redicForAdmin(req, res);
	}
});

app.get('/admin/workers/approve', function(req, res){
	if(req.session.market == null){
		res.redirect('/admin/market/create');
	}else{
		redicForAdmin(req, res);
	}
});

app.get('/admin/workers/view', function(req, res){
	if(req.session.market == null){
		res.redirect('/admin/market/create');
	}else{
		redicForAdmin(req, res);
	}
});

app.get('/admin/workers/viewAllTurns', function(req, res){
	if(req.session.market == null){
		res.redirect('/admin/market/create');
	}else{
		redicForAdmin(req, res);
	}
});

app.get('/admin/market/create', function(req, res){
	redicForAdmin(req, res);
	if(req.session.market){ res.redirect('/admin/home') };
})

app.get('/admin/view/supermarket', function(req, res){
	redicForAdmin(req, res);
})

app.post('/admin/workers/remove', function(req, res){
	redicForAdmin(req, res);
	const rut = req.body.data.rut;
	connection.query(`DELETE FROM user WHERE rut='${rut}'`, function (error, results, fields){
		if (error) throw error;
	});
})

app.post('/admin/workers/add', function(req, res){
	redicForAdmin(req, res);
	const statusAccount = 1;
	const rut = req.body.data.rut;

	connection.query(`UPDATE user SET statusAccount=${statusAccount} WHERE rut='${rut}'`, function (error, results, fields){
		if (error) throw error;
	});
})

//post Data registerMarket
app.post('/admin/market/create/validate', function(req, res){
	redicForAdmin(req, res);
	if(req.session.market){ res.redirect('/admin/home') };

		const newData = {
			rut_admin: req.session.user,
			totalBoxes : req.body.numberBox,
			comune : req.body.city,
			address : req.body.address,
			country: req.session.country,
			type : req.body.type
		}

		connection.query('INSERT INTO superMarket SET ?' , newData, function (err, results, fields){
			if (err) throw error;
		});

		connection.query(`SELECT rut_admin, id FROM superMarket`, function(err, results){
			results.forEach(function(data){
				if(data.rut_admin === req.session.user){
					connection.query(`UPDATE admin SET id_market=${data.id} WHERE rut='${data.rut_admin}'`);
				}
			})
		})
})
// end session admin


// session user
app.get('/home', function(req, res){
	redicForUser(req, res);
});

app.get('/turns/take', function(req, res){
	redicForUser(req, res);
});

app.post('/turns/take/validate', function(req, res){
	redicForUser(req, res);
	if(req.session.type === 0) res.redirect('/admin/home');
	req.body.data.forEach(function(data){
		const newData = {
			id_user : req.session.user,
			id_hour : parseInt(data.hour),
			id_day : parseInt(data.day),
			id_superMarket : req.session.market
		}
		connection.query('INSERT INTO turns SET ?' , newData, function (err, results, fields){
			if (err) throw error;
		});
	});
});

app.get('/turns/view', function(req, res){
	redicForUser(req, res);
});

app.get('/turns/viewAll', function(req, res){
	redicForUser(req, res);
});

app.get('/turns/change', function(req, res){
	redicForUser(req, res);
});	
app.get('/settings', function(req, res){
	redicForUser(req, res);
});

app.get('/exit', function(req, res){ 	
	req.session = null;
	res.redirect('/index');
});
//end session user


// drawTurns
app.get('/data/w9rie82jfns8fgd82ks' , function(req, res){
	const query = "SELECT * FROM days, hours";
	connection.query(query , function(err, results){
		res.json(results);
	})
})

// getTurnForIdSupermarket
app.get('/data/kdfkjg82s02kkd9337f' , function(req, res){
	const query = `SELECT * FROM turns WHERE id_superMarket = ${req.session.market} AND id_user = '${req.session.user}'`;
	connection.query(query , function(err, results){
		res.json(results);
	})
})

//getBoxSuperMarket
app.get('/data/fvht3sd120980ksd881s', function(req, res){
	const market = req.session.market;

	const query = `SELECT totalBoxes FROM superMarket WHERE id=${market}`
	connection.query(query , function(err, results){
		res.json(results[0].totalBoxes);
	})
})

// getTurnsToView
app.get('/data/jj8dd1scsa82jsass224', function(req, res){
	const query =  `SELECT name, value FROM days, hours, turns 
					WHERE turns.id_user='${req.session.user}'
					AND days.id_d=turns.id_day
					AND hours.id_h=turns.id_hour`;

	connection.query(query, function(err, results){
		res.json(results);
	})
});

app.get('/data/cxcdjewikkd2k34kk56kkfssh' , function(req, res){
	// date now
	const dateNow = new Date;
	const hourNow = dateNow.getHours();
	const minuteNow = dateNow.getMinutes();
	const secondNow = dateNow.getSeconds();

	const user = req.session.user;
	var hour = 0;
	var numberDay = (dateNow.getDay() - 1);
	if(numberDay == -1) numberDay = 6;
	const hours = [[8,10], [10,12], [12,14], [14,16], [16,18], [18,20], [20, 22]]

	for(var i = 0;i < hours.length; i++){ if(hourNow >= hours[i][0] && hourNow < hours[i][1]) hour = i;	}
	const query = `SELECT user.name, lastName, value FROM user, turns, hours
			WHERE turns.id_hour=${hour}
			AND turns.id_day=${numberDay}
			And user.rut=turns.id_user
			AND hours.id_h=turns.id_hour`;

	connection.query(query , function(err, results){
		res.json({ results, 'time': {hourNow, minuteNow, secondNow, numberDay} });
	})
})

app.get('/data/lokrsiidlldiiwesoodl', function(req, res){
	res.json({'day' : day});
});

// keys
app.get('/data/k/ffgh4dwwwwq24rrgtyuwe', function(req, res){
	const query = `SELECT keygen FROM admin`;

	connection.query(query, function(err, results){
		res.json(results);
	});
});

// get Workers disabled
app.get('/data/user/jdqwerdfisllediifkwuyh', function(req, res){
	const query = `SELECT rut, name, lastName, phone, statusAccount FROM user WHERE id_market=${req.session.market} AND statusAccount=2`;

	connection.query(query, function(err, results){
		res.json(results);
	});

});

// get all turns
app.get('/data/turns/k82rjhsd8883kfdsss', function(req, res){
	const query = `SELECT 
				   user.name, 
				   user.lastName,
				   days.name as nameDay,
				   hours.value
                   FROM turns, days, hours, user
                   WHERE days.id_d=turns.id_day 
                   AND hours.id_h=turns.id_hour
                   AND user.rut=turns.id_user
                   AND id_superMarket=${req.session.market}`;

	connection.query(query, function(err, results){
		res.json(results);
	});

});


// getSuperMarket --> viewMarket
app.get('/data/market/dfg43g3gfdg42fyy', function(req, res){
	const query = `SELECT * FROM superMarket WHERE rut_admin=${req.session.market}`;

	connection.query(query, function(err, results){
		res.json(results);
	});

});

// get workers in supermarket for admin --> viewMarket
app.get('/data/workers/j563238k9jkggfff4g', function(req, res){
	const query = `SELECT name, lastName, email, phone, rut FROM user WHERE id_market=${req.session.market}`;

	connection.query(query, function(err, results){
		res.json(results);
	});

});

const listener = app.listen(3000, () =>
  console.log(`Running app on ${listener.address().address}${listener.address().port}`));
//Test;
