import { combineReducers } from "@reduxjs/toolkit";
import { labelsApi } from "@/entities/labels";
import { notesApi } from "@/entities/notes";
import { authApi } from "@/entities/auth";

export const rootReducer = combineReducers({
    [notesApi.reducerPath]: notesApi.reducer,
    [labelsApi.reducerPath]: labelsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
})