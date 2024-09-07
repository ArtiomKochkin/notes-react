export interface ILabel {
    id: number,
    name: string,
    notes: number[],
    timestamp: number
}

export interface ILabelData extends Omit<ILabel, "id"> {}