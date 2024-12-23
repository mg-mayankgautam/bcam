import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // For blur effect
import './Gallery.css'
import One from '../../assets/gallery/one.jpg';
import Two from '../../assets/gallery/two.jpg';
import Three from '../../assets/gallery/three.jpg';
import Four from '../../assets/gallery/four.jpg';
import Five from '../../assets/gallery/five.jpg';
import Six from '../../assets/gallery/six.jpg';
import Seven from '../../assets/gallery/seven.jpg';
import Eight from '../../assets/gallery/eight.jpg';
import Nine from '../../assets/gallery/nine.jpg';
import Ten from '../../assets/gallery/ten.jpg';
import Eleven from '../../assets/gallery/eleven.jpg';
import Twelve from '../../assets/gallery/twelve.jpg';
import a from '../../assets/gallery/a.jpg';
import b from '../../assets/gallery/b.jpg';
import c from '../../assets/gallery/c.jpg';
import d from '../../assets/gallery/d.jpg';
import e from '../../assets/gallery/e.jpg';
import f from '../../assets/gallery/f.jpg';
import g from '../../assets/gallery/g.jpg';
import h from '../../assets/gallery/h.jpg';
import i from '../../assets/gallery/i.jpg';
import one from '../../assets/gallery/1.jpg';
import two from '../../assets/gallery/2.jpg';
import three from '../../assets/gallery/3.jpg';
import four from '../../assets/gallery/4.jpg';
import five from '../../assets/gallery/5.jpg';
import six from '../../assets/gallery/6.jpg';
import seven from '../../assets/gallery/7.jpg';
import eight from '../../assets/gallery/8.jpg';
import nine from '../../assets/gallery/9.jpg';
import ten from '../../assets/gallery/10.jpg';
import eleven from '../../assets/gallery/11.jpg';
import twelve from '../../assets/gallery/12.jpg';
import thirteen from '../../assets/gallery/13.jpg';
import fourteen from '../../assets/gallery/14.jpg';
import fifteen from '../../assets/gallery/15.jpg';
import sixteen from '../../assets/gallery/16.jpg';
import seventeen from '../../assets/gallery/17.jpg';
import eighteen from '../../assets/gallery/18.jpg';
import nineteen from '../../assets/gallery/19.jpg';
import twenty from '../../assets/gallery/20.jpg';
import twentyOne from '../../assets/gallery/21.jpg';
import twentyTwo from '../../assets/gallery/22.jpg';
import twentyThree from '../../assets/gallery/23.jpg';
import twentyFour from '../../assets/gallery/24.jpg';
import twentyFive from '../../assets/gallery/25.jpg';
import twentySix from '../../assets/gallery/26.jpg';
import twentySeven from '../../assets/gallery/27.jpg';
import twentyEight from '../../assets/gallery/28.jpg';
import twentyNine from '../../assets/gallery/29.jpg';
import thirty from '../../assets/gallery/30.jpg';
import thirtyOne from '../../assets/gallery/31.jpg';
import thirtyTwo from '../../assets/gallery/32.jpg';
import thirtyThree from '../../assets/gallery/33.jpg';
import thirtyFour from '../../assets/gallery/34.jpg';
import thirtyFive from '../../assets/gallery/35.jpg';
import thirtySix from '../../assets/gallery/36.jpg';
import thirtySeven from '../../assets/gallery/37.jpg';
import thirtyEight from '../../assets/gallery/38.jpg';
import thirtyNine from '../../assets/gallery/39.jpg';
import forty from '../../assets/gallery/40.jpg';
import fortyOne from '../../assets/gallery/41.jpg';
import fortyTwo from '../../assets/gallery/42.jpg';
import fortyThree from '../../assets/gallery/43.jpg';
import fortyFour from '../../assets/gallery/44.jpg';
import fortyFive from '../../assets/gallery/45.jpg';
import fortySix from '../../assets/gallery/46.jpg';
import fortySeven from '../../assets/gallery/47.jpg';
import fortyEight from '../../assets/gallery/48.jpg';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const images = [
    One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve
];

const images1 = [
    a, b, c, d, e, f, g, h, i
];

const imagesA = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
    thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty,
    twentyOne, twentyTwo, twentyThree, twentyFour, twentyFive, twentySix, twentySeven,
    twentyEight, twentyNine, thirty, thirtyOne, thirtyTwo, thirtyThree, thirtyFour,
    thirtyFive, thirtySix, thirtySeven, thirtyEight, thirtyNine, forty, fortyOne,
    fortyTwo, fortyThree, fortyFour, fortyFive, fortySix, fortySeven, fortyEight
];

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpenA, setIsModalOpenA] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (index) => {
        setActiveIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal1 = (index) => {
        setActiveIndex(index);
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };

    const openModalA = (index) => {
        setActiveIndex(index);
        setIsModalOpenA(true);
    };

    const closeModalA = () => {
        setIsModalOpenA(false);
    };

    return (
        <div className='Gallery'>

            <div className='TP_head MG_head bold'>
                <span className='orange'>IFSEC </span> 2024
            </div>

            <div className='C_productsContainer MG_Grid'>
                {imagesA.length > 0 && imagesA.map((image, index) => (
                    <div key={index} className='photoDiv'
                        onClick={() => openModalA(index)}
                    >
                        <LazyLoadImage
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            effect="blur"
                            className='photoDivImg'
                        />
                    </div>
                ))}
            </div>


            {isModalOpenA && (
                <div className="MG_modalContainer" onClick={closeModalA}>
                    <div className="MG_modal" onClick={(e) => e.stopPropagation()}>
                        <Swiper
                            initialSlide={activeIndex}
                            spaceBetween={10}
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {imagesA.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className='MG_modalImg'>
                                        <LazyLoadImage
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            effect="blur"
                                        // className='photoDivImg'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="close-btn" onClick={closeModalA}>Close</button>
                    </div>
                </div>
            )}



            <div className='TP_head MG_head bold'>
                {/* Media <span className='orange'>Gallery</span> */}
                <span className='orange'>Muzaffarnagar</span> Road Show
            </div>

            <div className='C_productsContainer MG_Grid'>
                {images.length > 0 && images.map((image, index) => (
                    <div key={index} className='photoDiv'
                        onClick={() => openModal(index)}
                    >
                        <LazyLoadImage
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            effect="blur"
                            className='photoDivImg'
                        />
                    </div>
                ))}
            </div>


            {isModalOpen && (
                <div className="MG_modalContainer" onClick={closeModal}>
                    <div className="MG_modal" onClick={(e) => e.stopPropagation()}>
                        <Swiper
                            initialSlide={activeIndex}
                            spaceBetween={10}
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className='MG_modalImg'>
                                        <LazyLoadImage
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            effect="blur"
                                        // className='photoDivImg'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}


            <div className='TP_head MG_head bold'>
                {/* Media <span className='orange'>Gallery</span> */}
                <span className='orange'>IFSEC</span> 2023
            </div>

            <div className='C_productsContainer MG_Grid'>
                {images1.length > 0 && images1.map((image, index) => (
                    <div key={index} className='photoDiv'
                        onClick={() => openModal1(index)}
                    >
                        <LazyLoadImage
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            effect="blur"
                            className='photoDivImg'
                        />
                    </div>
                ))}
            </div>


            {isModalOpen1 && (
                <div className="MG_modalContainer" onClick={closeModal1}>
                    <div className="MG_modal" onClick={(e) => e.stopPropagation()}>
                        <Swiper
                            initialSlide={activeIndex}
                            spaceBetween={10}
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation={true}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        >
                            {images1.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className='MG_modalImg'>
                                        <LazyLoadImage
                                            src={image}
                                            alt={`Gallery image ${index + 1}`}
                                            effect="blur"
                                        // className='photoDivImg'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="close-btn" onClick={closeModal1}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery