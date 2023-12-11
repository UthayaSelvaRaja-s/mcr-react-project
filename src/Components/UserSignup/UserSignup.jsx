import React from 'react'
import { useState } from 'react';
import './UserSignup.css'
import { Card, Layout,Input ,Button} from 'antd';
import  { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const {Footer, Content } = Layout;
function UserSignup(){
  //this varialbe is to change the state between login and signup 

  //Variable to save the data in the input feilds
  let [Name,setName]= useState()
  let [Email,setEmail]= useState()
  let [Phone,setPhone]= useState()
  let [Houseno,setHouseno]= useState()
  let [Username,setUsername]= useState()
  let [Password,setPassword]= useState()

      const Navigate = useNavigate();
      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/user',{Name,Email,Phone,Houseno,Username,Password})
        .then(result =>{console.log(result)
          if(Name !=="" && Email !== "" && Phone !=="" && Houseno !== "" && Username !== "" && Password !== ""){
            Navigate("/userlogin")
          }else{   
            Navigate('/user')
          }
        })

        .catch(err =>console.log(err))
      }
  return (
    <div>
        <Layout>
      <Content>
      <div className="Usersigncontainer" >
        <div className='Usersignformdesign'>
          <div className='slide'>
         <Card className='Usersigncardback' style={{ width: "400px" }}>
         </Card>
          </div>
         <div className='Usersignform'>   
        <Card>
          <form onSubmit={handleSubmit}>
          <div className="UsersignUserheader">
            <div className="UsersignText">User Sign Up</div>
            <div className="UsersignUnderline"></div>
        </div>
        <div className="UsersignInputs">

          <div className="UsersignInput">
            <label htmlFor="name">NAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/><br/>
          </div>
          <div className="UsersignInput">
            <label htmlFor="email">E-MAIL</label>
            <Input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} /><br/>
          </div>
          <div className="UsersignInput">
            <label htmlFor="phone">PHONE NUMBER</label>
            <Input type="text" name="" id="" onChange={(e)=>setPhone(e.target.value)} /><br/>
          </div>
          <div className="UsersignInput">
            <label htmlFor="houseno">HOUSE NUMBER</label>
            <Input type="text" name="" id="" onChange={(e)=>setHouseno(e.target.value)}/><br/>
          </div>
          <div className="UsersignInput">
            <label htmlFor="username">USERNAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)}/><br/>
          </div>
          <div className="UsersignInput">
            <label htmlFor="password">PASSWORD</label>
            <Input type="text" name="" id=""onChange={(e)=>setPassword(e.target.value)} /><br/>
          </div>
        </div>
        <div className="UsersignSubmit-container">
            <Input className='UsersignSubmit-signup' type="submit" value="SIGNUP" />
        </div>
          </form>
          <p>Already Have an Account?</p>
          <Link to="/userlogin"> <Button className="UsersignSubmit">LOGIN</Button></Link>
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
export default UserSignup;
