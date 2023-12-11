import React from 'react'
import { useState } from 'react';
import '../Adminsignup/Adminsignup.css'
import { Card, Layout,Input ,Button,} from 'antd';
import  { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const { Footer, Content } = Layout;
function AdminSignup(){
  //this varialbe is to change the state between login and signup 

  //Variable to save the data in the input feilds
  let [Name,setName]= useState()
  let [Email,setEmail]= useState()
  let [Username,setUsername]= useState()
  let [Password,setPassword]= useState()

  
      const Navigate = useNavigate();
      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/admin',{Name,Email,Username,Password})
        .then(result =>{console.log(result)
          if(Name !=="" && Email !== "" && Username !== "" && Password !== ""){
            Navigate("/adminlogin")
          }else{   
            Navigate('/admin')
          }
        })

        .catch(err =>console.log(err))
      }
  return (
    <div>
        <Layout>
      <Content>
      <div className="Adminsigncontainer" >
        <div className='Adminsignformdesign'>
        <div className='Adminsignslide'>
        <Card className='Adminsigncardback' style={{ width: "400px" }}>
    </Card>
        </div>
        <div className='form'>   
        <Card>
          <form onSubmit={handleSubmit}>
          <div className="Adminsignheader">
            <div className="AdminsignText">Admin SignUp</div>
            <div className="AdminsignUnderline"></div>
        </div>
        <div className="AdminsignInputs">

          <div className="AdminsignInput">
            <label htmlFor="name">NAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/><br/>
          </div>
          <div className="AdminsignInput">
            <label htmlFor="email">E-MAIL</label>
            <Input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} /><br/>
          </div>
          <div className="AdminsignInput">
            <label htmlFor="username">USERNAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)}/><br/>
          </div>
          <div className="AdminsignInput">
            <label htmlFor="password">PASSWORD</label>
            <Input type="text" name="" id=""onChange={(e)=>setPassword(e.target.value)} /><br/>
          </div>
        </div>
        <div className="AdminsignSubmit-container">
            <Input className='AdminsignSubmit-signup' type="submit" value="SIGNUP" />
        </div>
          </form>
          <p>Already Have an Account?</p>
          <Link to="/adminlogin"> <Button className="AdminsignSubmit">LOGIN</Button></Link>
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
export default AdminSignup;
