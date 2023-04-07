export type CarsInfo = {
  id: string
  model: string
  year: number
  doors: number
  passengers: number
  rentalPrice: number
  avaiable: boolean
  car_image: {
    url: string
  }
}[]