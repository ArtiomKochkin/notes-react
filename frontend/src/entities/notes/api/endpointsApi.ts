import { INote } from "@/shared/types";
import { notesApi } from "./notesApi";

export const endpointsApi = notesApi.injectEndpoints({
    endpoints: builder => ({
        createNote: builder.mutation<INote, INote>({
            query: note => ({
                body: note,
                url: "/",
                method: "POST"
            }),
            invalidatesTags:  ["Notes"]
        }),
        deleteNote: builder.mutation<null, number >({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:  ["Notes"]
        }),
        updNote: builder.mutation<INote, Partial<INote>>({
            query: ({ id, ...patch })  => ({
                url: `/${id}`,
                method: "PATCH",
                body: patch 
            }),
            invalidatesTags:  ["Notes"]
        }),
        searchNotes: builder.query<INote[], void>({
            query: () => ({
                url: `/`,
                method: "GET",
            }),
            providesTags: ["Notes"]
        })
    }),
});

export const { 
    useCreateNoteMutation, 
    useUpdNoteMutation, 
    useDeleteNoteMutation,
    useSearchNotesQuery
} = endpointsApi;