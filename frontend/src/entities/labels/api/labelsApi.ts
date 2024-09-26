import { createApi } from "@reduxjs/toolkit/query/react";
import { ILabel } from "@/shared/types";
import { createBaseQueryWithReAuth } from "@/shared/lib/utils";
import { LABELS_API_URL } from "../const/labels";

export const labelsApi = createApi({
    reducerPath: "labels/api",
    tagTypes: ["Labels"],
    baseQuery: createBaseQueryWithReAuth(LABELS_API_URL),
    endpoints: builder => ({
        getLabels: builder.query<ILabel[], null>({
            query: () => "/",
            providesTags: ["Labels"],
            transformResponse: (response: ILabel[]) => response.sort((a, b) => b.timestamp - a.timestamp)
        }),
    }),
});

export const { useGetLabelsQuery } = labelsApi;