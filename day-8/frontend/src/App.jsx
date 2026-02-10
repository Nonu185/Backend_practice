import { useState } from 'react'
import axios from 'axios'
import './index.css'

function App() {
  
  axios.get("http://localhost:3000/notes")
  .then((res)=> {
    setnotes(res.data.notes);
  })
  const [notes, setnotes] = useState([
  
    {
     test: "test 1",
     description: "description 1"
   },
   {
     test: "test 2",
     description: "description 2"
   },
    {
      test: "test 3",
      description: "description 3"
    },
    {
      test: "test 4",
      description: "description 4"
    }
])


  return (
    <>
     <div className="notes">
      {
        notes.map(note => {
          return <div className='note'>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
        })
      }
    

     </div>
    </>
  )
}

export default App
