import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INote } from "../model/types";

const API_URL = "http://localhost:3000/notes";

export const notesApi = createApi({
    reducerPath: "notes/api",
    tagTypes: ["Notes"],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: builder => ({
        getNotes: builder.query<INote[], null>({
            query: () => `/`,
            providesTags: () => [
                {
                    type: "Notes",
                }
            ]
        }),
    }),
});

export const { useGetNotesQuery } = notesApi;