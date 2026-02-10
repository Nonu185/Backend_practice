const mongoose = require('mongoose');
require("dotenv").config();

const noteschema = new mongoose.Schema({
    title: String,
    description: String,

})
const notemodel = mongoose.model("notes", noteschema);
module.exports = notemodel;