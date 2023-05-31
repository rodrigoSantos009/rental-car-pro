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
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { RentCarTest } from './components/Rent/RentCarTest'
import { RentCar } from './components/Rent/RentCar'
import { RegistrationAndPersonalData } from './components/Rent/RegistrationAndPersonalData'

function App() {
  return (
    <div className="w-screen h-screen">
      <AuthProvider>
        <Router>
          <Header />
          <MobileHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path='/rent/test' element={<RentCarTest />} />
            <Route path="/rent/:carId" element={<RentCar />} />
            <Route
              path="/finish"
              element={
                <ProtectedLayout children={<RegistrationAndPersonalData />} />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App
