import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { userUseCase } from "../useCase/User";

type JWTPayload = {
  email: string
}

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if(!authorization) {
      throw new Error('Não autorizado')
  }

  const token = authorization.split(' ')[1]

  const { email } = jwt.verify(token, process.env.JWT_PASS ?? '') as JWTPayload

  const user = await userUseCase.getUserByEmail(email)

  if(!user) {
      throw new Error('Não autorizado')
  }

  const { password:_, ...loggedUser } = user
      
  req.user = loggedUser

  next()
}