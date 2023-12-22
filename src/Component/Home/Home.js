import React from 'react'
import "../../Component/Home/Home.css"
import Card from '../Card/Card'
import { PiFilmReelFill } from "react-icons/pi";
import { TbBallFootball } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { RiPrinterLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";


function Home() {
  return (
    <>

      <div className='imgbox'>
        <div className='coursebox'>
          <p style={{ fontSize: "44px" }}>Courses for Web & Mobile</p>
          <br></br>
          <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aspernatur consectetur consequatur distinctio earum ipsam.</p>
          <br></br>
          <div className='signuponly'><b>SIGN UP - ONLY $19/MO</b> </div>
        </div>
      </div>


      {/*--------------------------------------start Feature --------------------------------------------- */}

      <div className='mainfeaturebox'>
        <div className='feature'>
          <p style={{ fontSize: '40px' }}>Features</p>
          <br></br>
          <p style={{ fontSize: '20px' }}>Learn about all of the features we offer.</p>
        </div>


        <div className='featurebox'>
          <div className='subfeaturebox'>
            <Card icon={PiFilmReelFill} title={'Watch Courses Offline'} color={{ backgroundColor: "rgb(129,199,132)" }} />
            <Card icon={TbBallFootball} title={'Premium Support'} color={{ backgroundColor: "rgb(186,104,200)" }} />
            <Card icon={BsFillPersonFill} title={'Learn from Top Tutors'} color={{ backgroundColor: "rgb(255,167,38)" }} />
            <Card icon={FaCode} title={'Lesson Source Files'} color={{ backgroundColor: "rgb(38,198,218)" }} />
            <Card icon={RiPrinterLine} title={'Printed Diploma'} color={{ backgroundColor: "rgb(236,64,122)" }} />
            <Card icon={FaRegNewspaper} title={'New Lessons Every Day'} color={{ backgroundColor: "rgb(239,83,80)" }} />

          </div>
        </div>
      </div>

      {/*--------------------------------------start second Feature box --------------------------------------------- */}

      
        <div className='feature'>
          <p style={{ fontSize: '40px' }}>Featured Courses</p>
          <br></br>
          <p style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <br></br>
         
       
       

      {/*--------------------------------------End second Feature box --------------------------------------------- */}
     
      <div className='imgbox2'> 
      <p style={{fontSize:"50px",padding:"0px 10px 0px 10px",backgroundColor:"white", opacity:"0.7"}}>Feedback</p>
      <br></br>
        <p style={{fontSize:"20px",padding:"10px",backgroundColor:"white", opacity:"0.7"}}>How others use E-learning to improve their skills</p>
       </div>
      
      
      
    </>
  )
}

export default Home