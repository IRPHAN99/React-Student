import React, { useState,useRef } from 'react'
import { BiCaretDown } from "react-icons/bi";



import pic from '../../Assets/guy.jpg'
import "../../Component/Header/Header.css"
const Header = () => {
  

  return (
    <>
    <div className='container' >
      <div className='logo'>
        <h2>Logo</h2>
      </div>
    
        <ul className='navbar'>
          <li className='navlist' ><a href="#" className='navlink'>Page </a><BiCaretDown className='down' /></li>
          <li className='navlist'><a href="#" className='navlink'>Course </a><BiCaretDown className='down' /></li>
          <li className='navlist'><a href="#" className='navlink'>Student </a><BiCaretDown className='down' /></li> 
          <li className='navlist'><a href="#" className='navlink'>Instructor </a><BiCaretDown className='down' /></li>
          <li className='navlist'><a href="#" className='navlink'>UI </a><BiCaretDown className='down' /></li>
        </ul>
      
      <div className='prolog'>
        <div className='profile'>
          <img src={pic} className='profilepic' style={{width:"40px" ,height:"40",borderRadius:"100%"}}/>
          <a href="#">Bill <BiCaretDown/></a>
        </div>
        <div className='button'><a href='#'>LOGIN</a></div>
      </div>
      
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
    {/*-------------------------------------- 2nd start Header --------------------------------------------- */}
        <div className='container2'>
          <div className='child-container2'>
            <img src={pic} style={{width:"80px", height:"80px",borderRadius:"100%"}}/>

            <div className='name-view'>
              <p style={{color:"white",fontSize:'35px'}}>Bill Smith</p>
              <a href="#" style={{color:"white",textDecoration:"underline"}}>View Public Profile</a>
            </div>

            <div className='bton'>Button</div>
          </div>
        </div>

     {/*-------------------------------------- 2nd End Header --------------------------------------------- */}

     {/*-------------------------------------- start navbar box1 --------------------------------------------- */}
       

     {/*-------------------------------------- End navbar box1 --------------------------------------------- */}
    </>
  )
}

export default Header