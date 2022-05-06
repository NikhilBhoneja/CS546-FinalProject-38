const mongoCollections = require('../config/mongoCollections');
const pharmacy = mongoCollections.pharmacy;
const { ObjectId } = require('mongodb');

async function getAll() {
    const pharmacyCollection = await pharmacy();
    const pharmacies = await pharmacyCollection.find({}).toArray();
    return pharmacies;
}

async function get(id) {
  if (id.trim().length === 0) throw 'Id cannot be an empty string or just spaces';
  if (!id) throw 'Please provide id';
  id=id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  //if (typeof zid !== 'string') throw 'Id must be a string';
  const pharmacyCollection = await pharmacy();
  const pharmacyNew = await pharmacyCollection.findOne({  _id: ObjectId(id)});
  if (pharmacyNew === null) throw 'No pharmacy with that zid';
  return pharmacyNew;  
}

async function getZip(zid) {
    if (zid.trim().length === 0) throw 'zip code cannot be an empty string or just spaces';
    if (!zid) throw 'Please provide zip code';
    zid=zid.trim();
    //if (!ObjectId.isValid(zid)) throw 'invalid object ID';
    if (typeof zid !== 'string') throw 'zip code must be a string';
    const pharmacyCollection = await pharmacy();
    const pharmacyNew = await pharmacyCollection.find({"address.zip":zid}).toArray();
    if (pharmacyNew === null) throw 'No pharmacy found in that zip code';
    return pharmacyNew;  
  }

module.exports={
    getAll,
    get,
    getZip
  }