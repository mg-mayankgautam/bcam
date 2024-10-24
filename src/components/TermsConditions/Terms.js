import React, { useEffect } from 'react';
import './Terms.css';

const Terms = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div className='Terms'>
            <div className='terms_Head'>Terms & Conditions</div>

            <div>
                Welcome to BE-CAM. By accessing and using our website, products, or services, you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read them carefully before using our services.
            </div>

            {/* 1. Acceptance of Terms */}
            <div>
                <div className='terms_Title'>
                    1. Acceptance of Terms
                </div>
                <div>
                    1.1. These Terms govern your use of <strong>BE-CAM</strong> products and services. By accessing our website or making a purchase, you agree to be bound by these Terms.
                    <br />
                    1.2. If you do not agree to these Terms, please do not use our services or website.
                </div>
            </div>

            {/* 2. Products & Services */}
            <div>
                <div className='terms_Title'>
                    2. Products & Services
                </div>
                <div>
                    2.1. <strong>Product Descriptions:</strong> We make every effort to ensure that product descriptions and images are accurate. However, we do not warrant that product descriptions or other content is completely error-free.
                    <br />
                    2.2. <strong>Availability:</strong> All products and services are subject to availability. We reserve the right to discontinue or modify any products or services without prior notice.
                </div>
            </div>

            {/* 3. Pricing & Payment */}
            <div>
                <div className='terms_Title'>
                    3. Pricing & Payment
                </div>
                <div>
                    3.1. <strong>Prices:</strong> All prices listed are in INR and are subject to change without notice. The price applicable at the time of your order will apply.
                    <br />
                    3.2. <strong>Payments:</strong> Payment is required in full before delivery or service activation. We accept all payment methods for all purchases.
                    <br />
                    3.3. <strong>Taxes:</strong> Any applicable taxes, duties, or charges will be added to the total purchase price.
                </div>
            </div>

            {/* 4. Shipping & Delivery */}
            <div>
                <div className='terms_Title'>
                    4. Shipping & Delivery
                </div>
                <div>
                    4.1. <strong>Shipping Costs:</strong> Shipping costs are calculated based on your location and will be displayed during checkout.
                    <br />
                    4.2. <strong>Delivery Times:</strong> Estimated delivery times are provided for convenience and are not guaranteed. BE-CAM is not liable for delays beyond our control.
                </div>
            </div>

            {/* 5. Returns & Refunds */}
            <div>
                <div className='terms_Title'>
                    5. Returns & Refunds
                </div>
                <div>
                    5.1. <strong>Returns:</strong> If you are not satisfied with your purchase, you may return the product within 2 days of receipt for a refund or exchange, subject to the following conditions:
                    <ul>
                        <li>The product must be in its original condition and packaging.</li>
                        <li>You must provide proof of purchase.</li>
                    </ul>
                    5.2. <strong>Refunds:</strong> Refunds will be processed within 3 business days after the returned product is received and inspected.
                    <br />
                    5.3. <strong>Shipping Costs for Returns:</strong> The customer is responsible for return shipping costs unless the product is defective or incorrect.
                </div>
            </div>

            {/* 6. Warranty */}
            <div>
                <div className='terms_Title'>
                    6. Warranty
                </div>
                <div>
                    6.1. <strong>Warranty Coverage:</strong> Our products are covered by a 2-year limited warranty. This warranty covers defects in materials or workmanship under normal use.
                    <br />
                    6.2. <strong>Exclusions:</strong> The warranty does not cover damage caused by accidents, misuse, or unauthorized modifications.
                    <br />
                    6.3. <strong>Warranty Claims:</strong> To file a warranty claim, please contact us at sales@becam.in. You may be required to provide proof of purchase and details of the issue.
                </div>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
                <div className='terms_Title'>
                    7. Limitation of Liability
                </div>
                <div>
                    7.1. <strong>No Liability:</strong> To the maximum extent permitted by law, BE-CAM will not be liable for any direct, indirect, incidental, or consequential damages arising out of or related to your use of the website, products, or services.
                    <br />
                    7.2. <strong>Indemnification:</strong> You agree to indemnify and hold BE-CAM harmless from any claims, damages, or expenses arising from your breach of these Terms or misuse of our products.
                </div>
            </div>

            {/* 8. Privacy Policy */}
            <div>
                <div className='terms_Title'>
                    8. Privacy Policy
                </div>
                <div>
                    8.1. <strong>Personal Information:</strong> By using our website and services, you agree to the collection and use of your personal information as outlined in our Privacy Policy. We are committed to protecting your privacy and maintaining the confidentiality of your personal information.
                </div>
            </div>

            {/* 9. Intellectual Property */}
            <div>
                <div className='terms_Title'>
                    9. Intellectual Property
                </div>
                <div>
                    9.1. All content on our website, including text, images, logos, and graphics, is the property of BE-CAM and protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our written permission.
                </div>
            </div>

            {/* 10. Changes to Terms */}
            <div>
                <div className='terms_Title'>
                    10. Changes to Terms
                </div>
                <div>
                    10.1. <strong>Modifications:</strong> We reserve the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes your acceptance of any changes.
                </div>
            </div>

            {/* 11. Governing Law */}
            <div>
                <div className='terms_Title'>
                    11. Governing Law
                </div>
                <div>
                    11.1. These Terms are governed by and construed in accordance with the laws of Delhi, and any disputes arising out of or related to these Terms will be subject to the exclusive jurisdiction of the courts in Delhi.
                </div>
            </div>

            {/* 12. Contact Information */}
            <div>
                <div className='terms_Title'>
                    12. Contact Information
                </div>
                <div>
                    If you have any questions or concerns about these Terms, please contact us at:
                    <ul>
                        <li>Company Name: BE-CAM TECH INDIA PVT LTD</li>
                        <li>Email: sales@becam.in</li>
                        <li>Address: 608, Sidharth Building, Nehru Place, Delhi</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Terms;
