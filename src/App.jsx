import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Products_ID from "./pages/Products_ID.jsx"
import Home from "./pages/HomePage.jsx"
import Register from "./pages/Regiister.jsx"
import Login from "./pages/Login.jsx"
import ProtectedRoutes from "./pages/ProtectedRoutes.jsx"
import Cart from "./pages/Cart.jsx"
import Purchases from "./pages/Purchases.jsx"

function App() {

  return (
    <div>
      <div className='header' ><h1 className='header__title'><Link to={"/"}>E comerce</Link></h1>
        <ul className='header__list'>
          <li className='header__list__item'><Link to={"/"}>Home</Link></li>
          <li className='header__list__item'><Link to={"/login"}>Login</Link></li>
          <li className='header__list__item'><Link className='header__list__item' to={"/cart"}>Cart</Link></li>
          <li className='header__list__item'><Link to={"/purchases"}>Purchases</Link></li>
        </ul>
      </div>
      <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/product/:id" element={<Products_ID />} />  
          <Route path="/register" element={<Register />} />  
          <Route path="/login" element={<Login />} />  
          <Route element={<ProtectedRoutes />} >
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/purchases" element={<Purchases /> } />       
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
      </Routes>
    </div>
  )
}

export default App
