import { useCreateLabelMutation, useDeleteLabelMutation, useUpdateLabelMutation } from "./api/endpointsApi";
import { labelsApi, useGetLabelsQuery } from "./api/labelsApi";
import { labelsActions, labelsReducer } from "./model/labelsSlice";
export { 
    labelsActions, labelsReducer, labelsApi, useGetLabelsQuery, 
    useCreateLabelMutation, useDeleteLabelMutation, useUpdateLabelMutation
};