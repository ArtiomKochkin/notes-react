import { useCreateNoteMutation, useUpdateNoteMutation } from "./api/endpointsApi";
import { notesApi, useGetNotesQuery } from "./api/notesApi";
import { notesActions, notesReducer } from "./model/notesSlice";

export { 
    notesReducer, 
    notesActions, notesApi, 
    useGetNotesQuery, useCreateNoteMutation, useUpdateNoteMutation
};