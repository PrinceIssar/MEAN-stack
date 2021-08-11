const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");




dotenv.config();
//connect to Mongodb
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true, useNewUrlParser:true},
    ()=> console.log("Connected to Mongodb")
);


//import routes
const friendRoutes = require("./routes/friend");

//middleware
app.use(express.json()); //now don't need to install body parser
app.use(cors()); 

//route middelware
app.use("/api/friends", friendRoutes);

app.listen(4000, ()=>console.log("server is running on port 4000"));


