import { PrismaClient } from "@prisma/client";

import { userUseCase } from "../User";
import { carUseCase } from "../Car";

import { RentCarRepository } from "../../repositories/implements/rentCarRepository";
import { RentCarController } from "./rentCarController";
import { RentCarUseCase } from "./rentCarUseCase";

const prisma = new PrismaClient()

const rentCarRepository = new RentCarRepository(
  prisma
)

const rentCarUseCase = new RentCarUseCase(
  rentCarRepository  
)

const rentCarController  = new RentCarController(
  rentCarUseCase,
  userUseCase,
  carUseCase
)

export { rentCarUseCase, rentCarController }