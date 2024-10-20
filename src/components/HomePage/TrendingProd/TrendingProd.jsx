import React from 'react'
import './TrendingProd.css'
import Product from '../Product/Product'

const TrendingProd = () => {
    return (
        <div className='TrendingProd'>
            <div className='TP_head'>
                <strong className='orange'>Trending</strong> Products
            </div>

            <div className='TP_cardsFlex'>
                <Product/>
            </div>
        </div>
    )
}

export default TrendingProd