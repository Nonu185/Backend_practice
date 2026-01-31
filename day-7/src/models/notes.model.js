const mongoose = require('mongoose');
const noteSchemea = new mongoose.Schema({
    title:String,
    description:String,
})
const notemodel = mongoose.model ("notes",noteSchemea);

module.exports = notemodel;