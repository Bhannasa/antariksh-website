import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        const connectionParams = {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        }
        await mongoose.connect('mongodb://localhost:27017/antariksh', connectionParams)
        console.log("Connected to Mongo Database.");
    } catch (error) {
        // console.log(error);
        console.log("!! Could not connect to the database.");
    }
} 
export default connectToDb;