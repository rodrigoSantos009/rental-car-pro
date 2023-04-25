import { Home } from './pages/Home'
import { About } from './pages/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/global.css'
import { MobileHeader } from './components/Home/MobileHeader'
import { Login } from './components/Home/Login'
import { Models } from './pages/Models'
import { Register } from './components/Home/Register'
import { Header } from './components/Home/Header'
import { AuthProvider } from './contexts/Auth/Index'
import { ProtectedLayout } from './components/ProtectedLayout/ProtectedLayout'
import { Perfil } from './components/Perfil/Perfil'

function App() {
  return (
    <AuthProvider>
      <div className="w-screen h-screen">
        <Router>
          <Header />
          <MobileHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<ProtectedLayout>
              <Models />
            </ProtectedLayout>} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/perfil' element={<Perfil />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App
