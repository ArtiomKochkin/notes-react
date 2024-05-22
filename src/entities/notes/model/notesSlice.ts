import { INote } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: INote[] = [];

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {}
});

export const notesActions = notesSlice.actions;
export const notesReducer = notesSlice.reducer;