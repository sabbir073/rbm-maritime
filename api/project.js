import pimg4 from '/public/images/gallery/img-4.jpg'
import pimg2 from '/public/images/gallery/img-2.jpg'

import pSimg4 from '/public/images/project-single/img-4.jpg'
import opaImg from '/public/images/project-single/OPA.jpg'
import layupImg from '/public/images/project-single/Lay up management.jpg'
import technicalImg from '/public/images/project-single/technical mangement.jpg'

import sSingleimg1 from '/public/images/project-single/2.jpg'
import sSingleimg2 from '/public/images/project-single/3.jpg'



const Projects = [
    {
        Id: '1',
        pImg:pimg4,
        pSImg:pSimg4,
        title: 'New Build Management',
        slug:'new-build-management',
        description:'RBM Maritime Ltd offer a wide array of technical services to shipowners, from conceptual designs, emission reduction solutions, project planning, new building supervision, dry-docking support and other services.',
        spImg1:sSingleimg1,
        spImg2:sSingleimg2,
    },
    {
        Id: '2',
        pImg:opaImg,
        pSImg:opaImg,
        title: 'OPA (Owner Protecting Agent)',
        slug:'opa-owner-protecting-agent',
        description:'As your Owner Protecting Agent, we safeguard your interests throughout vessel operations. Our team ensures that all activities are conducted in accordance with your requirements and industry standards.',
        spImg1:sSingleimg1,
        spImg2:sSingleimg2,
    },
    {
        Id: '3',
        pImg:pimg2,
        pSImg:pimg2,
        title: 'Crew Sign On/Sign Off',
        slug:'crew-sign-on-sign-off',
        description:'We provide seamless crew sign on and sign off services, ensuring smooth transitions and operational continuity for your vessel. Our team handles all documentation and logistics professionally.',
        spImg1:sSingleimg1,
        spImg2:sSingleimg2,
    },
    {
        Id: '4',
        pImg:layupImg,
        pSImg:layupImg,
        title: 'Lay-up Management',
        slug:'lay-up-management',
        description:'Professional lay-up management services ensuring your vessel is properly maintained during idle periods. We provide comprehensive care to protect your investment.',
        spImg1:sSingleimg1,
        spImg2:sSingleimg2,
    },
    {
        Id: '5',
        pImg:technicalImg,
        pSImg:technicalImg,
        title: 'Technical Management',
        slug:'technical-management',
        description:'Expert technical management services to ensure your vessel operates at peak performance. Our experienced team handles all aspects of vessel maintenance and compliance.',
        spImg1:sSingleimg1,
        spImg2:sSingleimg2,
    },
]
export default Projects;
