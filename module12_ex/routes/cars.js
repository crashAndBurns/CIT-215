var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const owners = getOwnerData();

  const ownersCount = owners.reduce((acc, car) => {
    if (!acc[car.car.make]) {
      acc[car.car.make] = {numOwners: 0};
    }

    acc[car.car.make].numOwners += 1;
    return acc;
  }, {});
  res.status(200).send(ownersCount);
});

// get user data from json file
const getOwnerData = () => {
  const jsonData = fs.readFileSync('./car_owners.json');
  return JSON.parse(jsonData);
};

// read user data from json file
const saveOwnerData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync('./car_owners.json', stringifyData);
};


module.exports = router;
