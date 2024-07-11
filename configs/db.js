// mongoose aur dotenv import karna taake database se connect kar sakein aur .env file use kar sakein
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


// main connect function jo server ko backend se connect karta hai, maine database link privacy ke liye hide kiya hai
const connect = () => {
  return mongoose.connect(
    process.env.MONGODB_URI,{
   
    }).then(()=>{
      console.log("Mongodb connect hogaya hai");
    }).catch((error)=>{
      console.error("Mongodb connect nahi hosaka", error)
    })
};

// connect function export karna
export default connect;


