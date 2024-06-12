import { INote } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NOTES_API_URL } from "../const/notes";

export const notesApi = createApi({
    reducerPath: "notes/api",
    tagTypes: ["Notes"],
    baseQuery: fetchBaseQuery({ baseUrl: NOTES_API_URL }),
    endpoints: builder => ({
        getNotes: builder.query<INote[], null>({
            query: () => `/`,
            providesTags: ["Notes"],
            transformResponse: (response: INote[]) => response.sort((a, b) => b.timestamp - a.timestamp)
        }),
    }),
});

export const { useGetNotesQuery } = notesApi;