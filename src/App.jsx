
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import PizzaDetail from './views/PizzaDetail'
import ShoppingCart from './views/ShoppingCart'

function App() {
 

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pizza/:id' element={<PizzaDetail/>}/>
        <Route path='/carrito' element={<ShoppingCart/>} />
      </Routes>
    </>
  )
}

export default App
