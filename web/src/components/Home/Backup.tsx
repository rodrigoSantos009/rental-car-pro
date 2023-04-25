<div className="flex">
  {cars.map((car, id) => (
    <div key={id} className="w-96 h-100 cars m-5 rounded-lg flex flex-col items-center">
      {car.car_image && <img 
        src={`http://localhost:3000/uploads/${car.car_image.url}`} 
        alt={car.model} 
        className="image"
      />}
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


  


<div className="flex items-center">
          <button onClick={handleMenu} className="cursor-pointer">
            {open ? <IoMdMenu className="text-2xl" /> : <IoMdClose className="text-2xl" />}
          </button>
        </div>



<div className="flex gap-4">
    <Link to={"login"}>
      <button 
      className="btn-signin hidden"
      >
        Entrar
      </button>
    </Link>
    <Link to={"register"}>
      <button 
      className="btn-register hidden"
    >
      Registre-se
    </button>
    </Link>
    
</div>