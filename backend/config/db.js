const mongoose=require('mongoose');

const connectDB=async()=>{
    const MONGODB_URI="mongodb+srv://chitareavinash6:LBUC89yql09ngObf@cluster0.qe3oi.mongodb.net/?retryWrites=true&w=majority"
    
        try {
            const conn = await mongoose.connect(MONGODB_URI); // Simplified connection
            console.log(`Database connected successfully with ${conn.connection.host}` .cyan.underline);
        }

    catch(error){
       console.log(`Error:${error.message}` .red.bold);
       process.exit(1);
    }
}


module.exports=connectDB;