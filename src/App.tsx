import { useState } from "react";
import './tailwind.css';
import { useDispatch, useSelector } from "react-redux";
import { addNote, completeNote, deleteNote } from "./redux/Slice/MySlice";
import {NoteType} from './Notestype'
function App() {
  const AllNotes = useSelector((state: any) => state.notes.Notes)
  const [currNote,setCurrNote] = useState<NoteType>({
    id:0,
    description: '',
    isComplete:false
  });
  const dispatch = useDispatch()
  const handleComplete = (id:number) => {
    dispatch(completeNote(id))
  }
  const handleDelete = (id:number) => {
    dispatch(deleteNote(id))
  }
  const handleAddNote = () => dispatch(addNote(currNote))
  return (
    <>
      <div className="container my-4">
        <h1 className="text-center my-4" style={{ color: "white" }}>Todo List</h1>
        <div className="form-floating">
          <textarea className="form-control" id="floatingTextarea" onChange={(e) => setCurrNote((prevState)=> ({
            ...prevState,
            description:e.target.value
          }))}></textarea>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto my-4">
          <button className="btn btn-primary text-white" type="button" onClick={handleAddNote}>
            Add Task
          </button>
        </div>
        <div className="input-group mb-3" style={{ color: "white" }}>
          {AllNotes.length>0 ? AllNotes.map((item: NoteType, index: number) => {
            <div key={index}>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="mx-2" onChange={() => handleComplete(item.id)}/>
              <label htmlFor="vehicle1">{item.description}</label>
              <button type="button" className="btn btn-outline-danger mx-2" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          }) : <p>Please add todo</p>}
        </div>
      </div>
    </>
  );
}

export default App;
