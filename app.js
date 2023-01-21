const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
module.exports = app;


app.get("/", (req, res) => {
    var pathName = path.join(__dirname, "index.html");
    res.sendFile(pathName);
});