import React, { useEffect, useState } from 'react'
import './TrendingProd.css'
import Product from '../Product/Product'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import storeData from '../../../store.json'

const TrendingProd = () => {

    const [products, setproducts] = useState(storeData.flatMap(category =>
        category.products.filter(product => trendingIds.includes(product.model_no))
    ))

    useEffect(() => {
        const trendingProducts = storeData.flatMap(category =>
            category.products.filter(product => trendingIds.includes(product.model_no))
        );
        setproducts(trendingProducts)
        // console.log(trendingProducts, products);
    }, [])

    return (
        <div className='TrendingProd'>
            <div className='TP_head'>
                <strong className='orange'>Trending</strong> Products
            </div>
            {/* <div className='TP_cardsFlex'>
                <Product />
            </div> */}

            <Swiper className='TP_cardsFlex'
                modules={[Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={4}
                loop={true}
                navigation={true}
                centeredSlides={true}
                // pagination={{ clickable: true, dots:true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {products.length > 0 && products.map((item, i) => (
                    <SwiperSlide key={i}><Product product={item} /></SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default TrendingProd

const trendingIds = [
    "BEC-Wi-Fi-WL01",
    "BEC-Wi-Fi-WL03-D",
    "BEC-Wi-Fi-WL04PT-D",
    "BEC-IP-B-5.0MP/A/SL",
    "BEC-IP-D-5.0MP/A/SL",
    "BEC-IP-B-4.0MP/A/SL",
    "BEC-HD-D-3.0MP/SL/A",
    "BEC-HD-B-3.0MP/SL/A",
    "BEC-PoE-0402FE",
    "BEC-RT-01-4G/5G",
    "BEC-RT-03-4G/5G",
    "BEC-PS04-12",
    "BEC-PS08-12"
];