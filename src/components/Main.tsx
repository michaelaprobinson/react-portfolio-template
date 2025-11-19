import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
//❗ Uncomment the below import line when changing the image:
// import avatar from '../assets/images/avatar.jpg';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* ❗ Change the image to your own:
              - Place your image file named avatar.jpg, under src directory (ex: src/assets/images/avatar.jpg)
              - Uncomment the import avatar.... line at at top of file
              - Replace the img src div below with this line:
                <img src={avatar} alt="Your Name" /> 
              - Image should now be changed       
          */}
          <img
            src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* ❗ Change the name to your github username below */}
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            {/* ❗ Change the name to your linkedin username below */}
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          {/* ❗ Change to your name below */}
          <h1>Yuji Sato</h1>
          {/*  ❗ You can change your title below if this does not apply */}
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            {/* ❗ Change the name to your github username below */}
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            {/* ❗ Change the name to your linkedin username below */}
            <a
              href="https://www.linkedin.com/in/yujisato/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
