import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTotals } from "../contexts/Total";

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
  const { input, setInput, todos, setTodos, getTodos, deleteTodo, postTodo } =
    useTotals();

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "../projects";
    navigate(path);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Todos</ModuleName>
      </HeaderDiv>
      <ButtonDiv>
        <Buttons onClick={routeChange}>Projekt</Buttons>
        <Buttons disabled>Todos</Buttons>
      </ButtonDiv>
      <section>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TodoButton onClick={postTodo}>Add</TodoButton>
        <TodoList>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <TodoButton onClick={() => deleteTodo(todo.id)}>Del</TodoButton>
            </li>
          ))}
        </TodoList>
      </section>
    </div>
  );
}

export default Tasks;
