import { ILabel, ILabelData } from "@/shared/types";
import { labelsApi } from "./labelsApi";

export const endpointsApi = labelsApi.injectEndpoints({
    endpoints: builder => ({
        createLabel: builder.mutation<ILabel, ILabelData>({
            query: label => ({
                body: label,
                url: "/",
                method: "POST"
            }),
            invalidatesTags:  ["Labels"]
        }),
        deleteLabel: builder.mutation<null, number>({
            query: id => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:  ["Labels"]
        }),
        updLabel: builder.mutation<ILabel, Partial<ILabel>>({
            query: ({ id, ...patch }) => ({
                url: `/${id}`,
                method: "PATCH",
                body: patch
            }),
            invalidatesTags:  ["Labels"]
        }),
    }),
});

export const { useCreateLabelMutation, useDeleteLabelMutation, useUpdLabelMutation } = endpointsApi;