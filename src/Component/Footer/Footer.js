import React from 'react'
import '../Footer/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
const Footer = () => {
    return (
        <>
            <div className='footerbox'>
                <div className='childfooterbox'>
                    {/*-------------------- start footerColum1 --------------------------------------------*/}
                    <div className='footerColum1'>
                        <p style={{ fontSize: "25px",marginTop:'10px',color:"rgb(97,97,97)" }}>Corporate</p>
                        <p><a href='#'>About the company</a></p>
                        <p><a href='#'>Company offices</a></p>
                        <p><a href='#'>Partners</a></p>
                        <p><a href='#'>Terms of use</a></p>
                        <p><a href='#'>Privacy</a></p>
                        <p><a href='#'>Contact us</a></p>
                    </div>

                    <div className='footerColum1'>
                        <p style={{ fontSize: "25px",marginTop:'10px',color:"rgb(97,97,97)" }}>Explore</p>
                        <p><a href='#'>Courses</a></p>
                        <p><a href='#'>Tutors</a></p>
                        <p><a href='#'>Pricing</a></p>
                        <p><a href='#'>Become Tutor</a></p>
                        <p><a href='#'>Sign Up</a></p>
                        
                    </div>
                    {/*-------------------- End footerColum1 --------------------------------------------*/}

                    {/*-------------------- start footerColum2 --------------------------------------------*/}
                    <div className='footercoloum2'>
                        <p style={{ fontSize: "25px",marginTop:'10px',color:"rgb(97,97,97)" }}>Newsletter</p>
                        <div className='text-button'>
                        <input type="text" id="fname" name="fname" value="Enter Email Here..."></input>
                        <button type='button'>SUBSCRIBE</button>
                        </div>
                        <div className='footercolomiconbox'style={{display:"flex",marginTop:"30px"}}>
                            <div style={{backgroundColor:"rgb(63,81,181)"}}><FaFacebookF/></div>
                            <div style={{backgroundColor:"rgb(233,30,99)"}}><FaTwitter/></div>
                            <div style={{backgroundColor:"rgb(33,150,243)"}}><IoMdFootball/></div>
                            <div style={{backgroundColor:"rgb(189,54,47)"}}><IoLogoGoogleplus/></div>
                        </div>
                        <p style={{color:"rgb(66,66,66)"}}>© 2015 Learning App by mosaicpro.</p>
                    </div>
                    {/*-------------------- end footerColum2 --------------------------------------------*/}
                </div>
            </div>
        </>
    )
}

export default Footer