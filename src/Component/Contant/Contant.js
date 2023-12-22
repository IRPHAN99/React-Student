
import"../Contant/Contant.css"
import { FaRegCreditCard } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { TbBrandStackshare } from "react-icons/tb";
import { DiMagento } from "react-icons/di";
import { FaFileAlt } from "react-icons/fa";
import pic from '../../Assets/guy.jpg'
import { FaGreaterThan } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";


const Contant = () => {
  const[show,setShow]=useState(true);
  return (
    <>
      <div className='box1'>
        <div className='child'>
          <div className='sub-child1'>
            <div className='supersub-child1'>
              <div className='iconbox1'>
                <FaRegCreditCard style={{ width: "35px", height: "35px", color: "white" }} />
              </div>
              <p style={{ marginLeft: "-290px" }}>Your subscription ends on 25 February 2015</p>
              <div className='buttonLast'>UPGRADE</div>
            </div>

            <div className='supersub-child2'>
              <div className='supersub'>
                <div className='firstbox1' style={{ width: "100%", height: "70px", borderBottom: '0.05px solid rgb(248, 224, 224)' }}>
                  <p style={{ fontSize: "25px", marginLeft: "10px" }}>Courses</p>
                  <p style={{ marginLeft: "10px" }}>Your recent courses</p>
                </div>

                <div className='firstbox'>
                  <div style={{ width: "70%", marginLeft: "10px" }}>Basics of HTML</div>
                  <div style={{ width: "30%" }}>
                    <div style={{ width: "50px", height: '8px', backgroundColor: 'rgb(102,187,106)' }}></div>
                  </div>
                </div>

                <div className='firstbox'>
                  <div style={{ width: "70%", marginLeft: "10px" }}>Angular in Steps</div>
                  <div style={{ width: "30%" }}>
                    <div style={{ width: "90px", height: '8px', backgroundColor: 'rgb(102,187,106)' }}></div>
                  </div>
                </div>

                <div className='firstbox'>
                  <div style={{ width: "70%", marginLeft: "10px" }}>Bootstrap Foundations</div>
                  <div style={{ width: "30%" }}>
                    <div style={{ width: "30px", height: '8px', backgroundColor: 'rgb(102,187,106)' }}></div>
                  </div>
                </div>

                <div style={{
                  width: "80px", height: "35px",
                  border: '0.05px solid rgb(248, 224, 224)', textAlign: "center",
                  marginLeft: "290px", marginTop: "18px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <p style={{ fontSize: '12px' }}>VIEW ALL</p>
                </div>

              </div>





              <div className='supersub0'>
                <div className='supersub1'>
                  <p style={{ fontSize: "25px" }}>Courses</p>
                  <p style={{ marginTop: "3px" }}>Your latest achievements</p>
                  <div className='parenticon1'>
                    <div className='divicon1' style={{ backgroundColor: "rgb(186,104,200)" }}>
                      <FaStar style={{ width: "25px", height: "25px", color: "white" }} /></div>
                    <div className='divicon1' style={{ backgroundColor: "rgb(121,134,203)" }}>
                      <FaTrophy style={{ width: "25px", height: "25px", color: "white" }} /></div>
                    <div className='divicon1' style={{ backgroundColor: "rgb(129,199,132)" }}>
                      <FaGraduationCap style={{ width: "25px", height: "25px", color: "white" }} /></div>
                    <div className='divicon1' style={{ backgroundColor: "rgb(255,183,77)" }}>
                      <TbBrandStackshare style={{ width: "25px", height: "25px", color: "white" }} /></div>
                    <div className='divicon1' style={{ backgroundColor: "rgb(229,115,115)" }}
                    ><DiMagento style={{ width: "25px", height: "25px", color: "white" }} /></div>
                  </div>
                </div>


                <div className='supersub2'>
                  <p style={{ fontSize: "25px" }}>Certificates (4)</p>
                  <div className='fileicon'>
                    <div className='fileicon1'><FaFileAlt /></div>
                    <div className='fileicon1'><FaFileAlt /></div>
                    <div className='fileicon1'><FaFileAlt /></div>
                    <div className='fileicon1'><FaFileAlt /></div>
                  </div>
                </div>
              </div>
            </div>


            <div className='thirdbox'>
                <div className='thirdbox1'>
                  <div className='thirdbox1child0' style={{marginLeft:'10px',borderBottom:' 0.05px solid rgb(248, 224, 224)'}}>
                    <p style={{fontSize:"30px"}}>Quizzes</p>
                    <p style={{marginBottom:'10px'}}>Your recent performance</p>
                  </div>
                  <div className='thirdbox1child'>
                    <span style={{padding:"10px"}}>
                      <p >Title of quiz goes here?</p>
                      <p style={{fontSize:"12px",marginTop:"3px"}}>Course: <a href='#' style={{textDecoration:'none'}}>Basics of HTML</a></p>
                    </span>

                    <span  style={{padding:"10px",marginBottom:"10px"}}>
                      <p style={{fontSize:"30px"}}>5.8</p>
                      <p style={{fontSize:"12px",marginBottom:"6px",marginLeft:"4px"}}>Good</p>
                    </span>
                  </div>

                  <div className='thirdbox1child'>
                    <span style={{padding:"10px"}}>
                      <p >Directives & Routing</p>
                      <p style={{fontSize:"12px",marginTop:"3px"}}>Course: <a href='#' style={{textDecoration:'none'}}> Angular in Steps</a></p>
                    </span>

                    <span  style={{padding:"10px",marginBottom:"10px"}}>
                      <p style={{fontSize:"30px"}}>9.8</p>
                      <p style={{fontSize:"12px",marginBottom:"6px",marginLeft:"4px"}}>Great</p>
                    </span>
                  </div>

                  <div className='thirdbox1child'>
                    <span style={{padding:"10px"}}>
                      <p >Responsive & Retina</p>
                      <p style={{fontSize:"12px",marginTop:"3px"}}>Course: <a href='#' style={{textDecoration:'none'}}> Bootstrap Foundations</a></p>
                    </span>

                    <span  style={{padding:"10px",marginBottom:"10px"}}>
                      <p style={{fontSize:"30px"}}>3.4</p>
                      <p style={{fontSize:"12px",marginBottom:"6px",marginLeft:"4px"}}>Failed</p>
                    </span>
                  </div>

                  <div className='thirdbox1child' >
                    <div style={{width:'110px', height:'35px',backgroundColor:'rgb(66,165,245)',
                                display:'flex',justifyContent:'center',alignItems:'center', borderRadius:'1px',marginLeft:'10px'}}>
                    <p style={{fontSize:'12px'}}>GO TO RESULT</p>
                    </div>
                    
                  </div>

                  
                  

                  
                </div>
                <div className='thirdbox2'>
                   <h1>Forum Activity</h1>
                   <p>Latest forum topics & comments</p>
                   <br></br>
                  <div style={{width:'100%',height:'auto', border:'0.05px solid rgb(248, 224, 224)'}}>
                   <div className='thirdbox2child'>
                    <img src={pic} style={{width:'40px',height:'40px',borderRadius:'100%'}}/>
                    <div className='subthidbox2child' style={{marginLeft:'10px'}}>
                    <p>Can someone help me with AngularJS?</p>
                    <p style={{fontSize:"12px",marginTop:"3px"}}>Topic: AngularJS   By: Adrian Demian</p>
                    </div>
                   </div>
                  </div>

                   
                  
                </div>
            </div>

          </div>
          <div className='sub-child2'>
            <div className='parent' onClick={()=>setShow(!show)}>
              <p>My Account</p>
              
              {
                show?<p><FaGreaterThan style={{width:"8px",height:"8px",transform:"rotate(90deg)"}}/></p>
                :<p><FaGreaterThan style={{width:"8px",height:"8px"}}/></p>
             }
            </div>
            
            

            {
              show? <div>
              <a href='#' style={{textDecoration:"none",color:"black"}}><div className='parentchild'>Dashboard</div></a>
              <a href='#' style={{textDecoration:"none",color:"black"}}><div className='parentchild'>My Course</div></a>
              <a href='#' style={{textDecoration:"none",color:"black"}}><div className='parentchild'>Profile</div></a>
              <a href='#' style={{textDecoration:"none",color:"black"}}><div className='parentchild'>Massage</div></a>
              <a href='#' style={{textDecoration:"none",color:"black"}}><div className='parentchild'>Log Out</div></a>
              </div>
              :null
            }
           
           
             <br></br>
            <div className="parent2">
              <h3>Featured</h3>
              
              <div className="parentcrowsal">
              <div className="crowsal">
                <div className="insidecrowsal" style={{display:"flex"}} >
                  <div style={{width:"40%", height:"150px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <FaGithub style={{width:"30px",height:"30px"}}/>
                  </div>
                  <div style={{width:"60%", height:"150px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                    <p  style={{width:"60%"}}>Github Webwork For Begginers</p>
                    <div className="start" style={{marginTop:'10px',marginRight:'20px'}}>
                     <FaStar style={{color:"yellow"}}/>
                     <FaStar style={{marginLeft:"3px",color:"yellow"}}/>
                     <FaStar style={{marginLeft:"3px",color:"yellow"}}/>
                     <FaStar style={{marginLeft:"3px"}}/>
                     <FaStar style={{marginLeft:"3px"}}/>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Contant