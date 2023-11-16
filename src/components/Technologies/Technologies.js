import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData , iconsData2 , iconsData3 , iconsData4 } from "./icons";

const Technologies = () => {
  return (
    <TechnologiesContainer>
      <TechnologiesHeader>Technologies I am familiar with</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
      <TechnologiesIcons>
        {iconsData2.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
      <TechnologiesIcons>
        {iconsData3.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
      <TechnologiesIcons>
        {iconsData4.map((iconData) => {
          return (
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
