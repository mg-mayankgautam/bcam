import React from 'react'
import './Product.css'

const Product = ({product}) => {
    return (
        <div className='Product'>
            <div className='ProdImg'>
                <img src={require(`../../../assets/products/${product?.img}`)} />
            </div>

            <div className='prodHead'>
                {product.model_no}
            </div>
            <div className='prodText'>
                {/* 2MP Full-color Guard+ <br /> Network Bullet Camera */}
            </div>
        </div>
    )
}

export default Product