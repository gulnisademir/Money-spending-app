import React from 'react'

export const BasketItem = ({item, product}) => {
  return (
    <li className='basket-item'>{product.title} x {item.amount}</li>
  )
}
