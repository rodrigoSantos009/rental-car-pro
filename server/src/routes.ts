import { Router } from "express";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import { userController } from "./useCase/User";
import { carController } from "./useCase/Car";
import upload from './config/Multer'
import { rentCarController } from "./useCase/RentCar";

const router = Router()

// cars 

router.post('/cars', (req, res) => {
  return carController.handle(req, res)
})

router.post('/cars/:id/image', upload.single('file'), (req, res) => {
  return carController.addImageToCar(req, res)
})

router.get('/cars', (req, res) => {
  return carController.getCars(req, res)
})

router.get('/cars/:id', (req, res) => {
  return carController.getCarById(req, res)
})

router.delete('/cars/:id', (req, res) => {
  return carController.deleteCar(req, res)
})

// rental cars

router.post('/car/rentals', (req, res) => {
  return rentCarController.handle(req, res)
})

router.get('/car/rentals/:id', (req, res) => {
  return rentCarController.getRentedCar(req, res)
})

router.get('/car/rentals', (req, res) => {
  return rentCarController.getRentedCars(req, res)
})

//users

router.post('/users', (req, res) => {
  return userController.handle(req, res)
})

router.get('/users/login', (req, res) => {
  return userController.authenticate(req, res)
})

router.get('/users', (req, res) => {
  return userController.getUsers(req, res)
})

router.get('/user/:id', (req, res) => {
  return userController.getUserById(req, res)
})

//router.use(AuthMiddleware)

router.get('/users/perfil', (req, res) => {
  return userController.getPerfil(req, res)
})

export default router