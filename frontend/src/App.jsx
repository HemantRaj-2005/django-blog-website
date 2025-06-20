
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Home from './pages/Home/Home'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import ForgotPassword from './pages/Auth/ForgotPassword'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/sign-in" element={<SignIn /> } />
        <Route path="/sign-up" element={<SignUp /> } />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App