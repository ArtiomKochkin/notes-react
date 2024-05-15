import { notesApi, notesReducer } from "@/entities/notes";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    notes: notesReducer,
    [notesApi.reducerPath]: notesApi.reducer
})