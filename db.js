const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://mongoadmin:mongoadmin@mongonote.ortr0c8.mongodb.net/";
const mongoURI = "mongodb+srv://sages:sages@sages.p1zye6m.mongodb.net/attendance";


// const connectToMongo = () =>{
//     mongoose.connect(mongoURI, console.log("Connected to Mongoose Successfully!"));
// }

connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
    await mongoose.connect(mongoURI);
    await console.log("Connected to Mongoose Successfully!");
}


module.exports = connectToMongo