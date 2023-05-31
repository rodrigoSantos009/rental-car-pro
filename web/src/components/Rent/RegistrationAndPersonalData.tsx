import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

import { IoIosInformationCircle } from "react-icons/Io"
import { Form } from "./Form";
import { CreditCardForm } from "./CreditCardForm";
 
export function RegistrationAndPersonalData() {

  const location = useLocation()
  const navigate = useNavigate()

  const [carModel, setCarModel] = useState("")
  const [rentDay, setRentDay] = useState("");
  const [returnDay, setReturnDay] = useState("");
  const [totalValue, setTotalValue] = useState(0);
  const [amountInInstallments, setAmountInInstallments] = useState(0);
  
  if(location.state) {
    setCarModel(location.state.model) 
    setRentDay(location.state.rentDay) 
    setReturnDay(location.state.returnDay)
    setTotalValue(location.state.totalValue)
    setAmountInInstallments(location.state.amountInInstallments)
  }

  return (
    <div className="rent-car mb-40">
      <div className="w-full grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="">
            <h1 className="text-3xl mb-4">Dados Pessoais</h1>
            <p>Informe seus dados para que possamos efetuar a sua reserva.</p>
          </div>
          <div className="flex border border-zinc-300 p-5 rounded-md items-center gap-3">
            <IoIosInformationCircle className="text-2xl text-red-500" />
            <p className="w-[98%] text-sm ">
              As informações coletadas no cadastro do cliente serão utilizadas
              para identificação das reservas e excução de contrato entre o
              titular e a locadora. Para mais informações sobre o tratamento de
              dados pessoais, acesse nosso Portal de Privacidade.
            </p>
          </div>
          <div className="mt-10">
            <Form />
          </div>
          <div>
            <CreditCardForm />
          </div>
          <div className="mt-10">
            <button className="bg-orange-100 px-6 py-2 text-white font-semibold rounded-md">
              Reservar
            </button>
          </div>
        </div>
        <div className="rounded-md border border-gray-100 flex flex-col grow rounded-t-md right-32">
          <div className="text-white bg-gray-300 h-14 text-center ">
            <h1 className="w-full h-full flex justify-center items-center text-orange-100 font-bold text-xl">
              Resumo da Reserva
            </h1>
          </div>
          <hr />
          <div className="px-7 p-5">
            <h2 className="text-orange-100 font-bold text-lg">Retirada</h2>
            <p>{rentDay} às 08:00</p>
            <p>Agencia Centro São Bento do Sul</p>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="px-7 p-5">
            <h2 className="text-orange-100 font-bold text-lg">Devolução</h2>
            <p>{returnDay} às 08:00</p>
            <p>Agencia Centro São Bento do Sul</p>
          </div>
          <hr className="w-[90%] mx-auto" />
          <div className="px-7 py-5">
            <h2 className="text-orange-100 font-bold text-lg">Modelo</h2>
            <p>{carModel}</p>
          </div>
          <div className="px-7 h-[135px] flex flex-col justify-center text-right bg-orange-100            font-semibold rounded-b-md ">
            <h2 className="text-orange-200 text-lg">Valor total</h2>
            <div>
              <p className="text-white">R$ {totalValue.toFixed(2)}</p>
              <p className="text-white">
                Em até 6x de R$ {amountInInstallments.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
    
}