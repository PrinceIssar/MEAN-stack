const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
    name: String, //title
    phone: String, //price
    image: String,
    details: String

});

module.exports = mongoose.model("Friend", friendSchema);
