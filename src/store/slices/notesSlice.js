import {createSlice} from "@reduxjs/toolkit";


const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push({
                id: Date.now(),
                text: action.payload.text,
                back: action.payload.back
            })
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((el) => el.id !== action.payload.id)
        }
    }
})

export const { removeNote, addNote } = notesSlice.actions

export default notesSlice.reducer;
