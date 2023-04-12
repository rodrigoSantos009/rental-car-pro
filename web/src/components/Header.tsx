import logo from "../public/logo.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="header">
      <div className="logo hidden">
        <Link to="/">
          <img 
          width={145}
          height={51}
          src={logo} 
          alt="Logo" 
        />
        </Link>
      </div>
      <div className="nav hidden">
        <ul className="nav">
            <Link to={"/"}>
              <li><a>Home</a></li>
            </Link>
            <Link to={"about"}>
              <li><a>Sobre</a></li>
            </Link>
            <Link to={"models"}>
              <li><a>Modelos de Veículos</a></li>
            </Link>
            <Link to={"testimonials"}>
              <li><a>Comentários</a></li>
            </Link>
            <Link to={"contact"}>
              <li><a>Contato</a></li>
            </Link>
        </ul>
      </div>
      <div className="flex gap-4 hidden">
        <Link to={"login"}>
          <button 
          className="btn-signin"
          >
           Sign In
          </button>
        </Link>
        <Link to={"register"}>
          <button 
          className="btn-register"
        >
          Register
        </button>
        </Link>
      </div>
    </div>  
  )
}