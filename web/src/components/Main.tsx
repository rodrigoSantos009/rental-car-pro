import { AiFillCheckCircle } from "react-icons/ai"
import { IoArrowForwardCircleSharp } from "react-icons/Io5"
import mainCar from '../public/main-car.png'

export function Main() {
  return (
    <div className="main">
      <div className='flex flex-col'>
        <h2 className='font-bold text-2xl'>Planeje sua viagem agora</h2>
        <h1 className='font-bold text-5xl'>Economize <span className='text-orange-100'>muito</span> com a <br />Rental Car</h1>
        <p className=''>Alugue o carro dos seus sonhos. Preços imbatíveis, milhas ilimitadas, 
          <br /> opções de retirada flexíveis e muito mais.
        </p>
        <div className='mt-7 flex gap-3'>
          <button className='btn-rent'>Alugue Agora  &nbsp; <AiFillCheckCircle className="text-white text-xl"/></button>
          <button className='btn-schedule'>Agendar &nbsp; <IoArrowForwardCircleSharp className="text-white text-xl"/></button>
        </div>
      </div>
      <div>
        <img 
          width={830}
          height={465}
          src={mainCar} alt="" 
        />
      </div>
    </div>  
  )
}