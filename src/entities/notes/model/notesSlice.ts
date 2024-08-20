import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INote } from "@/shared/types";
import { LOCAL_STORAGE_NOTES_KEY } from "../const/notes";

const getInitialState = (): INote[] => {
    const storedNotes = localStorage.getItem(LOCAL_STORAGE_NOTES_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
};
const initialState: INote[] = getInitialState(); 

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<INote>) => {
            state.push(action.payload);
            localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(state));
        },
        updateNote: (state, action: PayloadAction<INote>) => {
            const index = state.findIndex(n => n.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
            localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(state));
        },
        removeNote: (state, action: PayloadAction<number>) => {
            const newState = state.filter(n => n.id !== action.payload);
            localStorage.setItem(LOCAL_STORAGE_NOTES_KEY, JSON.stringify(newState));
            return newState;
        }
    }
});

export const notesActions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;