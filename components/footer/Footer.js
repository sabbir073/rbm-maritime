import React from 'react'
import Link from 'next/link'
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
                                        <Link target='_blank' href="https://www.facebook.com/rbmmaritime">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target='_blank' href="https://wa.me/8801818130878777">
                                            <i className="fa fa-whatsapp"></i>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="mt-3">
                                    <p><i className="fa fa-whatsapp"></i> WhatsApp: +880 1818-13087877</p>
                                    <p><i className="fa fa-wechat"></i> WeChat: +880 1818-13087877</p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i><strong>Chattogram:</strong> IIUC Tower (11th Floor), Plot #9, Agrabad C/A, Sheikh Mujib Road, Chittagong-4100</li>
                                        <li><i className="fi flaticon-location"></i><strong>Dhaka:</strong> 506 Ar-Shajahan Tower (3rd floor), Shah Kabir Mazar Road, Azampur Railgate, Uttara, Dhaka-1230</li>
                                        <li><i className="fi flaticon-phone-call"></i>+880 1818-13087877, +880 1841-576804, +880 1794-622066, +880 1894-442913, +880 1894-442918</li>
                                        <li><i className="fi flaticon-send"></i>rbmmarineltd@gmail.com</li>
                                        <li><i className="fi flaticon-send"></i>info@rbmbd.com</li>
                                        <li><i className="fi flaticon-send"></i>cv@rbmbd.com (Seafarer CVs)</li>
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
