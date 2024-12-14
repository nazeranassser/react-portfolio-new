import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nazeranassser" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://linkedin.com/in/nazera-mraish-55aaba246" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>nazera nasser</h1>
          <p>Full Stack Web Developer | UI/UX</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nazeranassser" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://linkedin.com/in/nazera-mraish-55aaba246" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;