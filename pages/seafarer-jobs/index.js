import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Link from 'next/link'

import cnt1 from '/public/images/icon/home.svg'
import cnt2 from '/public/images/icon/mail-2.svg'
import cnt3 from '/public/images/icon/app.svg'
import Image from 'next/image';

const SeafarerJobs = () => {
    return (
        <>
            <Navbar />
            <PageTitle pageTitle={'Seafarer Jobs'} pagesub={'Careers'} />
            <section className="wpo-contact-pg-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="wpo-contact-title text-center mb-5">
                                <h2>Join Our Maritime Team</h2>
                                <p>We are always looking for skilled and dedicated seafarers to join our growing team. If you are passionate about maritime careers, we want to hear from you!</p>
                            </div>

                            <div className="alert alert-info text-center mb-5">
                                <h4><i className="fa fa-info-circle"></i> How to Apply</h4>
                                <p className="mb-2">Please send your CV to <strong><a href="mailto:cv@rbmbd.com">cv@rbmbd.com</a></strong></p>
                                <p className="mb-0">For job updates, visit our office or follow our Facebook page:</p>
                                <p><a href="https://www.facebook.com/rbmmaritime" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                                    <i className="ti-facebook"></i> Follow us on Facebook
                                </a></p>
                            </div>

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
                                                <p><strong>CV Submissions:</strong> cv@rbmbd.com</p>
                                                <p>rbmmarineltd@gmail.com</p>
                                                <p>info@rbmbd.com</p>
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
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </>
    )
};

export default SeafarerJobs;
