import { RentCar } from "../../entities/RentCar";
import { IRentCarRepository } from "../../repositories/IRentCarRepository";
import { IRentCarDTO } from "./rentCarDTO";

export class RentCarUseCase {
  constructor(
    private rentCarRepository: IRentCarRepository
  ) {}

  async execute(data: IRentCarDTO) {
    const carAlreadyRented = await this.rentCarRepository.getRentedCar(data.car_id)

    if(carAlreadyRented) {
      throw new Error('Carro já está alugado')
    }

    const rentCar = new RentCar(
      data.rented_at,
      data.returned_at,
      data.user_id,
      data.car_id,
    )

    await this.rentCarRepository.rentCar(rentCar)
  }

  async getRentedCar(id: string) {
    const rentedCars = await this.rentCarRepository.getRentedCar(id)

    return rentedCars
  }

  async getRentedCars(): Promise<RentCar[]> {
    const rentedCars = await this.rentCarRepository.getRentedCars()

    console.log('rented cars:', rentedCars)
    
    return rentedCars
  }
}