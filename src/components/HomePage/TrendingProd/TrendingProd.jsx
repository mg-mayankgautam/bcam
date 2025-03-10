import React, { useEffect, useState } from 'react'
import './TrendingProd.css'
import Product from '../Product/Product'
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
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



    const [modal, setModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setModal(true); // Open the modal
    };

    const handleCloseModal = (e) => {
        if (e.target.className === 'modalContainer') {
            setModal(false);
        }
    };


    return (
        <div className='TrendingProd'>
            <div className='TP_head black'>
                <span className='orange'>Trending</span> Products
            </div>
            {/* <div className='TP_cardsFlex'>
                <Product />
            </div> */}

            <Swiper className='TP_cardsFlex'
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                // mousewheel={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                speed={1000}
                navigation={true}
                centeredSlides={true}
                // pagination={{ clickable: true, dots:true }}
                breakpoints={{
                    250: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    800: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
                onSwiper={(swiper) =>
                     console.log(swiper)

                }
                onSlideChange={() => console.log('slide change')}
            >
                {products.length > 0 && products.map((item, i) => (
                    <SwiperSlide key={i}
                        onClick={() => handleProductClick(item)}
                    >
                        <Product product={item} />
                    </SwiperSlide>
                ))
                }
            </Swiper>



            {modal && selectedProduct && (
                <div className='modalContainer' onClick={handleCloseModal}>
                    <div className='modal'>

                        <div className='prod_Flex'>

                            <div className='prod_Img'>
                                <img src={require(`../../../assets/products/${selectedProduct?.img}`)} alt='no' />
                            </div>

                            <div className='prod_Content'>
                                <div className='prod_modelno'>{selectedProduct.model_no}</div>
                                {/* <div className='prod_category'>{selectedCategory}</div> */}

                                <ul className='prod_features'>
                                    {selectedProduct.features?.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>


                            </div>
                        </div>

                        <div className='prod_btnDiv'>
                            <button className='prod_btn'>
                                Request for information
                            </button>
                        </div>
                    </div>
                </div>
            )}


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