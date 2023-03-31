import { PrismaClient } from "@prisma/client";
import { RentCar } from "entities/RentCar";
import { IRentCarRepository } from "repositories/IRentCarRepository";

export class RentCarRepository implements IRentCarRepository {
  constructor(
    private prisma: PrismaClient  
  ) {}

  async rentCar(data: RentCar): Promise<void> {
    await this.prisma.rentals.create({
      data: {
        rented_at: data.rented_at,    
        returned_at: data.returned_at,
        user: {
          connect: {
            id: data.user_id
          },      
        },
        car: {
          connect: {
            id: data.car_id
          }
        }
      }
    })

    await this.prisma.car.update({
      where: {
        id: data.car_id
      },
      data: {
        available: false
      }
    })
  }

  async getRentedCar(id: string): Promise<RentCar | null> {
    return await this.prisma.rentals.findUnique({
      where: {
        id
      }
    })
  }

  async getRentedCars(): Promise<RentCar[]> {
    const rentals = await this.prisma.rentals.findMany()

    console.log('rentals:', rentals)
    if (rentals !== null) {
      return rentals
    } else {
      return []
    }
  }
}