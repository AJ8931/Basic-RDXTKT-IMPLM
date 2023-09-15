import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';

const Product = () => {
    const { data: products, status } = useSelector(state => state.product);
    console.log(status);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());

        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data)
        //     setProducts(data)
        // }
        // fetchProducts();
    }, []);
    const handleAdd = (Product) => {
        dispatch(add(Product));
    }
    return (
        <div className='productsWrapper'>
            {status === STATUSES.LOADING ?
                <div>
                    <h4>Loading...</h4>
                </div>
                :
                products.map((product) => (
                    <div className='card' key={product.id} >
                        <img src={product.image} alt="/" />
                        <h4 style={{ minHeight: "150px", textAlign: "center", alignItems: "center", justifyContent: "center", display: "flex" }}>{product.title}</h4>
                        <h5 style={{ textAlign: "center", alignItems: "center", justifyContent: "center", display: "flex" }}>{product.price}</h5>
                        <button className='btn' onClick={() => handleAdd(product)} >add to cart </button>
                    </div>

                ))

            }
        </div>
    )
}

export default Product