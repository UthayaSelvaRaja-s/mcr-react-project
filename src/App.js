import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import About from './Components/About/About'
import UserSignup from './Components/UserSignup/UserSignup';
import UserLogin from './Components/UserLogin/UserLogin';
import  AdminSignup from './Components/Adminsignup/Adminsignup';
import Adminlogin from './Components/Adminlogin/Adminlogin'
import Userdash from './Components/Userdashboard/Userdash';
import Admindash from './Components/Admindashboard/Admindash';
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <Router>
        <Header></Header>
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
         <Route path='/about'element={<About/>} ></Route> 
        <Route path='/user'element={<UserSignup/>}></Route>
        <Route path='/userlogin'element={<UserLogin/>}></Route>
        <Route path='/admin'element={<AdminSignup/>}></Route>
        <Route path='/adminlogin'element={<Adminlogin/>}></Route> 
        <Route path='/userdash'element={<Userdash/>}></Route>
        <Route path='/admindash'element={<Admindash/>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    
    </Router>

  );
}

export default App;
