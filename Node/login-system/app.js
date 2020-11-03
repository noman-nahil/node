const express = require('express');
const home = require('./controllers/home')
const login = require('./controllers/login')
//const ejs = require('ejs');
const app = express();


//const port = 3000;
//config
app.set('view engine','ejs');
//middleware
app.use('/home',home);
app.use('/login',login);


app.get('/',(request ,response)=>{
	response.send('This index page');
});
app.listen(3000, (error )=> {
	console.log('express server started at port nuymber- 3000');
});
