import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import CustomerOrder from './components/CustomerOrder';
import LoginBox from './components/LoginBox';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        {/* search order */}
        <Route path="/order/:orderNumber" element={<CustomerOrder/>}/>
        <Route path="/admin/all" element={<AdminHome/>}/>
        <Route path="/login" element={<LoginBox/>}/>

      </Routes>
    </div>
  );
}

export default App;
