import { INoteData, INote } from "@/shared/types";
import { notesApi } from "./notesApi";

export const endpointsApi = notesApi.injectEndpoints({
    endpoints: builder => ({
        createNote: builder.mutation<INote, INoteData>({
            query: note => ({
                body: note,
                url: "/notes",
                method: "POST"
            }),
            invalidatesTags: () => [
                { type: "Notes" }
            ]
        }),
        deleteNote: builder.mutation<null, number >({
            query: (id) => ({
                url: `/notes/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: () => [
                { type: "Notes" }
            ]
        }),
        updateNote: builder.mutation<INote, Partial<INote>>({
            query: ({ id, ...patch })  => ({
                url: `/notes/${id}`,
                method: "PATCH",
                body: patch 
            }),
            invalidatesTags: () => [
                { type: "Notes" }
            ]
        }),
    }),
});

export const { useCreateNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = endpointsApi;