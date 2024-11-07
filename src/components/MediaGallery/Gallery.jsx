import React from 'react'
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


const Gallery = () => {
    return (
        <div className='Gallery'>

            <div className='TP_head MG_head bold'>
                {/* Media <span className='orange'>Gallery</span> */}
                <span className='orange'>Muzaffarnagar</span> Road Show
            </div>

            <div className='C_productsContainer MG_Grid'>
                <div className='photoDiv'>
                    <img src={one} />
                </div>
                <div className='photoDiv'>
                    <img src={two} />
                </div>
                <div className='photoDiv'>
                    <img src={three} />
                </div>
                <div className='photoDiv'>
                    <img src={four} />
                </div>
                <div className='photoDiv'>
                    <img src={five} />
                </div>
                <div className='photoDiv'>
                    <img src={six} />
                </div>
                <div className='photoDiv'>
                    <img src={seven} />
                </div>
                <div className='photoDiv'>
                    <img src={eight} />
                </div>
                <div className='photoDiv'>
                    <img src={nine} />
                </div>
                <div className='photoDiv'>
                    <img src={ten} />
                </div>
                <div className='photoDiv'>
                    <img src={eleven} />
                </div>
                <div className='photoDiv'>
                    <img src={twelve} />
                </div>

            </div>
        </div>
    )
}

export default Gallery