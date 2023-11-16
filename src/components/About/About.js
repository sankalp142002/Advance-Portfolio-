import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";


const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          Get ready to meet Sankalp, the Full Stack Web Wizard of IIIT Gwalior!
          With a magic touch on both front - end and back - end development, I
          turn dreams into reality; from crafting beautiful user interfaces to
          seamlessly integrating with databases. I am a constant learner, always
          seeking to improve my skills and stay ahead of the latest
          technologies. So if you want your website to be the envy of the internet, I am the guy for you!
       
          </StyledParagraph>
          <StyledParagraph>
            I love to create websites from
            scratch. The technologies, tools and languages I am using to build
            my projects are HTML, CSS, React.js, TailwindCSS,
            Bootstrap, MaterialUI, Firebase, Redux, Node.js, Express.js, Pusher, Axios, Netlify, Stripe, MongoDB, Git and GitHub, VS Code and many more.
          </StyledParagraph>
          <StyledParagraph>
            I am also a software developer with high profecency in C/C++, Python and JavaScript.

          </StyledParagraph>
          <StyledParagraph>
          Lets build something together!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={"https://drive.google.com/drive/folders/1nkd1z10KTPSu3GYcH6sIThqUyv_0NkfS?usp=sharing"}
              target="_blank"
              icon={downloadIcon}
              download="Sankalp"
            >
              Download Resume
            </ResumeLink>
          </Resume>

        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
