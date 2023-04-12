import loginCar from '../public/loginCar.jpg'

export function Login() {
  return (
    <div className="login-card">
      <div className="login-image">
        <img 
          width={680}
          src={loginCar} 
          alt="" 
        />
      </div>
      <div className="login-card-form">
        <h1 className="login-title">Entre em sua conta</h1>
        <form action="" className="form-login">
          <div className="mb-7 flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">Email</label>
            <input type="email"
              className="border-2 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">Senha</label>
            <input type="password" 
              className="border-2 p-2 rounded-md"
            />
          </div>
          <div className="flex justify-between mt-5">
            <a href="#">Lembrar senha</a>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <div className="flex flex-col mt-3">
            <button className="bg-orange-100 text-white mb-3 rounded-sm p-2 font-bold">Entrar</button>
            <button className="bg-black text-white rounded-sm p-2 font-bold">Cadastre-se</button>
          </div>
        </form>
      </div>
    </div>  
  )
}