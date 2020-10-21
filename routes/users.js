var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('/users GET');
  try{
    axios.get("https://reqres.in/api/users?page=1")
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
