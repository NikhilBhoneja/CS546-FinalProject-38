const doctors = require("./data/doctors");
//const users = require("./data/main");
const reviews = require("./data/reviews");
const connection = require("./config/mongoConnection");
const mongoCollections = require('./config/mongoCollections');
const doctor = mongoCollections.doctors;
const { connectToDb } = require("./config/mongoConnection");

const main = async () => {
  let doctor1 = undefined;
  let doctor2 = undefined;
  let doctor3 = undefined;
  let doctor4 = undefined;
  let doctor5 = undefined;
  let doctor6 = undefined;
  let doctor7 = undefined;
  let doctor8 = undefined;
  let doctor9 = undefined;
  let doctor10 = undefined;
try {
    doctor1 = await doctors.create("Krithika", "Gandlaur" , "232 Hancock Ave" , "Jersey City" , "NJ", "07307","3456789087", "Orthopedics","True");
    console.log("doctor 1 details inserted succesfully");
  } catch (error) {
    console.log(error);
}

try {
    doctor2 = await doctors.create("Nikhil","Bhoneja", "202 Webster Ave","Jersey City","NJ","07307" ,"5518769782","Oncology","YES");
    console.log("doctor 2 details inserted succesfully");
  } catch (error) {
    console.log(error);
}

try {
    doctor3 = await doctors.create("Shanky","Tyagi", "203 Sherman Ave","Jersey City","NJ","07307" ,"5518769723","Gynaecology","NO");
    console.log("doctor 3 details inserted succesfully");
  } catch (error) {
    console.log(error);
}

try {
    doctor4 = await doctors.create("Kartik","Ahluwalia","204 Webster Ave","Jersey City","NJ","07307","2018769782","Diabetes Consult","YES");
    console.log("doctor 4 details inserted succesfully");
  } catch (error) {
    console.log(error);
}

try {
    doctor5 = await doctors.create("Neha","Phuloria","76 Washington Ave","Hoboken","NJ","07370","4209211420","Weight Management","NO")
    console.log("doctor 5 details inserted succesfully");
  } catch (error) {
    console.log(error);
}

try {
  doctor6 = await doctors.create("Rishabh","Gupta","70 Franklin St","Jersey City","NJ","04630","1231231234","Stress and Mental Health","YES")
  console.log("doctor 6 details inserted succesfully");
} catch (error) {
  console.log(error);
}

try {
  doctor7 = await doctors.create("Patrick","Hill","23 Micheal St","Jacksonville","NY","58212","4332857129","Dermatology","YES")
  console.log("doctor 7 details inserted succesfully");
} catch (error) {
  console.log(error);
}

try {
  doctor8 = await doctors.create("Ashley","Johnson","9 Roles St","Union City","NJ","07159","4522568723","Neurology","YES")
  console.log("doctor 8 details inserted succesfully");
} catch (error) {
  console.log(error);
}

try {
  doctor9 = await doctors.create("Liam","OBrien","76 Washington Ave","Hoboken","NJ","07370","4209211420","Stress and Mental Health","NO")
  console.log("doctor 9 details inserted succesfully");
} catch (error) {
  console.log(error);
}

try {
  doctor10 = await doctors.create("Travis","Willingham","62 Washington Ave","Hoboken","NJ","07370","4209211420","Gastroe","NO")
  console.log("doctor 10 details inserted succesfully");
} catch (error) {
  console.log(error);
}

let doctorCollection = await doctor();
let posts = await doctorCollection.find({}).toArray();
  //posts = posts.reverse()
posts._id = posts._id.toString();
console.log(posts._id);
try{  
  await reviews.createReview(posts._id,"Very helpful",2);
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
