
//declaration
const express   		= require('express');
const bodyParser  		= require('body-parser');
const cookieParser  	= require('cookie-parser');
const exSession  		= require('express-session');
const home 				= require('./controllers/home');
const login 			= require('./controllers/login');
const logout			= require('./controllers/logout');


const app = express();

//config
app.set('view engine','ejs');


//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'top secret',
				saveUninitialized: true,
				resave: false}
				));
app.use('/home',home);
app.use('/login',login);
app.use('/logout',logout);
app.use(cookieParser());




app.get('/',(request, response)=>{
	//console.log('requested url /');
	response.send('This is index page');
});


app.listen(3000, (error )=> {
	console.log('express server started at 3000 port');
});