import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Layout } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Userdashboard/Userdash.css';

const { Content, Footer } = Layout;

function Userdash() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const location = useLocation();
  const Navigate = useNavigate();

  // Get data from DB
  useEffect(() => {
    axios.get('http://localhost:3001/getusers')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Assuming the user information is passed from the login page
    const loggedInUsername = location.state && location.state.user && location.state.user.username;

    // If username is available, filter users
    if (loggedInUsername) {
      const filteredUsers = users.filter(user => user.Username === loggedInUsername);
      setFilteredUsers(filteredUsers);
    } else {
      // If no username is available, navigate back to login page
      Navigate("/userlogin");
    }
  }, [location.state, Navigate, users]);

  if (!filteredUsers.length) {
    // Waiting for user information, you might want to render a loading spinner or some message
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Layout>
        <Content>
          <div>
            {filteredUsers.map(user => (
              <div key={user.id}>
                <div className="Userdash-Container">
                  <h1>Welcome {user.Name.toUpperCase()}</h1>
                  <Card bordered={false}>
                    <p className='Cardtext'>Name: {user.Name.toUpperCase()}</p>
                    <p className='Cardtext'>Email: {user.Email}</p>
                    <p className='Cardtext'>Phone: {user.Phone.toUpperCase()}</p>
                    <p className='Cardtext'>House No: {user.Houseno.toUpperCase()}</p>
                    <p className='Cardtext'>Username: {user.Username.toUpperCase()}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default Userdash;
