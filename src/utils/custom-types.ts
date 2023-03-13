export type PickId<T extends { id: string }> = Pick<T, 'id'>;
export type OmitId<T> = Omit<T, 'id'>;
export type PartialOmitId<T> = Partial<OmitId<T>>;
export type PartialExceptForId<T extends { id: string }> = PickId<T> & PartialOmitId<T>;
