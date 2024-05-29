const mongoose =require('mongoose');

const connectDB = async () => {
   try{
    // console.log("Inside");
    const conn = await mongoose.connect(process.env.DATABASE_URI,{
      useUnifiedTopology: true,
      useNewUrlParser:true,
    });
    console.log(`Successfully connected to Mongodb database:${conn.connection.host}`)
   }
   catch(error){
    console.log(error)
   }
}

module.exports = connectDB