import React from 'react'
import Link from 'next/link'


const HeaderTopbar = () => {
    return(
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-telephone"></i>+8801813087877</li>
                                <li><i className="fi flaticon-email"></i> info@rbmbd.com </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li>Visit our social pages</li>
                                <li><Link target='_blank' href="https://www.facebook.com/rbmmaritime"><i className="ti-facebook"></i></Link></li>
                                <li><Link target='_blank' href="https://wa.me/8801813087877"><i className="fa fa-whatsapp"></i></Link></li>
                                <li><Link href="/contact" title="WeChat: +8801813087877"><i className="fa fa-wechat"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;
