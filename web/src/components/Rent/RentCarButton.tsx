import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export interface ICarId {
  carId: string
}

type DataType = {
  rentDate: string | null;
  returnDate: string | null;
  days: number | null;
  pickUpCity: string | null;
  checkOutCity: string | null;
};

export function RentCarButton({
  rentDate,
  returnDate,
  days,
  pickUpCity,
  checkOutCity,
}: DataType) {
  const navigate = useNavigate();
  const location = useLocation();
  const [rentDay, setRentDay] = useState(rentDate);
  const [returnDay, setReturnDay] = useState(returnDate);
  const [totalDays, setTotalDays] = useState(days);
  const [pickUp, setPickup] = useState(pickUpCity);
  const [checkOut, setCheckOut] = useState(checkOutCity);

  if (totalDays === 0) setTotalDays(1);

  function handleCarRent() {
    if (!rentDay || !returnDate) {
      alert("Escolha as datas antes de continuar!");
      navigate("/");
    } else {
      navigate("/rent/cars", {
        state: {
          rentDay,
          returnDay,
          totalDays,
          pickUp,
          checkOut,
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
