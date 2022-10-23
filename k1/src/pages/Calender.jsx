import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  left: 0;
  position: fixed;
  background-color: #ef6e26;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const ModuleName = styled.h1`
  text-align: left;
  font-size: 2em;
  margin-left: 0.7em;
`;

function Calender() {
  return (
    <div>
      <HeaderDiv>
        <ModuleName>Kalender</ModuleName>
      </HeaderDiv>
    </div>
  );
}

export default Calender;
