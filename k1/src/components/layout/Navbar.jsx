import React from "react";
import clock from "../../assets/clock.png";
import calender from "../../assets/calender.png";
import overview from "../../assets/overview.png";

import styled from "styled-components";

const ProjectNav = styled.nav`
  display: flex;
  margin-top: 2em;
  justify-content: space-around;
  width: 100vw;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: #ef6e26;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledImage = styled.img`
  width: 40px;
`;

function Navbar() {
  return (
    <ProjectNav>
      <StyledImage src={clock} />
      <StyledImage src={calender} />
      <StyledImage src={overview} />
    </ProjectNav>
  );
}

export default Navbar;
