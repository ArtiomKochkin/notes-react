import { ILabel } from "./labels";

export interface INote {
    id: number,
    name: string,
    content: string,
    lastModifiedDate: string,
    labels: ILabel[],
    isPinned: boolean,
    isArchive: boolean,
    isDeleted: boolean,
    background?: string
}

export interface INoteData extends Omit<INote, "id"> {}