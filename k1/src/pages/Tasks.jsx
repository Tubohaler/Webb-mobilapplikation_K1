import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  margin-bottom: -16em;
  overflow: scroll;
  width: 19em;
  height: 19em;
`;

function Tasks() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("http://localhost:3000/tasks");
    console.log(data);
    setTodos(data);
  };

  const todoDelete = async (id) => {
    await axios.delete(`http://localhost:3000/projects/${id}`);
    getData();
  };

  const postData = async () => {
    const { data } = await axios.post("http://localhost:3000/tasks", {
      title: input,
    });
    console.log(data);
    getData();
  };
  console.log(todos);
  return (
    <div>
      <HeaderDiv>
        <ModuleName>Todos</ModuleName>
      </HeaderDiv>
      <ButtonDiv>
        <Link to={"../projects"}>
          <Buttons>Projekt</Buttons>
        </Link>
        <Buttons disabled>Todos</Buttons>
      </ButtonDiv>
      <section>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TodoButton onClick={postData}>Add</TodoButton>
        <TodoList>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <TodoButton onClick={todoDelete}>Del</TodoButton>
            </li>
          ))}
        </TodoList>
      </section>
    </div>
  );
}

export default Tasks;
