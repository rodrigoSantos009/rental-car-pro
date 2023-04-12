import { AiFillCar } from "react-icons/ai"
import { HiLocationMarker, HiOutlineSearch } from "react-icons/hi"
import { BsCalendar2DateFill } from "react-icons/Bs"

export function ContentBox() {
  return (
    <div className="content">
      <h1 className="text-3xl font-bold mb-5">Escolha seu carro</h1>
      <div className="w-full content-box">
        <form className="content-box-form">
          <div className="flex flex-col">
            <label>
              <AiFillCar className="icon"/> &nbsp; 
              Selecione o Modelo do Carro
            </label>
            <select>
              <option>Selecione o modelo do carro</option>
              <option>Golf GTI</option>
              <option>Jetta GLI</option>
              <option>Pajero</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>
              <HiLocationMarker className="icon"/> &nbsp; 
              Pick Up
            </label>
            <select>
              <option>Selecione o local da retirada</option>
              <option>São Paulo</option>
              <option>Itajaí</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label>
              <HiLocationMarker className="icon"/> &nbsp;
              Devolver
            </label>
            <select>
              <option>Selecione o local da devolução</option>
              <option>São Paulo</option>
              <option>Itajaí</option>
            </select>
          </div>
          <div className="flex flex-col mt-4">
            <label>
              <BsCalendar2DateFill className="icon"/> &nbsp; 
              Data Retirada
            </label>
            <input type="date" />
          </div>
          <div className="flex flex-col mt-4">
            <label>
              <BsCalendar2DateFill className="icon"/> &nbsp; 
              Data Devolução
            </label>
            <input type="date" />
          </div>
          <div className="mt-4">
            <button className="btn-search">
              Procurar &nbsp; 
              <HiOutlineSearch className="text-white text-xl"/>
            </button>
          </div>
        </form>
      </div>
    </div>  
  )
}