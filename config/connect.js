const mongoose = require('mongoose');

const options = {
    dbName : 'TEST_1'
}

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017',options)
        console.log("Connected ++");
    } catch (error) {
        console.log('Connection Failed --');
    }
}

module.exports = connectDB;