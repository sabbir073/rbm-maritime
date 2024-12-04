import React from 'react'
import Link from 'next/link'
//import Logo from '/public/images/unnamed.jpg'
import Projects from '../../api/project'
import Services from '../../api/service'
import Image from 'next/image'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    
                                </div>
                                <p>Delivering excellence in ship repair, supply provisions, and vessel management services. Ensuring safe, efficient, and reliable maritime operations globally. Contact us for comprehensive marine solutions tailored to your needs.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>506 Omar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230
                                        </li>
                                        
                                        <li><i className="fi flaticon-phone-call"></i>+8801813-087877, +8801794-622066,
+8801841-576804, +8801817-771022
</li>
                                        <li><i className="fi flaticon-send"></i>info@rbmbd.com </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Services </h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, sitem) => (
                                        <li key={sitem}><Link href='/service-single/[slug]' as={`/service-single/${service.slug}`} >{service.title}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Projects</h3>
                                </div>
                                <ul className="d-flex">
                                    {Projects.slice(0, 6).map((project, pritem) => (
                                        <li key={pritem}><Link onClick={ClickHandler} href='/project-single/[slug]' as={`/project-single/${project.slug}`}><Image src={project.pImg} alt="" /></Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2024 | Developed by <Link onClick={ClickHandler} href="/home">Amicritas</Link>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;