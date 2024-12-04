import React from 'react'

import prdimg1 from '/public/images/icon/document.svg'
import prdimg2 from '/public/images/icon/bar-graph.svg'
import prdimg3 from '/public/images/icon/clipboard.svg'
import Image from 'next/image'


const Features = (props) => {

     const featres = [
         {
            fIcon:prdimg1,
            title:'Expert Solutions',
            des:'Delivering comprehensive maritime solutions including ship repair, supply services, and pilotage. Trust us to keep your vessels operational and your business thriving.',
         },
         {
            fIcon:prdimg2,
            title:'Trusted Marine Partner',
            des:'Offering expert vessel management, from crew manning to technical services. We ensure your operations are seamless and efficient, no matter the challenge.',
         },
         {
            fIcon:prdimg3,
            title:'Efficiency and Safety',
            des:'From underwater inspections to sludge removal, our wide range of marine services guarantees the safety, cleanliness, and efficiency of your vessels at all times.',
         },
         
     ]


    return(
        <section className={`wpo-features-section section-padding  ${props.featuresClass}`}>
            <div className="container">
                <div className="row">
                    {featres.map((featres, fitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <Image src={featres.fIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>{featres.title}</h2>
                                    <p>{featres.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;