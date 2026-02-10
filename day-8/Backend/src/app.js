const express = require('express');
const app = express();
const notemodel = require('./models/notes.model');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.post("/notes",async (req,res) => {
    const {title,description} = req.body;
    const newNote = await notemodel.create({
        title,
        description
    })
    res.status(201).json({
        message:"Note created successfully",
        note:newNote});
})

app.get("/notes",async (req,res) => {
    const notes = await notemodel.find();
    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    })
})

app.delete("/notes/:id",async (req,res) => {
    const {id} = req.params;
    await notemodel.findByIdAndDelete(id);
    res.status(200).json({
        message:"Note deleted successfully"
    })
})


app.patch("/notes/:id",async (req,res) => {
    const {id} = req.params;
    const {description} = req.body;
     await notemodel.findByIdAndUpdate(id,{description})

     res.status(200).json({
        message:"Note updated successfully"
})
})


module.exports = app;