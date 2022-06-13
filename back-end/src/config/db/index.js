const mongoose = require('mongoose');

async function connect() {
    try {        
        await mongoose.connect((process.env.MONGODB_URL),{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Can not connect to MongoDB " + error.message);
    }

}

module.exports = { connect }