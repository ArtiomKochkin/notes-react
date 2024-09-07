import { combineReducers } from "@reduxjs/toolkit";
import { labelsApi, labelsReducer } from "@/entities/labels";
import { notesApi, notesReducer } from "@/entities/notes";

export const rootReducer = combineReducers({
    notes: notesReducer,
    labels: labelsReducer,
    [notesApi.reducerPath]: notesApi.reducer,
    [labelsApi.reducerPath]: labelsApi.reducer
})