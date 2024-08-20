import { configureStore } from "@reduxjs/toolkit";
import { notesApi } from "@/entities/notes";
import { labelsApi } from "@/entities/labels";
import { rootReducer } from "./reducer";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(notesApi.middleware, labelsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;