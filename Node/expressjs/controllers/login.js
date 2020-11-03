const express = require('express');
const router = express.Router();

router.get('/',(request, response)=>{
	response.render('login/index');
});
router.post('/', (request , response)=>{

	//username
	//console.log(request);
	//console.log(request.body);
	//console.log(request.body.username);
	//console.log(request.body.username);
	if((request.body.username == request.body.password) && request.body.username!="" )
	{
		//request.session.username = request.body.username;
		response.cookie('uname', 'Noman')
		response.redirect('/home');
	}
	else{
		response.redirect('/login')
	}
	//password
	//response.redirect('/home');
});
module.exports = router;


