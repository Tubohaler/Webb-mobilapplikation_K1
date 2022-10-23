import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import Tasks from "./Tasks";

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
  margin-left: 0.5em;
  width: 50%;
  padding: 12px 20px;
  border-radius: 6px;
  box-sizing: border-box;
`;

const TodoButton = styled.button`
  font-size: 0.9em;
  margin: 0.2em;
`;

function Projects() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/projects");
    console.log(data);
    setList(data);
  };

  const todoDelete = async (id) => {
    await axios.delete(`http://localhost:3000/projects/${id}`);
    getData();
  };

  const postData = async () => {
    const { data } = await axios.post("http://localhost:3000/projects", {
      name: input,
      color: "#4E0E9F",
    });
    console.log(data);
    getData();
  };

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Översikt</ModuleName>
      </HeaderDiv>
      <ButtonDiv>
        <Buttons disabled>Projekt</Buttons>
        <Link to={"../tasks"}>
          {" "}
          // ta bort Links
          <Buttons>Todos</Buttons>
        </Link>
      </ButtonDiv>
      <section>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TodoButton onClick={postData}>Add</TodoButton>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.name}
              <TodoButton onClick={todoDelete}>Del</TodoButton>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Projects;
