import { createSlice } from "@reduxjs/toolkit";
import { INote } from "./types";

const initialState: INote[] = [];

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {}
});

export const notesActions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;