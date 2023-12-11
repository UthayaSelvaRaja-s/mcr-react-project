import React from 'react'
import "./Dashboard.css"
import { Card, Layout} from 'antd';
import Meta from 'antd/es/card/Meta';
const {Footer, Content } = Layout;


function Dashboard() { 
  return (
    <div>
    <Layout>
      <Content>
        <div className="container">
          <div className="logo">
          <h1 className='Name'>MARIJOA CELESTIAL RESIDENCES</h1>
          <p className="Slogan">"Unlock the Door to Happiness at "MARIJOA CELESTIAL RESIDENCES" - Your Dream Lifestyle Starts Here!"</p>
          </div>
          <div className="Content">
            <h1 className="Header"> Welcome to Our Apartment Community! 🏡</h1>
            <p className="Abstract">
            Welcome to our vibrant apartment community located in the heart of the city. 
            Our apartments offer the perfect blend of comfort, convenience, and style, designed to fit your lifestyle.
            </p>
            <p className="Experience">
            Experience the finest in apartment living with our spacious floor plans, premium amenities, and prime location.
            Our community offers a variety of one, two, and three-bedroom apartments that feature modern interiors and private balconies.
            </p>
          </div>
        </div>
        <div className="Explore">
          <div className="Roomimg">
            <Card hoverable style={{width:300}} cover={<img alt='Living Room' src='https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>}>
              <Meta title="LIVING ROOM"></Meta>
            </Card>
            <Card hoverable style={{width:300}} cover={<img alt='Kitchen' src='https://images.pexels.com/photos/3316918/pexels-photo-3316918.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>}>
              <Meta title="KITCHEN"></Meta>
            </Card>
            <Card hoverable style={{width:300}} cover={<img alt='Bed Room' src='https://images.pexels.com/photos/8031889/pexels-photo-8031889.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>}>
              <Meta title="BEDROOMS"></Meta>
            </Card>
            <Card hoverable style={{width:300}} cover={<img alt='Wash room' src='https://images.pexels.com/photos/7598120/pexels-photo-7598120.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'></img>}>
              <Meta title="WASH ROOM"></Meta>
            </Card>
          </div>
        </div>
      </Content>
      <Footer></Footer>
    </Layout>

    </div>
  )
}
export default Dashboard;
