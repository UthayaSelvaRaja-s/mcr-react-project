import React from 'react'
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined

  } from '@ant-design/icons';
  import "../Footer/Footer.css"
import { Button, Input } from 'antd';

function Footer () {
  return (
    <div className='Main-footer'>
        <div className="Footer-Container">
            <div className="Footer-header">
                <div className="Heading">
                    <h4 className='Footer-heading'>Address</h4>
                    <ul className="Footer-list">
                        <li>9070442710</li>
                        <li>P.S.PURAM,TENKASI</li>
                        <li>8/3A,South Street</li>

                    </ul>
                </div>
                <div className="Heading">
                    <h4 className='Footer-heading'>Partners</h4>
                    <ul className="Footer-list">
                        <li>Rani Enterprises</li>
                        <li>Shanmuga Traders</li>
                        <li>Sweet Furnitures</li>
                        <li>Selva Constructions</li>

                    </ul>
                </div>
                <div className="Heading">
                    <h4 className='Footer-heading'>Follow us</h4>
                    <div className="Footer-list-icons">
                        <div><FacebookOutlined style={{fontSize:"25px"}}/></div>
                        <div><InstagramOutlined style={{fontSize:"25px"}} /></div>
                        <div><TwitterOutlined style={{fontSize:"25px"}}/></div>
                        <div><YoutubeOutlined style={{fontSize:"25px"}}/></div>
                    </div>
                </div>
                <div className="Heading">
                    <h4 className='Footer-heading'>Subscribe</h4>
                    <div className="Mail-sub">
                    <Input placeholder="Enter your email" />
                    <Button type="primary">Subscribe</Button>
                    </div> 
                </div>
            </div>
        </div>

    </div>
  )
}
export default Footer;