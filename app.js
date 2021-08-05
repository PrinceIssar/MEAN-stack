//import modules
var express =  require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

// making a express need express method and assign it a variable
var app = express();

// define the file with a variable
const route = require('./routes/route');

//port no
const port = 3000;

// adding a middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static-files
app.use(express.static(path.join(__dirname,'public'))) // "__dirname" will point to your current directory
// using the route
app.use('/api',route);


// testing server
app.get('/',(req,res)=>{ // '/' means homepage
    res.send('frffrr');
});

//bind the server with port
app.listen(port,()=>{
    console.log('server started at port:' +port);
})
