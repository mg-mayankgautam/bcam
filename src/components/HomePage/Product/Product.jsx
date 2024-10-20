import React from 'react'
import './Product.css'
import img from '../../assets/sampleprod.png'

const Product = () => {
    return (
        <div className='Product'>
            <div className='ProdImg'>
                <img src={img} />
            </div>

            <div className='prodHead'>
                BEC-Wi-Fi-WL01
            </div>
            <div className='prodText'>
                2MP Full-color Guard+ <br /> Network Bullet Camera
            </div>
        </div>
    )
}

export default Product