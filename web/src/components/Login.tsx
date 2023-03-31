export function Login() {
  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full login-main">
        
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <h1 className="login-title mb-3">Entre em sua conta</h1>
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
            <button className="bg-green-400 text-white mb-3 rounded-md p-2">Entrar</button>
            <button className="bg-purple-100 text-white rounded-md p-2">Cadastre-se</button>
          </div>
        </form>
      </div>
    </div>  
  )
}