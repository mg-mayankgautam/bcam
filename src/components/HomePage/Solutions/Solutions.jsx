import React from 'react'
import './Solutions.css'
import img from '../../../assets/solutions.png'
import icon from '../../../assets/solutionsicon.png'
import highreso from '../../../assets/icons/High Resolution.png'
import remotemoni from '../../../assets/icons/Remote Monitoring.png'
import scala from '../../../assets/icons/Scalability.png'
import advfeature from '../../../assets/icons/Advanced Features.png'
import costeff from '../../../assets/icons/Cost  Effective.png'
import easyinte from '../../../assets/icons/Easy Integration.png'
import relperf from '../../../assets/icons/Reliable Performance.png'
import flexinst from '../../../assets/icons/Flexible Installation.png'
import batterypow from '../../../assets/icons/Battery-Powered Options.png'
import smartconn from '../../../assets/icons/Smart Connectivity.png'
import multicam from '../../../assets/icons/Multi Camera Management.png'
import realtime from '../../../assets/icons/Real-time Alerts.png'
import analreport from '../../../assets/icons/Analytics.png'
import intesurv from '../../../assets/icons/Integrated Surveillance.png'
import controlwho from '../../../assets/icons/Control who enters.png'
import remoteacc from '../../../assets/icons/Remote Access.png'
import intelianal from '../../../assets/icons/Intelligent analytics.png'
import behavdet from '../../../assets/icons/Behaviour Detection.png'



const Solutions = () => {
    return (
        <div className='Solutions'>
            <div className='TP_head'>
                <strong className='orange'>Our</strong> Solutions
            </div>

            <div className='solutionsContainer'>
                {/* IP Camera Solutions */}
                <div className='SC_Grid'>
                    <div className='SC_Header'>
                        <div className='SC_head'>
                            IP Camera Solutions
                        </div>
                        <div className='SC_text'>
                            Our IP camera systems deliver high-definition video and allow for remote access from anywhere in the world. These cameras are ideal for environments where clear, detailed images are essential for identifying people and objects.
                        </div>
                    </div>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card one'>
                        <div className='SC_cardIcon'>
                            <img src={highreso} />
                        </div>
                        <div className='SC_cardHead'>
                            High-Resolution Video
                        </div>
                        <div className='SC_text'>
                            Get crystal-clear video footage with resolutions ranging from 1080p to 4K.
                        </div>
                    </div>

                    <div className='SC_card one'>
                        <div className='SC_cardIcon'>
                            <img src={remotemoni} />
                        </div>
                        <div className='SC_cardHead'>
                            Remote Monitoring
                        </div>
                        <div className='SC_text'>
                            Access live footage and recorded video via mobile apps or desktop software.
                        </div>
                    </div>

                    <div className='SC_card one'>
                        <div className='SC_cardIcon'>
                            <img src={scala} />
                        </div>
                        <div className='SC_cardHead'>
                            Scalability
                        </div>
                        <div className='SC_text'>
                            Easily expand your system by adding more cameras as needed.
                        </div>
                    </div>

                    <div className='SC_card one'>
                        <div className='SC_cardIcon'>
                            <img src={advfeature} />
                        </div>
                        <div className='SC_cardHead'>
                            Advanced Features
                        </div>
                        <div className='SC_text'>
                            Includes motion detection, night vision, and AI-based video analytics.
                        </div>
                    </div>
                </div>
            </div>

            {/* Analog Camera Solutions (Swapped) */}
            <div className='solutionsContainer'>
                <div className='SC_Grid'>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                    <div className='SC_Header'>
                        <div className='SC_head one'>
                            Analog Camera Solutions
                        </div>
                        <div className='SC_text'>
                            For cost-effective security, our Analog camera systems offer a reliable and efficient solution. These systems are perfect for clients seeking a more traditional, budget-friendly surveillance setup.
                        </div>
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={costeff} />
                        </div>
                        <div className='SC_cardHead'>
                            Cost-Effective
                        </div>
                        <div className='SC_text'>
                            Analog systems provide security at an affordable price without compromising on quality.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={easyinte} />
                        </div>
                        <div className='SC_cardHead'>
                            Easy Integration
                        </div>
                        <div className='SC_text'>
                            Can be integrated into existing infrastructure, making upgrades simpler and more affordable.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={relperf} />
                        </div>
                        <div className='SC_cardHead'>
                            Reliable Performance
                        </div>
                        <div className='SC_text'>
                            Proven technology that works seamlessly in a variety of environments.
                        </div>
                    </div>
                </div>
            </div>

            {/* Wireless CCTV Systems */}
            <div className='solutionsContainer'>
                <div className='SC_Grid'>
                    <div className='SC_Header'>
                        <div className='SC_head'>
                            Wireless CCTV Systems
                        </div>
                        <div className='SC_text'>
                            Our wireless CCTV systems offer flexibility and convenience, eliminating the need for complex wiring and allowing for easy installation in hard-to-reach areas.
                        </div>
                    </div>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={flexinst} />
                        </div>
                        <div className='SC_cardHead'>
                            Flexible Installation
                        </div>
                        <div className='SC_text'>
                            Perfect for temporary setups or locations where wiring is difficult.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={batterypow} />
                        </div>
                        <div className='SC_cardHead'>
                            Battery-Powered Options
                        </div>
                        <div className='SC_text'>
                            Ideal for remote or outdoor environments where power sources may be limited.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={smartconn} />
                        </div>
                        <div className='SC_cardHead'>
                            Smart Connectivity
                        </div>
                        <div className='SC_text'>
                            Connect your system to the cloud for easy access and management.
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Management Software (VMS) */}
            <div className='solutionsContainer'>
                <div className='SC_Grid'>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                    <div className='SC_Header'>
                        <div className='SC_head one'>
                            Video Management Software (VMS)
                        </div>
                        <div className='SC_text'>
                            Our Video Management Software (VMS) provides an intuitive and centralized platform for managing multiple cameras, viewing live or recorded footage, and configuring custom alerts.
                        </div>
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={multicam} />
                        </div>
                        <div className='SC_cardHead'>
                            Multi-Camera Management
                        </div>
                        <div className='SC_text'>
                            Monitor and control numerous cameras from a single platform.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={realtime} />
                        </div>
                        <div className='SC_cardHead'>
                            Real-Time Alerts
                        </div>
                        <div className='SC_text'>
                            Receive instant notifications via email or mobile when specific events (e.g., motion detection) occur.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={analreport} />
                        </div>
                        <div className='SC_cardHead'>
                            Analytics & Reporting
                        </div>
                        <div className='SC_text'>
                            Advanced tools for analyzing video footage, detecting unusual activities, and generating comprehensive security reports.
                        </div>
                    </div>
                </div>
            </div>

            {/* Access Control Integration */}
            <div className='solutionsContainer'>
                <div className='SC_Grid'>
                    <div className='SC_Header'>
                        <div className='SC_head'>
                            Access Control Integration
                        </div>
                        <div className='SC_text'>
                            We offer integrated access control solutions that work seamlessly with our CCTV systems to provide a comprehensive security strategy for businesses and high-security environments.
                        </div>
                    </div>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={intesurv} />
                        </div>
                        <div className='SC_cardHead'>
                            Integrated Surveillance
                        </div>
                        <div className='SC_text'>
                            Sync CCTV cameras with access control systems for full coverage and enhanced monitoring.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={controlwho} />
                        </div>
                        <div className='SC_cardHead'>
                            Control Who Enters
                        </div>
                        <div className='SC_text'>
                            Manage permissions and track who enters and exits secure areas.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={remoteacc} />
                        </div>
                        <div className='SC_cardHead'>
                            Remote Access
                        </div>
                        <div className='SC_text'>
                            Manage and monitor your access control system from anywhere, ensuring maximum security at all times.
                        </div>
                    </div>
                </div>
            </div>

            {/* Smart Surveillance & AI Solutions */}
            <div className='solutionsContainer'>
                <div className='SC_Grid'>
                    <div className='SC_img'>
                        <img src={img} />
                    </div>
                    <div className='SC_Header'>
                        <div className='SC_head one'>
                            Smart Surveillance & AI Solutions
                        </div>
                        <div className='SC_text'>
                            Harness the power of AI for advanced security solutions. Our AI-powered surveillance systems are equipped with intelligent analytics, allowing for real-time detection of unusual activities, behavior patterns, and security breaches.
                        </div>
                    </div>
                </div>

                <div className='SC_Cardsflex'>
                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={intelianal} />
                        </div>
                        <div className='SC_cardHead'>
                            Intelligent Analytics
                        </div>
                        <div className='SC_text'>
                            AI algorithms analyze video footage to detect anomalies, identify faces, and recognize objects.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={behavdet} />
                        </div>
                        <div className='SC_cardHead'>
                            Behavior Detection
                        </div>
                        <div className='SC_text'>
                            Detect suspicious behavior such as loitering, running, or unusual movements in restricted areas.
                        </div>
                    </div>

                    <div className='SC_card'>
                        <div className='SC_cardIcon'>
                            <img src={realtime} />
                        </div>
                        <div className='SC_cardHead'>
                            Real-Time Alerts
                        </div>
                        <div className='SC_text'>
                            Receive immediate notifications when AI detects a potential threat, enabling swift action.
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Solutions