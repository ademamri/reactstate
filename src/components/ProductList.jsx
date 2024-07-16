import React, { useState } from 'react'
import Card from './Card'
import Modal from './Modal'

const ProductList = () => {
    let products=[
        {
            image:"data:image/jpeg;base64,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",
            name:"IPHONE 11",
            price:2900
        },
        {
            image:"data:image/jpeg;base64,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",
            name:"IPHONE 12",
            price:3600
        },
        {
            image:"data:image/jpeg;base64,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",
            name:"IPHONE 14",
            price:5600
        },
    ]
  return (
    <div>
      <div className='list'>
        {products.map(el=><Card el={el} />)}
        </div>
    
    </div>
  )
}

export default ProductList
