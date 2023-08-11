import { useNavigate } from "react-router-dom";
import { useRent } from "../../contexts/Rent/Rent";
export interface ICarId {
  carId: string
}

export function RentCarButton() {
  const rent = useRent();
  const navigate = useNavigate();

  function handleCarRent() {
    if (!rent.rentDate || !rent.returnDate) {
      alert("Escolha as datas antes de continuar!");
      navigate("/");
    } else {
      navigate("/rent/cars");
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
