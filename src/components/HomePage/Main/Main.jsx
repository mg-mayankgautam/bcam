import React from 'react'
import './Main.css';
import img from '../../../assets/main.png';

const Main = () => {
    return (
        <div className='HomeMain'>
            <div className='mainHeader'>
                <div className='mainHeading'>
                    Harness the <br />
                    <strong>POWER</strong> of
                    <strong>
                        <span className='orange'> Be</span>
                        <span className='blue'>CAM</span>
                    </strong>
                </div>
                <div className='mainText'>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the<br /> industry's standard dummy text ever since the 1500s </div>
                    <button className='button'>
                        Connect
                    </button>
                </div>
            </div>

            <div className='mainImg'>
                <img src={img}/>
            </div>
        </div>
    )
}

export default Main