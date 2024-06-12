import { ILabel } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_LABELS_KEY } from "../const/labels";

const getInitialState = (): ILabel[] => {
    const storedNotes = localStorage.getItem(LOCAL_STORAGE_LABELS_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
};
const initialState: ILabel[] = getInitialState(); 

export const labelsSlice = createSlice({
    name: "labels",
    initialState,
    reducers: {
        addLabel: (state, action: PayloadAction<ILabel>) => {
            state.push(action.payload);
            localStorage.setItem(LOCAL_STORAGE_LABELS_KEY, JSON.stringify(state));
        },
        removeLabel: (state, action: PayloadAction<number>) => {
            const newState = state.filter(l => l.id !== action.payload);
            localStorage.setItem(LOCAL_STORAGE_LABELS_KEY, JSON.stringify(newState));
            return newState;
        },
        updateLabel: (state, action: PayloadAction<ILabel>) => {
            const index = state.findIndex(l => l.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
            localStorage.setItem(LOCAL_STORAGE_LABELS_KEY, JSON.stringify(state));
        }
    }  
});

export const labelsActions = labelsSlice.actions;
export const labelsReducer = labelsSlice.reducer;