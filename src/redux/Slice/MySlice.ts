
import { createSlice } from '@reduxjs/toolkit';
import { NoteType } from '../../Notestype'
export const counterSlice = createSlice({
    name: 'MySlicer',
    initialState: {
        Notes: [],
    },
    reducers: {
        addNote: (state, action) => {
            console.log('hello')
            let notes = state.Notes;
            notes.push(action.payload);
            state.Notes = notes;
        },
        deleteNote: (state, action) => {
            let notes = state.Notes;
            notes.splice(action.payload.id, 1);
            state.Notes = notes
        },
        completeNote: (state, action) => {
            let notes = state.Notes;
            notes.forEach((item:NoteType) => {
                if(item.id===action.payload.id) item.isComplete = true;
            })
        }
    },
});

export const { addNote, deleteNote,completeNote } = counterSlice.actions;

export default counterSlice.reducer;
