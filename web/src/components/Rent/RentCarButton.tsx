import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ContentBox } from "../Home/ContentBox";

export interface ICarId {
  carId: string
}

type DataType = {
  rentDate: string | null,
  returnDate: string | null
  days: number | null
}

export function RentCarButton({ rentDate, returnDate, days }: DataType) {
  const navigate = useNavigate();
  const location = useLocation()

  const [rentDay, setRentDay] = useState(rentDate)
  const [returnDay, setReturnDay] = useState(returnDate)
  const [totalDays, setTotalDays] = useState(days)   

  if(totalDays === 0) setTotalDays(1);

  function handleCarRent() {
    if(!rentDay || !returnDate) {
      alert("Escolha as datas antes de continuar!") 
      navigate("/")
    } else {
      navigate("/rent/test", {
        state: {
          rentDay,
          returnDay,
          totalDays,
        },
      });
    }
    
  } 

  return (
    <>
      <button className="models-button" onClick={handleCarRent}>
        RESERVE AGORA
      </button> 
    </>
  );
}
