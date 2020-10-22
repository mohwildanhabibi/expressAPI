var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
	try{
		axios.get("https://reqres.in/api/users")
			.then(response => res.json(response.data))
			.catch(err => res.send(err));
	}
	catch(err){
		console.error("Error ==> ", err);
	}
});

router.get('/:page', function(req, res, next) {
	console.log(req.params);
	try{
		axios.get("https://reqres.in/api/users", {params:{page: req.params.page}})
			.then(response => res.json(response.data))
			.catch(err => res.send(err));
	}
	catch(err){
		console.error("Error ==> ", err);
	}
});

router.get('/coba', function(req, res, next) {
  	res.send('path coba');
});

module.exports = router;
