import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Router ,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header></Header>
    <div>
    <Routes>
      <Route path='/' exact Component={Home}></Route>        
      <Route path="/cart" exact Component={Cart}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App