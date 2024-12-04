import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about2.jpg'
import spimg1 from '/public/images/ab-shape-1.png'
import spimg2 from '/public/images/ab-shape-2.png'
import spicon from '/public/images/icon/badge.svg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                        <div className="wpo-about-img">
                            <Image src={abimg} alt=""/>
                            <div className="wpo-ab-shape-1"><Image src={spimg1} alt=""/></div>
                            <div className="wpo-ab-shape-2"><Image src={spimg2} alt=""/></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                        <div className="wpo-about-icon">
                            <div className="icon">
                                <Image src={spicon} alt=""/>
                            </div>
                        </div>
                        <div className="wpo-about-icon-content">
                            <h2>Professional And Dedicated <span>Marine</span> Solutions</h2>
                            <p>Our vision is to shape the one stop maritime services to merchant vessel in Bangladeshi port Chattagram , Mongla , Payra & Matabbari .
RBM Maritime Ltd. is a comprehensive  maritime company providing essential products and services to the merchant fleet, along with supplying crew and technical management to the large and complex vessels ever to sail. Committed to shaping the maritime industry, we also seek to develop new opportunities and digitalisation. Supporting a diverse and inclusive workplace with highly professional and dedicated team , we take innovation, sustainability and unparalleled customer experiences one step further.
.</p>
                            <div className="signeture">
                                <span><Image src={sign} alt=""/></span>
                                <p>Capt. Ashraful Alam Neerob</p>
                                <p> Managing Director</p>
                            </div>
                            {/* <Link onClick={ClickHandler} href="/about" className="btn theme-btn" >More About</Link> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;