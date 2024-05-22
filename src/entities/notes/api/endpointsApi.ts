import { INoteData, INote } from "@/shared/types";
import { notesApi } from "./notesApi";

export const endpointsApi = notesApi.injectEndpoints({
    endpoints: builder => ({
        createNote: builder.mutation<null, INoteData>({
            query: note => ({
                body: note,
                url: "/",
                method: "POST"
            }),
            invalidatesTags: () => [
                {
                    type: "Notes",
                }
            ]
        }), 
        updateNote: builder.mutation<INote, INote>({
            query: updatedNote  => ({
                url: `/${updatedNote .id}`,
                method: "PUT",
                body: updatedNote 
            }),
            invalidatesTags: () => [
                {
                    type: "Notes",
                }
            ]
        }),
    }),
});

export const { useCreateNoteMutation, useUpdateNoteMutation } = endpointsApi;