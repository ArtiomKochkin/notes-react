import { INote } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3000/notes";

export const notesApi = createApi({
    reducerPath: "notes/api",
    tagTypes: ["Notes"],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: builder => ({
        getNotes: builder.query<INote[], null>({
            query: () => `/`,
            providesTags: ["Notes"]
        }),
    }),
});

export const { useGetNotesQuery } = notesApi;