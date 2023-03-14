import './FooterStyle.css'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone,  FaTwitter} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <div>
                       <p>1223 Housing Society</p>
                       <p>bangladesh</p>

                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                        1234-445-6666</h4>

                    </div>
                    
                    <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                        info@gmail.com</h4>

                    </div>
                </div>
            
            <div className='right'>
                <h4>About the company</h4>
                    <p>
                        This is me chandra.CEO and Founder of Tech.I enjoy discussing new project and design challenges.
                    </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                    <FaTwitter size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                    <FaLinkedin size={20} style={{color:'#fff', marginRight:'2rem'}}/>

                </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Footer