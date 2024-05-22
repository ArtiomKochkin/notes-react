import { ILabel } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:3000/labels";

export const labelsApi = createApi({
    reducerPath: "labels/api",
    tagTypes: ["Labels"],
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: builder => ({
        getLabels: builder.query<ILabel[], null>({
            query: () => "/",
            providesTags: () => [
                {
                    type: "Labels",
                },
            ]
        }),
    }),
});

export const { useGetLabelsQuery } = labelsApi;