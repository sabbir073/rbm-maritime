import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection';



const ProjectPage2 =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <ProjectSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage2;
