import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import heroImg from '/public/images/rbm.jpg'


const Hero3 = () => {

    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-slide">
                    <div className="slide-inner">
                        <Image
                            src={heroImg}
                            alt="RBM Maritime"
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                        <div className="slide-content-overlay">
                            <Link href="/contact" className="theme-btn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero3;