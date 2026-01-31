const express = require ('express');
const notemodel = require ('./models/notes.model.js');
const app = express();
app.use(express.json());


app.post("/notes", async(req,res)=>{
    const {title,description} = req.body;
  const note = await notemodel.create({
        title,description})
        res.status(201).json(
            {
                message:"Note created successfully",
                note:note
            }
        )
})

app.get("/notes", async(req,res)=>{

const notes = await notemodel.find();
res.status(200).json(
    {
        message:"Notes fetched successfully",
        notes:notes
    }
)

})



module.exports = app;