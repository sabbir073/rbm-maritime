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
                                <li><i className="fi flaticon-telephone"></i>+8801813-087877

                                </li>
                                <li><i className="fi flaticon-email"></i> info@rbmbd.com </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li>Visit our social pages</li>
                                <li><Link target='_blank' href="https://www.facebook.com/profile.php?id=61560311942574"><i className="ti-facebook"></i></Link></li>
                                <li><Link target='_blank' href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link target='_blank' href="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link target='_blank' href="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;