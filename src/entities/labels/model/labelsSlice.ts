import { ILabel } from "@/shared/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ILabel[] = [];

export const labelsSlice = createSlice({
    name: "labels",
    initialState,
    reducers: {}
});

export const labelsActions = labelsSlice.actions;
export const labelsReducer = labelsSlice.reducer;