import React from 'react'
import "../Card/Nextcard.css"
const Nextcard = (props) => {
  return (
    <>
      <div className='nextcard'>
        <div className='icon-nextcard'> 
        <div className='iconbox'>
        <props.icon style={{fontSize:'30px',color:'blue'}}/>
        </div>
        </div>
        <div className='title-nextcard'>
          <p style={{ fontSize: "20px",marginTop:'20px' }}>{props.title}</p>
          <p style={{ fontSize: "15px" ,marginTop:'10px',marginLeft:'30px'}}>
          
            <props.star style={{color:'yellow'}}/>
            <props.star style={{color:'yellow'}}/>
            <props.star style={{color:'yellow'}}/>
            <props.outlinestar style={{color:'yellow'}}/>
            <props.outlinestar style={{color:'yellow'}}/>
            
            </p>
        </div>
      </div>
    </>
  )
}

export default Nextcard


