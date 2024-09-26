import { createApi } from "@reduxjs/toolkit/query/react";
import { INote } from "@/shared/types";
import { createBaseQueryWithReAuth } from "@/shared/lib/utils";
import { NOTES_API_URL } from "../const/notes";

export const notesApi = createApi({
    reducerPath: "notes/api",
    tagTypes: ["Notes"],
    baseQuery: createBaseQueryWithReAuth(NOTES_API_URL),
    endpoints: builder => ({
        getNotes: builder.query<INote[], null>({
            query: () => `/`,
            providesTags: ["Notes"],
            transformResponse: (response: INote[]) => response.sort((a, b) => b.timestamp - a.timestamp)
        }),
    }),
});

export const { useGetNotesQuery } = notesApi;