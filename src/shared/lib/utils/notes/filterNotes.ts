import { INote } from "@/shared/types";

export const filterNotes = (notes: INote[] = []) => {
    const filtered = notes.filter(item => !item.isArchive && !item.isDeleted);
    return filtered;
};