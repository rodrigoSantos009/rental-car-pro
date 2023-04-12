import { Home } from './pages/Home'
import { About } from './pages/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/global.css'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { Models } from './pages/Models'

function App() {
  return (
    <div className="w-screen h-screen">
     <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='models' element={<Models />} />
          <Route path='login' element={<Login />} />
        </Routes>
     </Router>
    </div>
  )
}

export default App
