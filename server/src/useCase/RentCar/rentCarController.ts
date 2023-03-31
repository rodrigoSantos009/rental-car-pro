import { Request, Response } from "express";
import { CarUseCase } from "useCase/Car/carUseCase";
import { UserUseCase } from "useCase/User/userUseCase";
import { RentCarUseCase } from "./rentCarUseCase";

type ImageFile = string

export class RentCarController {
  constructor(
    private rentCarUseCase: RentCarUseCase,
    private userUseCase: UserUseCase,
    private carUseCase: CarUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { 
      rented_at,
      returned_at,
      user_id,
      car_id 
    } = req.body

    const user = await this.userUseCase.getUserById(user_id)
    const car = await this.carUseCase.getCarById(car_id)

    if (!car?.available) {
        throw new Error('Carror não disponível');
      }

    if (!user) {
      throw new Error('User not found');
    }

    try {
      const rental = await this.rentCarUseCase.execute({
      rented_at, 
      returned_at,
      user_id, 
      car_id
    })

    return res.status(201).json(rental)
    } catch(e) {
      return res.status(400).json()
    }
  }  

  async getRentedCar(req: Request, res: Response) {
    const { id } = req.params

    try {
      const rentedCar = await this.rentCarUseCase.getRentedCar(id)

      return res.status(400).json(rentedCar)
    } catch(e) {
      console.error(`Failed to get rented car to car with ID ${id}: ${e}`)
      return res.status(400).json({ e })
    }
  }

  async getRentedCars(req: Request, res: Response) {
    try {
      const rentedCars = await this.rentCarUseCase.getRentedCars()

      return res.status(200).json(rentedCars)
    } catch(e) {
      console.error(`Failed to get rented cars: ${e}`)
      return res.status(400).json({ e })
    }
  }
}