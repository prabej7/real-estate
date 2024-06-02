import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/User/Home'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
