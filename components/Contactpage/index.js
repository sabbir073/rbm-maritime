import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'

import cnt1 from '/public/images/icon/home.svg'
import cnt2 from '/public/images/icon/mail-2.svg'
import cnt3 from '/public/images/icon/app.svg'
import Image from 'next/image';

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <Image src={cnt1} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Our Offices</h2>
                                            <p><strong>Chattogram:</strong> IIUC Tower (11th Floor), Plot #9, Agrabad C/A, Sheikh Mujib Road, Chittagong-4100</p>
                                            <p><strong>Dhaka:</strong> 506 Ar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <Image src={cnt2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>rbmmarineltd@gmail.com</p>
                                            <p>info@rbmbd.com</p>
                                            <p>cv@rbmbd.com (Seafarer CVs)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <Image src={cnt3} alt=""/>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>+880 1818-13087877</p>
                                            <p>+880 1841-576804</p>
                                            <p>+880 1794-622066</p>
                                            <p>+880 1894-442913</p>
                                            <p>+880 1894-442918</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-text text-center">
                                            <h2>WhatsApp & WeChat</h2>
                                            <p><i className="fa fa-whatsapp"></i> WhatsApp: +880 1818-13087877</p>
                                            <p><i className="fa fa-wechat"></i> WeChat: +880 1818-13087877</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>Get in touch with us for all your maritime service needs. We are here to help!</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1234567890123!2d91.8133!3d22.3569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIIUC+Tower%2C+Agrabad%2C+Chittagong!5e0!3m2!1sen!2sbd!4v1700000000000" title="RBM Maritime Location"></iframe>
                </div>
            </section>
        </section>
     )

}

export default Contactpage;
