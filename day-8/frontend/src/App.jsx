import { useState,useEffect } from 'react'
import axios from 'axios'
import './index.css'

function App() {


  const [editnote, seteditnote] = useState(null)
  const [notes, setnotes] = useState([])
  function fetchdata (){
    axios.get("http://localhost:3000/notes")
    .then((res)=> {
      setnotes(res.data.notes);
    })
  }
  useEffect(() => {
    fetchdata();
  },[])
  function formhandler (e){
  e.preventDefault()
  const {title,description} = e.target.elements
  axios.post("http://localhost:3000/notes",{
    title:title.value,
    description:description.value
  })
  .then((res)=>{
    fetchdata();
  })

  }
  function handledelete (noteid){
  axios.delete("http://localhost:3000/notes/"+noteid)
  .then((res)=>{
    fetchdata();
  })}

  function handleupdate (e){
    e.preventDefault()
    const {title ,description} = e.target.elements 
    axios.patch("http://localhost:3000/notes/"+editnote._id,{
      title:title.value,
      description:description.value
    })
    .then((res)=>{
      seteditnote(null)
      fetchdata();
    })
  }



  return (
    <>
      <form
        className="create-note"
        onSubmit={editnote ? handleupdate : formhandler}
      >
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          defaultValue={editnote ? editnote.title : ""}
        />
        <input
          name="description"
          type="text"
          placeholder="Enter description"
          defaultValue={editnote ? editnote.description : ""}
        />
        <button>{editnote ? "Update note" : "Create note"}</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handledelete(note._id);
                }}
              >
                delete
              </button>
              <button onClick={() => seteditnote(note)}>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
