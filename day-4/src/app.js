
const express = require('express');
const app = express();
app.use(express.json());
const notes=[]

app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.send("Note added successfully")
})

app.get("/notes",(req,res)=>{
    res.send(notes);
})

app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id];
    res.send("Note deleted successfully")
})
app.patch("/notes/:id",(req,res)=>{
    res.send("Note updated successfully")
 notes[req.params.id].description=req.body.description;
})

module.exports =app;