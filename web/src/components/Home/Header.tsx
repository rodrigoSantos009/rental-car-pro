import logo from "../../public/logo.png"
import { Link } from "react-router-dom"

import { useAuth } from "../../contexts/Auth/UseAuth"

export function Header() {
  const auth = useAuth()

  function handleLogout() {
    auth.logout()
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="w-24" width={145} height={51} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"about"}>Sobre</Link>
          <Link to={"models"}>Modelos de Veículos</Link>
        </ul>
      </div>
      {!auth.email ? (
        <div className="gap-4 hidden md:flex">
          <Link to={"login"}>
            <button className="btn-signin md:py-3 md:text-base md:font-bold">
              Entrar
            </button>
          </Link>
          <Link to={"register"}>
            <button className="btn-register">Registre-se</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to={"/"}>
            <button className="mr-5" onClick={handleLogout}>
              Sair
            </button>
          </Link>

          <Link to={"/perfil"}>
            <button>Perfil</button>
          </Link>
        </div>
      )}
    </div>
  );
}