

import React from "react";
import {
  StyledPlayground,
} from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";

const Playground = () => {
  return (
    <StyledPlayground id="playground">
      <SectionHeading>
        <SectionTitle number="03">Blog</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Comming Soon. . .
      </StyledParagraph>
      <StyledParagraph  textAlign="center">
        As Always!
      </StyledParagraph>
    </StyledPlayground>
  );
};

export default Playground;
