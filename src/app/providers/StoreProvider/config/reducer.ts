import { labelsApi, labelsReducer } from "@/entities/labels";
import { notesApi, notesReducer } from "@/entities/notes";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    notes: notesReducer,
    labels: labelsReducer,
    [notesApi.reducerPath]: notesApi.reducer,
    [labelsApi.reducerPath]: labelsApi.reducer
})