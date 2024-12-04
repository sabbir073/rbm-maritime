import React, { Component } from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Hero3 = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="wpo-hero-slider">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/1.jpg'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title-top">
                                            <span>Ensuring Smooth Sailing and Efficiency.</span>
                                        </div>
                                        <div className="slide-title">
                                            <h2>Comprehensive Marine Services</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>Our expert team provides top-notch ship repair, workshop services, and essential supply provisions, ensuring your vessel operates seamlessly. Trust us for reliable bay pilotage, cargo surveys, and underwater inspections.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/2.jpg'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title-top">
                                            <span>Your Trusted Partner in Marine Operations.</span>
                                        </div>
                                        <div className="slide-title">
                                            <h2>Complete Vessel Management Solutions</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>From technical management to crew manning, our comprehensive services cover all aspects of marine operations. Rely on us for safety equipment services, sludge removal, and efficient crew sign on/off procedures.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/3.jpg'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title-top">
                                            <span>Your Trusted Partner in Marine Operations.</span>
                                        </div>
                                        <div className="slide-title">
                                            <h2>Complete Vessel Management Solutions</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>From technical management to crew manning, our comprehensive services cover all aspects of marine operations. Rely on us for safety equipment services, sludge removal, and efficient crew sign on/off procedures.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/4.jpg'})` }}>
                                <div className="container">
                                    <div className="slide-content">
                                        <div className="wpo-hero-title-top">
                                            <span>Your Trusted Partner in Marine Operations.</span>
                                        </div>
                                        <div className="slide-title">
                                            <h2>Complete Vessel Management Solutions</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>From technical management to crew manning, our comprehensive services cover all aspects of marine operations. Rely on us for safety equipment services, sludge removal, and efficient crew sign on/off procedures.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Get Started</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default Hero3;