export interface INote {
    id: number,
    name: string,
    content: string,
    timestamp: number,
    labels: number[],
    isPinned: boolean,
    isArchive: boolean,
    isDeleted: boolean,
    backgroundImage: string,
    background: string,
    colorText: string,
    isList: boolean,
    listContent: IListContent[]
}

export interface IListContent {
    id: number
    isChecked: boolean,
    text: string,
}

export interface INoteData extends Omit<INote, "id"> {}