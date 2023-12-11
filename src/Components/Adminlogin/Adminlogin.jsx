import React from 'react'
import { useState } from 'react';
import "../Adminlogin/Adminlogin.css"
import { Card, Layout, Input ,Button} from 'antd';
import  { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const {Footer, Content } = Layout;
function Adminlogin(){ 
  //Variable to save the data in the input feilds

  let [Username,setUsername]= useState()
  let [Password,setPassword]= useState()

  
      const Navigate = useNavigate();
      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/Adminlogin',{Username,Password})
        .then(result => {
          console.log(result)
        if(result.data === "Admin"){
          Navigate("/admindash")
        }})
        .catch(err =>console.log(err))
      }
  return (
    <div>
        <Layout>
      <Content>
      <div className="Adminlogincontainer" >
        <div className='AdminLoginformdesign'>
        <div className='AdminLoginslide'>
        <Card className='AdminLogincardback' style={{ width: "400px" }}>
    </Card>
        </div>
        <div className='AdminLoginform'>   
        <Card style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"400px",
      border:"none",borderLeft:"2px solid rgba(255, 255, 255, 0.6)",borderTop:"2px solid rgba(255, 255, 255, 0.6) ",
      boxShadow:"3px 3px 5px 5px rgba(255, 255, 255, 0.6)",background:"transparent"}}>
          <form onSubmit={handleSubmit}>
          <div className="AdminLoginheader">
            <div className="AdminText">Admin Login</div>
            <div className="AdminUnderline"></div>
        </div>
        <div className="AdminInputs">
          <div className="AdminInput">
            <label htmlFor="username">USERNAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)}/><br/>
          </div>
          <div className="AdminInput">
            <label htmlFor="password">PASSWORD</label>
            <Input type="text" name="" id=""onChange={(e)=>setPassword(e.target.value)} /><br/>
          </div>
        </div>
        <div className="AdminSubmit-container">
            <Input className='AdminSubmit-login' type="submit" value="LOGIN" />
        </div>
          </form>
          <p>Not Have an Account?</p>
          <Link to="/admin"> <Button className="AdminSubmit-reg">Register Now</Button></Link>
        </Card>
        </div>
        </div>
        </div>
     
       
      </Content>
      <Footer></Footer>
    </Layout>
    </div>
  )
}
export default Adminlogin;

