const doctors = require("./data/doctors");
const users = require("./data/main");
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
  let user1 = undefined;
  let user2 = undefined;
  let user3 = undefined;
  let user4 = undefined;
  let user5 = undefined;
  let user6 = undefined;
  let user7 = undefined;
  let user8 = undefined;
  let user9 = undefined;
  let user10 = undefined;

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
      doctor5 = await doctors.create("Neha","Phuloria","76 Washington Ave","Hoboken","NJ","07370","4209211420","Weight Management","NO");
      console.log("doctor 5 details inserted succesfully");
    } catch (error) {
      console.log(error);
  }

  try {
    doctor6 = await doctors.create("Rishabh","Gupta","70 Franklin St","Jersey City","NJ","04630","1231231234","Stress and Mental Health","YES");
    console.log("doctor 6 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor7 = await doctors.create("Patrick","Hill","23 Micheal St","Jacksonville","NY","58212","4332857129","Dermatology","YES");
    console.log("doctor 7 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor8 = await doctors.create("Ashley","Johnson","9 Roles St","Union City","NJ","07159","4522568723","Neurology","YES");
    console.log("doctor 8 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor9 = await doctors.create("Liam","OBrien","76 Washington Ave","Hoboken","NJ","07370","4673547234","Stress and Mental Health","NO");
    console.log("doctor 9 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }

  try {
    doctor10 = await doctors.create("Travis","Willingham","62 Washington Ave","Hoboken","NJ","07370","5130982340","Gastroenterology","NO")
    console.log("doctor 10 details inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user1 = await users.createUsers("Sam","Riegal","02/04/1984","94  Willow Ave", "Union City", "NJ", "07649", "sriegal@stevens.edu","RamSeigal","BigTeeth");
    console.log("User 1  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user2 = await users.createUsers("Marisha","Ray","10/15/1999","230 Kool St", "Newark", "NJ", "06124", "marsha@stevens.edu","Marsha","RayGun");
    console.log("User 2  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user3 = await users.createUsers("Kartik","Ahluwalia","09/03/1999","45 Comic Ave", "Hoboken", "NJ", "07390", "k9@stevens.edu","KartikA","LetMeIn");
    console.log("User 3  inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user4 = await users.createUsers("Neha","Phuloria","10/16/1998","24 Buckingham St", "Union City", "NJ", "06893", "nph@stevens.edu","NehaP","PASS");
    console.log("User 4 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user5 = await users.createUsers("Shanky","Tyagi","01/12/1997","245 Sherman St", "Jercey City", "NJ", "07313", "@stevens.edu","ShankyT","PASS");
    console.log("User 5 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user6 = await users.createUsers("Nikhil","Bhonneja","06/07/1998","9 Brennan Way", "Union City", "NJ", "07193", "nph@stevens.edu","NehaP","PASS");
    console.log("User 6 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user7 = await users.createUsers("Taliesin","Jaffe","06/06/1996","Street Avenue Place", "El Ray Dorado", "XY", "66666", "god@illuminati.com","god","FindsAWay");
    console.log("User 7 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user8 = await users.createUsers("Laura","Bailey","11/08/1992","87 Imogen Ave", "North Bergen", "NJ", "06193", "lbailey@stevens.edu","PurpleJester","ronin");
    console.log("User 8 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user9 = await users.createUsers("Travis","Willingham","05/08/1991","87 Imogen Ave", "North Bergen", "NJ", "06193", "willingham@stevens.edu","Willingblam","ronin");
    console.log("User 9 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  try{
    user10 = await users.createUsers("Matthew","Mercer","11/08/1992","87 Imogen Ave", "North Bergen", "NJ", "06193", "mattmercer@stevens.edu","MattMercer","Marisha");
    console.log("User 10 inserted succesfully");
  } catch (error) {
    console.log(error);
  }
  
  
  let doctorCollection = await doctor();
  let posts = await doctorCollection.toArray();
  
  posts._id = posts._id.toString();
  
  try{  
    await reviews.createReview(posts[0]._id.toString(),"Rude guy",1);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[2]._id.toString(),"Seemed very inconclusive",2);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[1]._id.toString(),"Super helpful and happy to explain all my doubts!",4);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"Best in the industry",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"I'm in love",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"Fixed both my split ends and broken heart",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[6]._id.toString(),"-1 because he seems too perfect to be human",4);
  }catch(error){
    console.log(error);
  }
 
  try{  
    await reviews.createReview(posts[3]._id.toString(),"Made us wait 25 mins on an ONLINE APPOINTMENT",1);
  }catch(error){
    console.log(error);
  }

  try{  
    await reviews.createReview(posts[5]._id.toString(),"Good diagnosis but kept talking to the point where it got annoying",3);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[4]._id.toString(),"OK doctor",3);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[7]._id.toString(),"Helpful",4);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[8]._id.toString(),"Passionate",5);
  }catch(error){
    console.log(error);
  }
  
  try{  
    await reviews.createReview(posts[9]._id.toString(),"Talks very loudly",4);
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
