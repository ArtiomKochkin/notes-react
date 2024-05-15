export interface INote {
    id: number,
    name: string,
    content: string,
    lastModifiedDate: string,
    labels: string[],
    isPinned: boolean,
    isArchive: boolean,
    isTrash: boolean,
    background?: string
}