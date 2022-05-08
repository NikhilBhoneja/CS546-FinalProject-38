const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
let {ObjectId} = require('mongodb');
const bcrypt = require("bcrypt");
const saltRounds = 16;
const doctorData = require('./doctors')

const getAll = async function getAll() {

    const userCollection = await users();
    const userList = await userCollection.find({}).toArray();
    if(!userList) userList = [];
    userList.forEach((x) =>{
        let t_Id = x._id.toString();
        x._id = t_Id;
    })
    return userList;
}

async function get(id){
    if (!id) {
      throw 'An ID is required to search for an Doctor';
    }
    if (!id || typeof id != 'string') {
      throw 'A id of type string must be provided for doctor!';
    }
    if (typeof id === 'string') {
      id = ObjectId(id);
    } else if (!(id instanceof ObjectId)) {
      throw 'Invalid type of id:needs to be string';
    }
    const userCollection = await users();
    let parsedId = ObjectId(id);
    const user = await userCollection.findOne({_id: parsedId})
    if (user === null) {throw "No doctor with that id"}
    return user
  }
// const get = async function get(id){

//     if(!id) throw "No id is provided";
//     if(typeof id !== "string") throw "The id provided is not a string";
    
//     let u_Id = await ObjectId(id)
//     const userCollection = await users();
//     let user = await userCollection.findOne({_id: u_Id});
//     console.log(user)
//     if(user == null) throw "no user exists with this id";
//     user._id = id;
//     return user;
// }

async function checkAppointment(id,doctorId){

    if(!id) throw "No id was provided";
    if(typeof id !== "string") throw "Provided id is not a string";
    
    if(!doctorId)throw "No doctor id is provided";
    if(typeof doctorId !="string") throw "Provided doctor id is not dtring";
   
    let user = await get(id);
    let check = false;
    if(doctorId === user.Appointment_details) check = true;
    return check;
}

module.exports = {
    getAll,
    get,
    checkAppointment
}