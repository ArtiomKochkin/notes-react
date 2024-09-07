import { labelsActions } from "@/entities/labels";
import { notesActions } from "@/entities/notes";

export const rootActions = {
    ...notesActions,
    ...labelsActions,
};