import { ILabel } from "@/shared/types";
import { labelsApi } from "./labelsApi";

export const endpointsApi = labelsApi.injectEndpoints({
    endpoints: builder => ({
        createLabel: builder.mutation<ILabel, ILabel>({
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
        updateLabel: builder.mutation<ILabel, Partial<ILabel>>({
            query: ({ id, ...patch }) => ({
                url: `/${id}`,
                method: "PATCH",
                body: patch
            }),
            invalidatesTags:  ["Labels"]
        }),
    }),
});

export const { useCreateLabelMutation, useDeleteLabelMutation, useUpdateLabelMutation } = endpointsApi;