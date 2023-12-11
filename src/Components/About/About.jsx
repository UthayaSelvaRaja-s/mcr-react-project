import React from 'react';
import './About.css'
import { Card, Layout,} from 'antd';
import  { useNavigate } from 'react-router-dom'
const { Footer, Content } = Layout;
function About() {
      const Navigate = useNavigate();
  return (
    <div>
        <Layout>
      <Content>
        <div className="Aboutcontainer">
            <div className="AboutContent">
                <h1 className="Aboutheader">Welcome to Our MARIJOA CELESTIAL RESIDENCES</h1>
                <Card title="Experience Comfort and Luxury" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"black",color:"white",fontSize:"18px"}} style={{border:"0"}}>
                 <p className='Aboutabstract'>Welcome to our MARIJOA CELESTIAL RESIDENCES, where comfort meets luxury.
                  Our apartments are designed to provide a serene and tranquil living environment that you can call home. </p>
                </Card>
                <h1 className="Aboutheader">OUR APARTMENTS</h1>
                <Card title="Spacious and Modern Living" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"black",color:"white",fontSize:"18px"}} style={{border:"0"}}>
                 <p className='Aboutabstract'>Our apartments are spacious, modern, and equipped with all the amenities you need for comfortable living. 
                  Each apartment features a fully equipped kitchen, spacious bedrooms, modern bathrooms, and a cozy living area. </p>
                </Card>
                <h1 className="Aboutheader">AMENITIES</h1>
                <Card title="Everything You Need" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"black",color:"white",fontSize:"18px"}} style={{ border:"0"}}>
                 <p className='Aboutabstract'>We offer a range of amenities including a fitness center, swimming pool, 24/7 security, high-speed internet, and more. 
                  Our goal is to make your stay as comfortable as possible </p>
                </Card>
                 <h1 className="Aboutheader">NEIGHBORHOOD</h1>
                <Card title="Explore the Neighborhood" bodyStyle={{backgroundColor:"white",fontSize:"15px"}} headStyle={{backgroundColor:"black",color:"white",fontSize:"18px"}} style={{border:"0"}}>
                 <p className='Aboutabstract'>Our apartments are conveniently located near shopping centers, restaurants, and parks. 
                  Enjoy the best the city has to offer right at your doorstep </p>
                </Card>
            </div>
        </div>
      </Content>
      <Footer></Footer>
    </Layout>
    </div>
  )
}
export default About;
