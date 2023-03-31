import { Car } from "../../entities/Car";
import { ICarRepository } from "../../repositories/ICarRepository";
import { ICarDTO } from "./carDTO";

export class CarUseCase {
  constructor(
    private carRepository: ICarRepository
  ) {}

  async execute(data: ICarDTO) {
    const carAlreadyExists = await this.carRepository.getCarByModel(data.model)

    if(carAlreadyExists) {
      throw new Error('Carro já existe')
    }

    const car = new Car(
      data.model,
      data.year,
      data.doors,
      data.passengers,
      data.rentalPrice,
      data.available
    )

    await this.carRepository.saveCar(car)
  }
  async addImageToCar(image: string, carId: string): Promise<void> {
    await this.carRepository.addImageToCar(image, carId)
  }

  async getCarByModel(model: string) {
    if(!model) {
      console.log('Error')
    }

    await this.carRepository.getCarByModel(model)
  }


  async getCars() {
    const cars = await this.carRepository.getCars()

    return cars
  }

  async getCarById(id: string): Promise<Car | null> {
    return await this.carRepository.getCarById(id)
  }

  async deleteCar(id: string) {
    await this.carRepository.deleteCar(id)
  }
}