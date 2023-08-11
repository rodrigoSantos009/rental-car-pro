export interface IDates {
  rentDay?: string;
  returnDay?: string;
}

export interface IContextCar extends IDates {
  getDates: (rentDay: string, returnDay: string) => Promise<void>
}