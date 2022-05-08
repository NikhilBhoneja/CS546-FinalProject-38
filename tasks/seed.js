const doctors = require("./data/doctors");
//const users = require("./data/main");
const reviews = require("./data/reviews");
const connection = require("./config/mongoConnection");
const mongoCollections = require('./config/mongoCollections');
const doctor = mongoCollections.doctors;
const { connectToDb } = require("./config/mongoConnection");

const main = async () => {
  let doctor1 = undefined;
  let user2 = undefined;

  // try {
  //   doctor1 = await doctors.create("Krithika", "Gandlaur" , "Female" , "kgm@stevens.edu" , "2016758976", "232 Hancock" , "Jersey City" , "NJ", "07307", "MBBS" , "Dentist", ["Aetna", "Tata", "Reliance"]);
  //   console.log("doctor details inserted succesfully");
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   doctor1 = await doctors.get(doctor1._id);
  //   console.log(doctor1);
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   doctor2 = await doctors.create("Nikhil", "Bhoneja" , "Male" , "nikhilb@stevens.edu" , "2078958976", "232 Grand st" , "Hoboken" , "NJ", "07030", "MBBS" , "Gupt", ["Aetna", "Idea", "Reliance"]);
  //   console.log("doctors details inserted successfully..");
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   doctor2 = await doctors.get(doctor2._id);
  //   console.log(doctor2);
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   let all = await doctors.getAll();
  //   console.log(all);
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   doctor3 = await doctors.create("James", "Bond" , "Male" , "james@nhu.in" , "9167868976", "456 Hacensek" , "Edison" , "NJ", "07080", "BDS MBBS" , "Orthodontist", ["Tata", "Reliance"]);
  //   console.log("doctor details inserted succesfully");
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   doctor4 = await doctors.create("Preet", "Kumar" , "Male" , "pkumar@max.in" , "2015674325", "2 Bergaline ave" , "Union City" , "NJ", "071456", "BDS" , "Orthodpedic", ["Aetna","apollo","LIC","Tata", "Reliance"]);
  //   console.log("doctor details inserted succesfully");
  // } catch (error) {
  //   console.log(error);
  // }
  
  // try {
  //   user1 = await users.createUsers("Preet", "Kumar" ,"11/30/2021" ,"2 Bergaline ave" , "Union City" , "NJ", "07145","2015674325","pkumar@max.in","usernae12","dyfu658");
  //   console.log("doctor details inserted succesfully");
  // } catch (error) {
  //   console.log(error);
  // }
  // try {
  //   let r1 = await reviews.createReview("627568d7017fd5ac8b3bd401","he is best",2);
  //   console.log("doctor details inserted succesfully");
  // } catch (error) {
  //   console.log(error);
  // }
//};
try {
    doctor1 = await doctors.create("Krithika", "Gandlaur" , "232 Hancock" , "Jersey City" , "NJ", "07307","3456789087", "Dentist","True");
    console.log("doctor details inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  let doctorCollection = await doctor();
  let posts = await doctorCollection.find({}).toArray();
  //posts = posts.reverse()
  posts._id = posts._id.toString();
  console.log(posts._id);
  try{  
    await reviews.createReview(posts._id,"he is best",2);
  }catch(error){
    console.log(error);
  }

 };
main()
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    connection.closeConnection();
  });
