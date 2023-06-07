import { useEffect, useState } from "react";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { BsFillPersonFill } from "react-icons/Bs";
import { CarInfo } from "../../types/CarType";

import { api } from "../../lib/axios";

type ICarId = {
  carId: string;
};

export function RentCar() {
  const location = useLocation()

  useEffect(() => {
    api.get(`/cars/${carId}`).then((res) => {
      setCar(res.data);
    });
  }, []);

  const [car, setCar] = useState<CarInfo | null>(null);
  const [selected, setSelected] = useState(true);
  const { carId } = useParams<ICarId>();
  const [rentDay, setRentDay] = useState(location.state.rentDay);
  const [returnDay, setReturnDay] = useState(location.state.returnDay);
  const [days, setDays] = useState(location.state.days);
  const [value, setValue] = useState(location.state.value);
  const [pickUp, setPickUp] = useState(location.state.pickUp);
  const [checkOut, setCheckOut] = useState(location.state.checkOut);
   
  const totalValue = days * value 
  const amountInInstallments = totalValue / 6
  
  const navigate = useNavigate();

  const handleFinish = (model: string) => {
    navigate("/finish", {
      state: {
        rentDay,
        returnDay,
        model,
        totalValue,
        amountInInstallments,
        pickUp,
        checkOut,
      },
    });
  }
    
  return (
    <div className="rent-car">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-100 p-2">
            <div className="rent-car-car">
              {car?.car_image && (
                <img
                  src={`http://localhost:3333/uploads/${car?.car_image.url}`}
                />
              )}
              <div className="text-center">
                <p className="text-center text-base font-semibold">
                  {car?.model}
                </p>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 mt-10  text-center ">
                <p className="bg-zinc-200 p-1">{car?.doors} portas</p>
                <p className="bg-zinc-200 p-1 flex items-center gap-2">
                  &nbsp; <BsFillPersonFill className="text-zinc-500 text-xl" />
                  {car?.passengers}&nbsp; pessoas
                </p>
                <p className="text-center bg-zinc-200 p-1">Ano {car?.year}</p>
                <p className="text-center bg-zinc-200 p-1">
                  {car?.available ? "Disponível" : "Não disponível"}
                </p>
              </div>
            </div>
            <div className="flex flex-col grow gap-3 font-semibold">
              <div>
                <div
                  className={`group p-6 rounded-md shadow-xl hover:bg-orange-100 hover:cursor-pointer transition duration-0 hover:duration-300 ease-in-out hover:text-white  flex flex-col gap-5 ${
                    selected ? "bg-orange-100 text-white" : "bg-white"
                  } `}
                >
                  <p>
                    Oferta Standard <br /> Mínimo 3 diárias
                  </p>
                  <p className="group-hover:text-white">
                    R$ {car?.rentalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => handleFinish(car!.model)}
              className="bg-orange-100 px-6 py-2 text-white font-semibold rounded-md"
            >
              Continuar
            </button>
          </div>
        </div>
        <div className="col-span-1 rounded-md flex flex-col grow">
          <div className="text-white bg-gray-300 h-14 text-center ">
            <h1 className="w-full h-full flex justify-center items-center text-orange-100 font-bold text-xl">
              Resumo da Reserva
            </h1>
          </div>
          <hr />
          <div className="px-7 p-5">
            <h2 className="text-orange-100 font-bold text-lg">Retirada</h2>
            <p>{rentDay} às 08:00</p>
            <p>{pickUp}</p>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="px-7 p-5">
            <h2 className="text-orange-100 font-bold text-lg">Devolução</h2>
            <p>{returnDay} às 08:00</p>
            <p>{checkOut}</p>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="px-7 py-5">
            <h2 className="text-orange-100 font-bold text-lg">Modelo</h2>
            <p>{car?.model}</p>
          </div>
          <div className="px-7 h-[135px] flex flex-col justify-center text-right bg-orange-100           font-semibold rounded-b-md ">
            <h2 className="text-orange-200 text-lg">Valor total</h2>
            {selected ? (
              <div>
                <p className="text-white">R$ {totalValue.toFixed(2)}</p>
                <p className="text-white">
                  Em até 6x de R$ {amountInInstallments.toFixed(2)}
                </p>
              </div>
            ) : (
              <h2 className="text-white">Selecione o pacote para continuar!</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
