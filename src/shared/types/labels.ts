export interface ILabel {
    id: number,
    name: string,
}

export interface ILabelData extends Omit<ILabel, "id"> {}