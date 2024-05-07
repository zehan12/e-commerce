// internal lib
const cluster = require("cluster");
const os = require("os");

// internal imports
const app = require("./app");
const config = require("./config/config");
const connectDB = require("./config/db");

const serverPort = config.port;

// get no. of port present in our cup
const noOfCpus = os.cpus().length;

connectDB();

// handle when EPIPE error comes up
process.stdout.on('error', function (err) {
    if (err.code == "EPIPE") {
        process.exit(0);
    }
});

if (config.env === "production") {
    if (cluster.isMaster) {
        console.log(process.pid + " In Master")
        for (let i = 0; i < noOfCpus; i++) {
            cluster.fork();
        }
        cluster.on('exit', () => {
            console.log('one worker destroy');
            cluster.fork()
        })
    } else {
        app.listen(serverPort)
    }
} else {
    app.listen(serverPort,
        () => {
            console.log(`
            ################################################
            🚀 Server listening on port: ${serverPort} 🚀
            ################################################
    `)
        })
}


