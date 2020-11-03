const express = require('express');
const router = express.Router();

router.get('/',(request, response)=>{
	var user = {name: 'Noman', id: '17-33935-1'};
	response.render('home/index',user);
});
module.exports = router;