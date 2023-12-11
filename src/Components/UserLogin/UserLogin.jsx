import React from 'react'
import { useState } from 'react';
import "../UserLogin/UserLogin.css"
import { Card, Layout,Input ,Button} from 'antd';
import  { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const {Footer, Content } = Layout;
function UserLogin(){ 
  //Variable to save the data in the input feilds
  let [Name,setName]=useState();
  let [Username,setUsername]= useState()
  let [Password,setPassword]= useState()

 
      const Navigate = useNavigate();
      axios.defaults.withCredentials = true;
      const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/userlogin',{Name,Username,Password})
        .then(result => {
          console.log(result)
        if(result.data === "Sucess"){
          Navigate("/userdash",{state:{ user: { name:Name,username: Username } }})
        }})
        .catch(err =>console.log(err))
      }
  return (
    <div>
        <Layout>
      <Content>
      <div className="Userlogincontainer" >
        <div className='UserLoginformdesign'>
        <div className='Loginslide'>
        <Card className='UserLogincardback' style={{ width: "400px" }}>
    </Card>
        </div>
        <div className='UserLoginform'>   
        <Card >
          <form onSubmit={handleSubmit}>
          <div className="UserLoginheader">
            <div className="UserText">User Login</div>
            <div className="UserUnderline"></div>
        </div>
        <div className="UserInputs">
          <div className="UserInput">
            <label htmlFor="username">USERNAME</label>
            <Input type="text" name="" id="" onChange={(e)=>setUsername(e.target.value)}/><br/>
          </div>
          <div className="UserInput">
            <label htmlFor="password">PASSWORD</label>
            <Input type="text" name="" id=""onChange={(e)=>setPassword(e.target.value)} /><br/>
          </div>
        </div>
        <div className="UserSubmit-container">
            <Input className='UserSubmit-login' type="submit" value="Login" />
        </div>
          </form>
          <p>Not Have an Account?</p>
          <Link to="/user"> <Button className="UserSubmit-Reg">Register Now</Button></Link>
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
export default UserLogin;

