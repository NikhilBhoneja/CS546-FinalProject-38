const dbConnection = require('../config/mongoConnection');
const data = require('../data/');

async function main(){
    
    const db = await dbConnection.connectToDb();
    
    const d1 = await data.doctorData.createDoctor("Nikhil","Bhoneja", "202 Webster","Jersey City","NJ","07307" ,"5518769782","Dermatology","YES");
    
    const d2 = await data.doctorData.createDoctor("shanky","t", "203 sharman","Jersey City","NJ","07307" ,"5518769723","Gynaecology","NO");
    
    const d3 = await data.doctorData.createDoctor("kartik","Alluwalia","204 Webster","Jersey City","NJ","07307","2018769782","Diabetes Consult","YES");
    
    await dbConnection.closeConnection();
}

main()
