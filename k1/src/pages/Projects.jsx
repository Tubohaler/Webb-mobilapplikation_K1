import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
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

function Projects() {
  const { projects, getProjects, deleteProject, addProject, input, setInput } =
    useTotals();

  const navigate = useNavigate();
  const routeChange = () => {
    let path = "../tasks";
    navigate(path);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Översikt</ModuleName>
      </HeaderDiv>
      <ButtonDiv>
        <Buttons disabled>Projekt</Buttons>
        <Buttons onClick={routeChange}>Todos</Buttons>
      </ButtonDiv>
      <section>
        <InputField
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <TodoButton onClick={addProject}>Add</TodoButton>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              {project.name}
              <TodoButton onClick={() => deleteProject(project.id)}>
                Del
              </TodoButton>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Projects;
