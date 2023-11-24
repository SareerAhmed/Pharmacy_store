const mongoose = require("mongoose");

const URI =process.env.MONGODB_URI;

const connectDb= async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database Connected Successfully");    
     } catch (error) {
        console.log("Database connection error");
        process.exit(1); // Exiting with a non-zero status code to indicate an error
    }
};

module.exports = connectDb;
