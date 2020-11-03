const express = require('express');
const router = express.Router();

router.get('/',(request, response)=>{
	res.cookie['uname'] = "";
	response.redirect('/login');
});

module.exports = router;