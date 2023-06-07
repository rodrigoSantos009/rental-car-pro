import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../lib/axios'

export function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    
    await api.post('/signup', { 
      name,
      email,
      password
    })
    navigate('/login')
  }

  return (
    <div className="login-card">
      <div className="login-card-form">
        <h1 className="login-title">Criar conta</h1>
        <form onSubmit={handleSubmit} className="form-login">
          <div className="mb-7 flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">
              Nome
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Digite seu nome..."
              className="border-2 border-zinc-300 focus:border-orange-100 p-2 rounded-md outline-none"
            />
          </div>
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Criar senha..."
              className="border-2 border-zinc-300 focus:border-orange-100 p-2 rounded-md outline-none"
            />
          </div>
          <div className="flex justify-between mt-5">
            <a className="underline" href="#">
              Lembrar senha
            </a>
          </div>
          <div className="flex flex-col mt-3">
            <button
              type="submit"
              className="bg-orange-100 text-white mb-3 rounded-sm p-2 font-bold"
            >
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}