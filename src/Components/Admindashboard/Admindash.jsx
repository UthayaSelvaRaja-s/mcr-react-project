import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card, Modal } from 'antd';
import { Layout} from 'antd';
import  './Admindash.css';
const {Footer, Content } = Layout;

function Admindash() {
  const [users, setUsers] = useState([]);
  let [showModal,setShowModal]=useState (false);
  const[selectUser,setSelectuser]=useState(null)
  const navigate = useNavigate();
  const UserSelection = (user) => {
    setSelectuser(user);
    setShowModal(true); // Open the modal when a user is selected
  };

  // Get data from DB
  useEffect(() => {
    axios.get('http://localhost:3001/getusers')
      .then(response => setUsers(response.data))  // Assuming the response is an array
      .catch(err => console.log(err));
  }, []); // empty dependency array for running the effect once

  // Get data from backend jwt
  axios.defaults.withCredentials=true;
  useEffect(() => {
    axios.get('http://localhost:3001/admindash')
      .then(result => {
        console.log(result);
        if (result.data !== "sucess") {
          navigate("/adminlogin");
        }
      })
      .catch(err => {
        console.log(err);
        navigate("/adminlogin"); // Handle error by redirecting to adminlogin
      });
  }, [navigate]); // Add navigate to the dependency array if it's a closure variable
  

  

  return (
    <div>
    <Layout>
  <Content>
  <div className='Admindashcontainer'>
      <div className='OwnersContainer'>
        {users.map(user => (
          <div key={user.id}> {/* Add a unique key for each user */}
            <Card  bordered={false}style={{ width: 100,}}  onClick={() =>UserSelection(user)}>
              <div className='Cardcontainer'>

              <p className='Cardtext'>{user.Houseno.toUpperCase()}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
      {/* to show the data in modal */}
      <Modal centered open={showModal}onOk={() => setShowModal(false)}onCancel={() => setShowModal(false)}>
        {selectUser && (
          <div>
            <form action="/add" method="put">
            <p className='Modaltext'>Name: {selectUser.Name.toUpperCase()}</p>
            <p className='Modaltext'>Email: {selectUser.Email}</p>
            <p className='Modaltext'>Phone: {selectUser.Phone}</p>
            <p className='Modaltext'>House No: {selectUser.Houseno.toUpperCase()}</p>
            <p className='Modaltext'>Username:{selectUser.Username}</p>
            <div className='Maintain'>
            <p className='Modaltext'>Maintanence:</p>
            <input style={{height:"20px",width:"100px"}} type="text" name="" id="" />
            </div>
            </form>
          </div>
        )}
      </Modal>
      
     
    </div>


   
  </Content>
  <Footer></Footer>
</Layout>
</div>
  );
}

export default Admindash;
