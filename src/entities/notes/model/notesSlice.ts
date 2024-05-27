import { INote } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: INote[] = [];

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INote>) => {
            state.push(action.payload);
        },
        updateNote: (state, action: PayloadAction<INote>) => {
            const index = state.findIndex(n => n.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteNote: (state, action: PayloadAction<number>) => {
            return state.filter(n => n.id !== action.payload);
        },
        moveToArchive: (state, action: PayloadAction<number>) => {
            const note = state.find(n => n.id === action.payload);
            if (note) {
                note.isArchive = !note.isArchive;
                if (note.isArchive) {
                    note.isDeleted = false;
                }
            }
        },
        moveToDeleted: (state, action: PayloadAction<number>) => {
            const note = state.find(n => n.id === action.payload);
            if (note) {
                note.isArchive = false;
                note.isDeleted = true;
            } 
        },
        restoreFromDeleted: (state, action: PayloadAction<number>) => {
            const note = state.find(n => n.id === action.payload);
            if (note) {
                note.isDeleted = false;
            } 
        },
    }
});

export const notesActions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;