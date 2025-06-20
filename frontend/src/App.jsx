
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App