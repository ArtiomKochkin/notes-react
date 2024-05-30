import { ILabel } from "@/shared/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ILabel[] = [];

export const labelsSlice = createSlice({
    name: "labels",
    initialState,
    reducers: {
        addLabel: (state, action: PayloadAction<ILabel>) => {
            state.push(action.payload);
        },
        removeLabel: (state, action: PayloadAction<number>) => {
            return state.filter(l => l.id !== action.payload);
        },
        updateLabel: (state, action: PayloadAction<ILabel>) => {
            const index = state.findIndex(l => l.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }  
});

export const labelsActions = labelsSlice.actions;
export const labelsReducer = labelsSlice.reducer;