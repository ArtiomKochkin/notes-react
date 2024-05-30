import { INoteData, INote } from "@/shared/types";
import { notesApi } from "./notesApi";

export const endpointsApi = notesApi.injectEndpoints({
    endpoints: builder => ({
        createNote: builder.mutation<INote, INoteData>({
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
        updateNote: builder.mutation<INote, Partial<INote>>({
            query: ({ id, ...patch })  => ({
                url: `/${id}`,
                method: "PATCH",
                body: patch 
            }),
            invalidatesTags:  ["Notes"]
        }),
    }),
});

export const { useCreateNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = endpointsApi;