const { application } = require("express");
const app = require("./app");
const port = 4000;
app.listen(port, ()=> console.log(`the system is listening on port: ${port}`));
