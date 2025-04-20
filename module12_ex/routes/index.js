var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const ownerData = getOwnerData();
//   res.send(ownerData);
// });

// router.get('/:id([0-9]+)', function(req, res, next) {
//   const ownerData = getOwnerData();
//   if (req.params.id >= ownerData.length) {
//     console.log("Invalid ID");
//     res.status(404);
//     res.send("Resource Not Found");
//   } else {
//   res.send(ownerData[req.params.id]); 
//   }   
// });


// // get user data from json file
// const getOwnerData = () => {
//   const jsonData = fs.readFileSync('car_owners.json');
//   return JSON.parse(jsonData);
// };


module.exports = router;
