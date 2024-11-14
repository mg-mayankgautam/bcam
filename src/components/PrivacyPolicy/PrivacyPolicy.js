import React, { useEffect } from 'react'
import '../TermsConditions/Terms.css'
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className="Terms">
            <div className="terms_Head">Privacy Policy</div>

            <div>
                BE-CAM is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect personal information in connection with the provision of our CCTV products and services.
            </div>

            <div>
                <div className="terms_Title">1. Information We Collect</div>
                <div>
                    We collect the following types of information in the course of providing CCTV services:
                    <div className="terms_SubTitle">1.1. Personal Information</div>
                    <div>
                        We may collect personal information when you:
                        <ul>
                            <li>Purchase our CCTV products or services.</li>
                            <li>Contact our customer service or support team.</li>
                            <li>Register for remote monitoring or system management services.</li>
                        </ul>
                        The personal information collected may include:
                        <ul>
                            <li>Name, address, email address, phone number.</li>
                            <li>Payment and billing information.</li>
                            <li>Information related to the location and configuration of your CCTV system.</li>
                        </ul>
                    </div>

                    <div className="terms_SubTitle">1.2. CCTV Data</div>
                    <div>
                        If we provide CCTV monitoring services, we may collect video footage and audio recordings captured by the CCTV system. The extent of the collected data depends on the cameras' placement, configuration, and recording settings.
                    </div>
                </div>
            </div>

            <div>
                <div className="terms_Title">2. How We Use Your Information</div>
                <div>
                    We use the information we collect to:
                    <div className="terms_SubTitle">2.1. Provide Services</div>
                    <div>To install, maintain, and operate CCTV systems, including video monitoring, playback, and storage of recorded footage.</div>

                    <div className="terms_SubTitle">2.2. Customer Support</div>
                    <div>To respond to inquiries, troubleshoot issues, and provide technical support.</div>

                    <div className="terms_SubTitle">2.3. Legal Compliance</div>
                    <div>To comply with legal obligations, including the retention and disclosure of CCTV footage where required by law.</div>

                    <div className="terms_SubTitle">2.4. System Performance</div>
                    <div>To monitor and improve the performance of our systems, including security updates, diagnostics, and usage analytics.</div>
                </div>
            </div>

            <div>
                <div className="terms_Title">3. How We Protect Your Information</div>
                <div>
                    We are committed to safeguarding your personal data and CCTV footage. Our security measures include:
                    <ul>
                        <li>Data Encryption: Personal information and video data are encrypted during transmission and storage.</li>
                        <li>Access Control: Access to CCTV data is restricted to authorized personnel only.</li>
                        <li>Secure Storage: CCTV footage is stored in secure locations and retained only as long as necessary, subject to applicable legal requirements.</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="terms_Title">4. Sharing Your Information</div>
                <div>
                    We do not sell or share personal information or CCTV data with third parties, except as follows:
                    <div className="terms_SubTitle">4.1. Service Providers</div>
                    <div>
                        We may share information with trusted third-party service providers who assist in providing our services, such as cloud storage, technical support, and monitoring services. These providers are bound by confidentiality obligations and may only use the data to perform their specific services.
                    </div>

                    <div className="terms_SubTitle">4.2. Legal Disclosures</div>
                    <div>
                        We may disclose personal information and CCTV footage if required by law, such as in response to a court order, subpoena, or other legal process, or to protect our legal rights.
                    </div>

                    <div className="terms_SubTitle">4.3. Business Transfers</div>
                    <div>
                        In the event of a merger, acquisition, or sale of our business, personal information and CCTV data may be transferred to the acquiring entity, subject to the same data protection standards.
                    </div>
                </div>
            </div>

            <div>
                <div className="terms_Title">5. Data Retention</div>
                <div>
                    We retain CCTV footage and personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Retention periods for CCTV footage may vary depending on the customer’s preferences, the purpose of the surveillance, or legal requirements.
                </div>
            </div>

            <div>
                <div className="terms_Title">6. Your Rights</div>
                <div>
                    Depending on applicable laws, you may have the following rights concerning your personal data:
                    <div className="terms_SubTitle">6.1. Access</div>
                    <div>You have the right to request access to the personal information and CCTV footage that we hold.</div>

                    <div className="terms_SubTitle">6.2. Correction</div>
                    <div>You may request the correction of any inaccurate or incomplete personal information.</div>

                    <div className="terms_SubTitle">6.3. Deletion</div>
                    <div>You have the right to request the deletion of personal information and, in certain circumstances, CCTV footage, subject to legal and contractual limitations.</div>

                    <div className="terms_SubTitle">6.4. Restriction of Processing</div>
                    <div>You may request that we restrict the processing of your personal data under certain conditions.</div>
                </div>
            </div>

            <div>
                <div className="terms_Title">7. Video Surveillance and Privacy</div>
                <div>
                    <div className="terms_SubTitle">7.1. Camera Placement</div>
                    <div>When installing CCTV systems, we ensure that cameras are placed in areas where monitoring is appropriate and lawful. We do not place cameras in private areas, such as bathrooms or changing rooms.</div>

                    <div className="terms_SubTitle">7.2. Notification</div>
                    <div>
                        If required by law, you are responsible for notifying individuals on your property (e.g., employees, customers, or guests) that CCTV cameras are in operation. This may involve posting visible signs or notices in monitored areas.
                    </div>
                </div>
            </div>

            <div>
                <div className="terms_Title">8. Third-Party Links</div>
                <div>
                    Our website or systems may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites, and we encourage you to review their privacy policies.
                </div>
            </div>

            <div>
                <div className="terms_Title">9. Changes to This Privacy Policy</div>
                <div>
                    We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the date of the latest revision will be indicated at the top of the policy. We encourage you to review this policy periodically to stay informed about how we protect your information.
                </div>
            </div>

            <div>
                <div className="terms_Title">10. Contact Us</div>
                <div>
                    If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
                    <ul>
                        <li>Company Name: BE-CAM TECH INDIA PVT LTD</li>
                        <li>Sales Support:{' '}
                            <Link to='mailto:sales@becam.in'>
                                sales@becam.in
                            </Link>
                        </li>
                        <li>Technical Support:{' '}
                            <Link to='mailto:technicalsupport@becam.in'>
                                technicalsupport@becam.in
                            </Link>
                        </li>
                        <li>Address: 608, Sidharth Building, Nehru Place, Delhi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
