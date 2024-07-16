import React from 'react'

const Modal = ({setshow,el}) => {
  return (
    <div className='modal'>
      <div className='box_modal'>
        <button onClick={()=>setshow(false)} >X</button>
        <h1>{el.name}</h1>
        <h2>{el.price}</h2>
      </div>
    </div>
  )
}

export default Modal
