//Part II
const express = require ("express");
const cors = require("cors");
const app = express();
 const PORT = 3001;
 app.use(cors());

 app. get("/api/hello",(req,res) => res.send("Hello from Express"));

 app.listen(PORT,() =>{
    console.log("listening on port", PORT);
 });






 //Part I
//You will send data to an Express server with React and display it.

// const express = require ("express");
// const cors = require("cors");
// const app = express();
//  const PORT = 3001;
//  app.use(cors());

//  app. get("/api/hello",(req,res) => res.send("Hello from Express"));

//  app.listen(PORT,() =>{
//     console.log("listening on port", PORT);
//  });