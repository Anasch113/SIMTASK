
import Home from '../src/pages/Home/Home'

import "./app.scss"
import Watch from "../src/pages/watch/Watch"
import Register from "../src/pages/register/Register"
import Login from "../src/pages/login/Login"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
 

  return (
   
   <div className="app">
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/12812jzy8y1zn' element={<Home/>}/>
        <Route path='/watch' element={<Watch/>}/>
      </Routes>
    </Router>
  
   </div>
  )
}

export default App
