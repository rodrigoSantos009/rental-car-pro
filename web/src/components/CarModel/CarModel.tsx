export function CarModel() {
  return (
    <div className="cars">
      <img src={`http://localhost:3000/uploads/${car?.car_image.url}`} />
      <div className="text-center">
        <p className="text-center text-base font-semibold">{car?.model}</p>
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
  );
}