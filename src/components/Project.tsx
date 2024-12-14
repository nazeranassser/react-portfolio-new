
import port from '../assets/images/port.png';
import revoly from '../assets/images/revoly.png';
import eventat from '../assets/images/eventat.png';
import nextpage from '../assets/images/nextpage.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/nazeranassser/blogs_react2" target="_blank" rel="noreferrer"><img src={nextpage} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nazeranassser/blogs_react2" target="_blank" rel="noreferrer"><h2>NextPage</h2></a>
                <p>NextPage is a blog platform where users can explore the latest and trending articles. It empowers users to manage their own content, use AI to summarize articles, and leverage AI to create new articles effortlessly, enhancing their blogging experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nazeranassser/event" target="_blank" rel="noreferrer"><img src={eventat} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nazeranassser/event" target="_blank" rel="noreferrer"><h2>Eventat</h2></a>
                <p>Eventat is a platform designed to simplify event management and booking. It allows users to browse and book events or create and manage their own, providing a centralized space for all types of events to make them easily accessible and organized.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nazeranassser/cakeProject" target="_blank" rel="noreferrer"><img src={revoly} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nazeranassser/cakeProject" target="_blank" rel="noreferrer"><h2>Revoly Cake</h2></a>
                <p>Revoly Cake is an e-commerce platform specializing in healthy cakes, offering options like sugar-free and gluten-free cakes, along with a dedicated section for special occasion cakes. The website focuses on providing delicious and wholesome choices for customers with specific dietary preferences, making it easy to order customizable cakes for any celebration.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={port} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Portfolio Project</h2></a>
                <p>Portfolio Project is a web application showcasing my personal and professional information, skills, and projects. Built using modern technologies like React, TypeScript, JavaScript, and SCSS, the portfolio is designed to highlight my expertise as a developer through a clean, responsive, and interactive user interface.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;