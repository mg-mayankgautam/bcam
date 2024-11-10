import React, { useEffect, useState } from 'react'
import './Gallery.css'
import one from '../../assets/gallery/one.jpg';
import two from '../../assets/gallery/two.jpg';
import three from '../../assets/gallery/three.jpg';
import four from '../../assets/gallery/four.jpg';
import five from '../../assets/gallery/five.jpg';
import six from '../../assets/gallery/six.jpg';
import seven from '../../assets/gallery/seven.jpg';
import eight from '../../assets/gallery/eight.jpg';
import nine from '../../assets/gallery/nine.jpg';
import ten from '../../assets/gallery/ten.jpg';
import eleven from '../../assets/gallery/eleven.jpg';
import twelve from '../../assets/gallery/twelve.jpg';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve
];

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (index) => {
        setActiveIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='Gallery'>

            <div className='TP_head MG_head bold'>
                {/* Media <span className='orange'>Gallery</span> */}
                <span className='orange'>Muzaffarnagar</span> Road Show
            </div>

            <div className='C_productsContainer MG_Grid'>
                {images.length > 0 && images.map((image, index) => (
                    <div key={index} className='photoDiv'
                        onClick={() => openModal(index)}
                    >
                        <img src={image} alt={`Gallery image ${index + 1}`} />
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
                                        <img src={image} alt={`Gallery image ${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Gallery