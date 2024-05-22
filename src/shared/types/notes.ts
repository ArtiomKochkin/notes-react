import { ILabel } from "./labels";

export interface INote {
    id: number,
    name: string,
    content: string,
    lastModifiedDate: string,
    labels: ILabel[],
    isPinned: boolean,
    isArchive: boolean,
    isTrash: boolean,
    background?: string
}

export interface INoteData extends Omit<INote, "id"> {}