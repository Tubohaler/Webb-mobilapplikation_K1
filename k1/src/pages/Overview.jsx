import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  left: 0;
  background-color: #ef6e26;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const ModuleName = styled.h1`
  text-align: left;
  font-size: 2em;
  margin-left: 0.7em;
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: -14em;
`;

const Buttons = styled.button`
  font-size: 2em;
  color: white;
  background-color: rgba(255, 53, 41, 0.56);
  margin: 0.2em;
  margin-left: 0.5em;
  padding: 0.25em 1em;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
`;

const InputField = styled.input`
  margin: 1em;
  width: 70%;
  padding: 12px 20px;
  box-sizing: border-box;
`;

function Overview() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Översikt</ModuleName>
      </HeaderDiv>
      <ButtonDiv>
        <Buttons>Projekt</Buttons>
        <Buttons>Todos</Buttons>
      </ButtonDiv>
      <section>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </section>
    </div>
  );
}

export default Overview;
