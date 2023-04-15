const mongoose = require("mongoose");
const config = require("./config");


/**
 * SET UP DATABASE
 * Connect To Database
 */
const connectDB = async () => {

    const DB = config.db.url.replace('<password>', config.db.password);
    mongoose.set('autoIndex', true);
    mongoose.set('strictQuery', false)

    // Configure mongoose's promise to global promise
    mongoose.promise = global.Promise;

    mongoose.connect(DB);

    const connection = mongoose.connection;

    console.log("connecting to database....")

    connection.once('open', () => console.log("conformed MongoDB database connection established successfully!"));

    connection.on('error', (err) => {
        console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
        process.exit();
    });

    connection.on('connecting', () => {
        console.log('Connecting to Database');
    });

    connection.on('connected', () => {
        console.log('Mongoose Connected to Database');
    });

    connection.on('disconnected', () => {
        console.log('Mongoose Connection is Disconnected.');
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
};

module.exports = connectDB;


