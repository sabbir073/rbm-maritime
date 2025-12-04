import React from 'react'
import Link from 'next/link'
import spicon from '/public/images/icon/badge.svg'
import chairmanImg from '/public/images/Chairman.jpg'
import mdImg from '/public/images/MD.jpg'
import Image from 'next/image'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className={`wpo-about-section section-padding ${props.abClass}`}>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-about-text text-center">
                            <div className="wpo-about-icon mb-4">
                                <div className="icon" style={{display: 'inline-block'}}>
                                    <Image src={spicon} alt=""/>
                                </div>
                            </div>
                            <div className="wpo-about-icon-content">
                                <h2 className="mb-4">Professional And Dedicated <span>Marine</span> Solutions</h2>
                                <p>RBM Maritime Ltd is committed to meticulous care of vessels and cargo. We provide a trusted, reliable service that supports the success of our clients and partners— because when our clients succeed, so do we. With the belief that people are key to our success, we invest in our teams both at sea and onshore, recognising that their hard work and commitment are essential to delivering safe and effective operations. By fostering a culture that values and supports our people, we work to ensure our clients receive exceptional service and lasting value across every interaction.</p>
                                <p>We are not just managers – we are strategic advisors, drawing on deep maritime expertise and predictive insights to guide our clients through a dynamic and ever-evolving industry. Our approach is rooted in a willingness to listen, learn, and solve challenges in partnership with our clients, adapting as their needs and circumstances evolve. We deliver tailored insights that enhance operational efficiency, optimise vessel performance, and ensure seamless collaboration between our teams and clients.</p>
                                <p>Our operations are built on a foundation of transparency, authenticity, and respect. We approach every decision with openness, ensuring that our leadership and teams at sea and onshore act with integrity. By fostering a culture of transparency that drives accountability, we provide our clients with the confidence that we will navigate challenges effectively and deliver solutions with honesty and reliability at all levels.</p>

                                <div className="row mt-5 justify-content-center">
                                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                                        <div className="leadership-card text-center">
                                            <div className="leadership-img mb-3">
                                                <Image src={chairmanImg} alt="Chairman" width={150} height={150} style={{borderRadius: '50%', objectFit: 'cover'}}/>
                                            </div>
                                            <h4>Capt. Ashraful Alam Neerob</h4>
                                            <p>Chairman</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 col-12 mb-4">
                                        <div className="leadership-card text-center">
                                            <div className="leadership-img mb-3">
                                                <Image src={mdImg} alt="Managing Director" width={150} height={150} style={{borderRadius: '50%', objectFit: 'cover'}}/>
                                            </div>
                                            <h4>Ch. Engr AKM Zakir Hossain</h4>
                                            <p>Managing Director</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
