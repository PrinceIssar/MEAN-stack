const express = require('express');
const router = express.Router();

router.get('/contacts', (req,res,next)=>{
    res.send('Retrieving the friend list');
});

// you need to export your router
module.exports = router; // it goes to package.json and where it finds nodemon and where our "main" entry point file is app.js and starts the server.
