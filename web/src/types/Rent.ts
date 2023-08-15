export interface IRent {
  rentDate?: string,
  returnDate?: string,
  pickUp?: string,
  checkOut?: string,
  carModel?: string,
  
}

export interface IRentContext extends IRent {
  getRentData: (data: IRent) => Promise<any>;
}

export interface IRentProvider {
  children: JSX.Element;
}