import { useEffect, useState } from "react"
import { CarsInfo } from "../types/CarType"
import { api } from "../lib/axios"

export function Models() {
  const [cars, setCars] = useState<CarsInfo>([])

  useEffect(() => {
    api.get("cars")
       .then((res) => {
        setCars(res.data)
      })
  }, [])
  
  return (
    <div className="w-5/6 mx-auto">
      <h1>Grupo de Carros</h1>
      <div className="flex">
        {cars.map((car, id) => (
          <div key={id} className="w-96 cars m-5 rounded-lg flex flex-col items-center">
            {car.car_image && 
            <img   
              width={100}
              height={100}
              src={`http://localhost:3000/uploads/${car.car_image.url}`} 
              alt={car.model} 
              className="image"
            />}
            <div className=" w-full flex justify-between">
              <p className="text-center">{car.model}</p>
              <p className="text-center">R${car.rentalPrice}</p>
            </div>
              <p className="text-center">{car.doors} portas</p>
              <p className="text-center">{car.passengers} Lugares</p>
              <p className="text-center">Ano {car.year}</p>
              <p className="text-center">{car.avaiable ? 'Disponível': 'Não disponível'}</p>
              <button className="text-center">Alugar</button>
          </div>
         ))}
      </div>
    </div>
  )
}