import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { notesApi } from "@/entities/notes";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(notesApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;