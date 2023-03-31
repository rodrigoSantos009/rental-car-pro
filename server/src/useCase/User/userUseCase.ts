import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { IUserDTO } from "./userDTO";

import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'

export class UserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: IUserDTO) {
    const userAlreadyExists = await this.userRepository.getUserByEmail(data.email)

    if(userAlreadyExists) {
      throw new Error('Usuário já existe')
    }

    const hashPassword = await bcrypt.hash(data.password, 10)

    const user = new User(
      data.name,
      data.email,
      hashPassword  
    )

    await this.userRepository.saveUser(user)
  }

  async comparePassword(password: string, hash: string) {
    const result = await bcrypt.compare(password, hash)

    return result
  }

  async authenticate(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email)

    if(!user) {
      throw new Error('Email ou senha inválidos!')
    }

    const passwordMatch = await this.comparePassword(password, user.password)

    if(!passwordMatch) {
      throw new Error('Email ou senha inválidos!')
    } 

    const token = jwt.sign({ email: user.email }, process.env.JWT_PASS ?? '', {expiresIn: '8h'})

    return token
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.getUserByEmail(email)
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userRepository.getUserById(id)
  }

  async getUsers() {
    const users = await this.userRepository.getUsers()

    return users
  }
}