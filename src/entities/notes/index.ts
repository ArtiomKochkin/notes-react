import { useCreateNoteMutation, useDeleteNoteMutation, useUpdateNoteMutation } from "./api/endpointsApi";
import { notesApi, useGetNotesQuery } from "./api/notesApi";
import { NOTES_API_URL } from "./const/notes";
import { notesActions, notesReducer } from "./model/notesSlice";

export { 
    notesReducer, notesActions, notesApi,
    useGetNotesQuery, useCreateNoteMutation, useUpdateNoteMutation,
    useDeleteNoteMutation, NOTES_API_URL
};