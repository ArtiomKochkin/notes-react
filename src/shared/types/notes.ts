export interface INote {
    id: number,
    name: string,
    content: string,
    lastModifiedDate: Date | string,
    labels: number[],
    isPinned: boolean,
    isArchive: boolean,
    isDeleted: boolean,
    background: string
}

export interface INoteData extends Omit<INote, "id"> {}