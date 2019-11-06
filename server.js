var express    = require("express");
var login = require('./routes/loginroutes');
var logout = require('./routes/logoutroutes');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var Clientrouter = express.Router();// test route
var Customerrouter = express.Router();// test route

// router.get('/', function(req, res) {
//     res.json({ message: 'welcome to our upload module apis' });
// });//route to handle user registration
Clientrouter.post('/register',login.Clientsregister);
Clientrouter.post('/login',login.Clientslogin)
Clientrouter.post('/logout',logout.Clientslogout)
app.use('/api/Clients', Clientrouter);
Customerrouter.post('/register',login.Customerregister);
Customerrouter.post('/login',login.Customerlogin)
Customerrouter.post('/logout',logout.Customerlogout)
app.use('/api/Customer', Customerrouter);
app.listen(5000);