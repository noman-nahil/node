const express = require('express');
const router = express.Router();

router.get('/',(request, response)=>{
	if(request.cookie['uname'] !=""){
		var user = {name: 'Noman', id: '17-33935-1'};
	response.render('home/index',user);
	}
	else{
		response.redirect('/login');
	}
	
	
});
module.exports = router;
