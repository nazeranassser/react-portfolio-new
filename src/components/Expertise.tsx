import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    
];

const labelsSecond = [

    "GitHub",
    "Figma",
    "Trello",
    "VS Code",
    
];

const labelsThird = [
    "PHP",
    "Laravel",
    "MySQL",
    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-End</h3>
                    
                    <div className="flex-chips">
                        
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Back-End</h3>
                    
                    <div className="flex-chips">
                        
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Tools</h3>
                    
                    <div className="flex-chips">
                        
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    
                </div>
                <div className="skill">
                    
                </div>
                <div className="skill">
                    
                </div>
                

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;