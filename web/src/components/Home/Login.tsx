import { Link, useNavigate } from 'react-router-dom'
import {  useState } from 'react'

import { useAuth } from '../../contexts/Auth/UseAuth';

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuth()


  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await auth.authenticate(email, password);

      navigate("/models");
    } catch (e) {
      console.error("Email ou senh inválidos", e);
    }
  };

  return (
    <div className="login-card">
      <div className="login-card-form">
        <h1 className="login-title">Entre em sua conta</h1>
        <form onSubmit={handleLogin} className="form-login">
          <div className="mb-7 flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Digite seu email..."
              className="border-2 border-zinc-300 focus:border-orange-100 p-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">
              Senha
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Digite sua senha..."
              className="border-2 border-zinc-300 focus:border-orange-100 p-2 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-between mt-5">
            <a className="underline" href="#">
              Lembrar senha
            </a>
            <a className="underline" href="#">
              Esqueceu a senha?
            </a>
          </div>
          <div className="flex flex-col mt-3">
            <button
              type="submit"
              className="bg-orange-100 text-white mb-3 rounded-sm p-2 font-bold"
            >
              Entrar
            </button>
            <Link to={"/register"}>
              <button className="w-full bg-black text-white mb-3 rounded-sm p-2 font-bold">
                Registre-se
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}