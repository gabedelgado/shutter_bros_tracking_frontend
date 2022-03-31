import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home"
import Navbar from './components/Navbar';
import CustomerOrder from './components/CustomerOrder';
import LoginBox from './components/LoginBox';
import AdminHome from './components/AdminHome';
import { useEffect, useState } from 'react';
import { post } from "./http/service"
import AdminEditOrder from './components/AdminEditOrder';
import NewUser from './components/NewUser';

function App() {
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    post("/auth/verifytoken", {}).then(results => {
      if (results.status === 200){
        setAdmin(true)
      }
    })
  }, [])

  return (
    <div className="App">
      <Navbar admin={admin} setAdmin={setAdmin}></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/order/:orderNumber" element={<CustomerOrder/>}/>
        <Route path="/admin/all" element={<AdminHome admin={admin}/>}/>
        <Route path="/login" element={<LoginBox admin={admin} setAdmin={setAdmin}/>}/>
        <Route path="/admin/edit/:orderNumber" element={<AdminEditOrder admin={admin}/>}/>
        <Route path="/admin/newUser" element={<NewUser />}/>
        {/* <Route path="/admin/manualEntry" element={<NewOrder />}/> */}
      </Routes>
    </div>
  );
}

export default App;
