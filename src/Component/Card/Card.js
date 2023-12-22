import React from 'react'
import '../Card/Card.css'


const Card = (props) => {
  return (
    <>
    <div className='cardbox'>
        <div className='iconbox' style={props.color}>< props.icon/></div>
        <div className='contantbox'>
            <p style={{fontSize:'25px',margin:"10px"}}>{props.title}</p>
            <p style={{fontSize:'14px',margin:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut culpa fugiat iusto, molestias nemo nostrum quia rerum temporibus voluptatum.</p>
        </div>
    </div>
    </>
  )
}

export default Card