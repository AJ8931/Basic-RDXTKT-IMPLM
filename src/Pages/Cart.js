import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>CART</h3>
      <div className='cartWrapper'>
        {
          products.map((product) => (
            <div className='cartCard'>
              <img src={product.image} alt="//" />
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => dispatch(remove(product.id))}>Remove</button>
            </div>
          ))

        }
      </div>
    </div>
  )
}

export default Cart