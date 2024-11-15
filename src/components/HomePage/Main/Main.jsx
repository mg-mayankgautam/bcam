import React from 'react'
import './Main.css';
import img from '../../../assets/logowhite.png';

const Main = () => {
    return (
        <div className='HomeMain'>
            <div className='mainHeader'>
                {/* <div className='mainHeading'>
                        <strong>
                            <span className='orange'> BE-</span>
                            <span className='blue'>CAM</span>
                        </strong>
                        <br />
                    </div> */}

                <div className='mainImg'>
                    {/* <img src={img} /> */}
                </div>


                <div className='mainText'>

                    <div className='mainLogo'>
                        <img src={img} />
                    </div>


                    <div className='mainTagline italic'>
                        {/* feel <strong className='orange italic'>SAFE</strong> with us */}
                        Rakhe <strong className='orange italic'>Nazar</strong> Har Kadam Par
                    </div>

                    <div>
                        BE-CAM is your trusted partner in providing innovative and reliable CCTV surveillance solutions. With over 5 years of experience, we offer customized security systems for homes, businesses, and communities.
                        Whether you're protecting loved ones or ensuring the safety of your business, we deliver advanced, real-time monitoring solutions to meet your needs.
                    </div>

                    {/* <button className='button'>
                        Connect
                    </button> */}
                </div>
            </div>


        </div>
    )
}

export default Main