import React, { useState } from 'react'
import Modal from './Modal'

const Card = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
        {show==true?<Modal el={el} setshow={setshow} />:null}
      <img src={el.image} alt="" />
      
      <button onClick={()=>setshow(true)} >Show Details</button>
    </div>
  )
}

export default Card
