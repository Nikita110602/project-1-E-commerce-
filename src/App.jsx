import './App.css';
import {Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Detauls from './components/Detauls';

const App = () => {
  return (
    <>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Detauls' element={<Detauls/>}/>
   </Routes>
   
    </>
  )
}

export default App