import { useEffect, useState } from "react";
import { api } from "../lib/axios";

type CarsInfo = {
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

export function PickCar() {
  const [cars, setCars] = useState<CarsInfo>([])

  useEffect(() => {
    api
       .get("cars"  )
       .then((res) => {
        setCars(res.data)
      })
      .catch((e) => {
        console.log(e.message)
      })
    }, [])

  console.log(cars)

    return (
        <div className="flex">
          {cars.map((car, id) => (
            <div key={id} className="w-96 h-100 cars m-5 rounded-lg flex flex-col items-center">
              <img 
                src={`http://localhost:3000/uploads/${car.car_image.url}`} 
                alt={car.model} 
                className="image"
              />
              <div className=" w-full flex justify-between">
                <p className="text-center">{car.model}</p>
                <p className="text-center">Ano{car.year}</p>
              </div>
              <p className="text-center">{car.doors} portas</p>
              <p className="text-center">{car.passengers} Lugares</p>
              <p className="text-center">R${car.rentalPrice}</p>
              <p className="text-center">{car.avaiable ? 'Disponível': 'Não disponível'}</p>
              <button className="text-center">Alugar</button>
            </div>
          ))}
        </div>
    ) 
  }