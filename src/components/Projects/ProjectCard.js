import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectCodeLink,
  ProjectDetails,
  ProjectImage,
  ProjectTitle,
  ProjectTransitionImage,
} from "../styles/Projects.styled";

const ProjectCardComponent = ({
  image,
  transitionImage,
  title,
  codeLink,
  liveLink,
}) => {
  return (
    <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
          <ProjectImage src={image} alt={title} />
          <ProjectTransitionImage src={transitionImage} alt={title} />
          <ProjectDetails>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectCodeLink
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
              <LinkName>Github Code</LinkName>
            </ProjectCodeLink>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
