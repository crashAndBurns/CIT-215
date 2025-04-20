var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const ownerData = getOwnerData();
  res.send(ownerData);
});

router.get('/new', function(req, res){
  res.render('owners_new');
});

router.post('/', function(req, res) {
  // get existing owner data
  const existOwners = getOwnerData();

  // get ownerData from the request body
  const ownerData = req.body;

  // check to see if fields are missing
  if (ownerData.id == null || ownerData.first_name == null ||
      ownerData.last_name == null ||  ownerData.email == null ||
      ownerData.car == null) {
        return res.status(401).send({error: true, msg: 'Owner data missing'})
      };

  // check to see of Owner a lready exists here I chose id as a unique
  // idenfier, assuming that all records are given a unique number id
  const findExist = existOwners.find(owner => owner.id === ownerData.id);
  if (findExist) {
    return res.status(409).send({error: true, msg: 'Owner ID already exists'})
  };
  
  // add owner to the data
  existOwners.push(ownerData);

  // save the owner data
  saveOwnerData(existOwners);
  res.status(200).send({success: true, msg: "Owner data added successfully"});  
});

router.get('/:id([0-9]+)', function(req, res) {
  const ownerData = getOwnerData();
  if (req.params.id >= ownerData.length) {
    console.log("Invalid ID");
    res.status(404);
    res.send("Resource Not Found");
  } else {
  res.send(ownerData[req.params.id]); 
  }   
});

router.put('/:id([0-9]+)', function(req, res) {
  const id = req.params.id;

  const ownerData = req.body;

  const existOwners = getOwnerData()

  const findExist = existOwners.find(owner => owner.id == id);
  if (!findExist) {
    return res.status(409).send({error: true, msg: 'Owner id not found.\n'});
  };

  const updateOwner = existOwners.filter(owner => owner.id != id);

  updateOwner.push(ownerData);

  saveOwnerData(updateOwner);

  res.send({success: true, msg: 'Owner updated successfully\n'});
});

// router.get('/:id/edit', function(req, res) {
//   res.render('owners_edit');
// });

router.delete('/:id([0-9]+)', function(req, res) {
  const id = req.params.id
    //get the existing userdata
    const existOwners = getOwnerData()
    //filter the userdata to remove it
    const filteredOwner = existOwners.filter( owner => owner.id != id )
    if ( existOwners.length === filteredOwner.length ) {
        return res.status(409).send({error: true, msg: 'Owner Id does not exist'})
    }
    //save the filtered data
    saveOwnerData(filteredOwner)
    res.send({success: true, msg: 'User removed successfully'})
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

