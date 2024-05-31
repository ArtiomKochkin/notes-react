import { ILabel } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LABELS_API_URL } from "../const/labels";

export const labelsApi = createApi({
    reducerPath: "labels/api",
    tagTypes: ["Labels"],
    baseQuery: fetchBaseQuery({ baseUrl: LABELS_API_URL }),
    endpoints: builder => ({
        getLabels: builder.query<ILabel[], null>({
            query: () => "/",
            providesTags: ["Labels"]
        }),
    }),
});

export const { useGetLabelsQuery } = labelsApi;