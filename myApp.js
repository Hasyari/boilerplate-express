require('dotenv').config();
let express = require('express');
let app = express();

// Lesson 1
// console.log("Hello World");

// Lesson 2
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

// Lesson 3
// app.get("/", (req, res) => {
//     absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath)
// });

// Lesson 4
// app.get("/", (req, res) => {
//     absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath)
// });

// Lesson 5
// app.use("/public", express.static(__dirname + "/public"));

// Lesson 6
// app.get("/json", (req, res) => {
//     res.send({"message": "Hello json"});
// });

// Lesson 7
// app.get("/json", (req, res) => {

//     if (process.env.MESSAGE_STYLE == "uppercase") {
//         res.send({"message": "HELLO JSON"});
//     } else {
//         res.send({"message": "Hello json"});
//     }
// });

// Lesson 8
// app.get("/json", (req, res, next) => {
//     console.log(req.method,  req.path, ' - ',  req.ip);
//     next();
// });

// Lesson 9
// app.get("/json", (req, res, next) => {
//     console.log(req.method,  req.path, ' - ',  req.ip);
//     next();
// });

// Lesson 10
// app.get("/json", (req, res, next) => {
//     console.log(req.method,  req.path, ' - ',  req.ip);
//     next();
// });




















module.exports = app;
