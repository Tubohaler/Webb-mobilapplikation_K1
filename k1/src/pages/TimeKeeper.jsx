import React, { useEffect } from "react";
import styled from "styled-components";

import { useTotals } from "../contexts/Total";

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

const TimerDiv = styled.div`
  width: 370px;
  margin: 0 auto;
  text-align: center;
  margin-top: -10em;
`;

const TimerButtons = styled.button`
  margin-left: 8px;
  font-size: 16px;
  background-color: rgb(217, 60, 35);
  color: #fff;
  border-radius: 8px;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
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

const TodoListBar = styled.li`
  background-color: white;
  color: black;
  border-radius: 4px;
  border-radius: 4px;
  margin: 10px;
  padding: 7px;
`;

const TimerSpan = styled.button`
  font-size: 1.7em;
`;

const TimerBox = styled.section`
  position: absolute;
`;

const TimerBackground = styled.section`
  background-color: white;
  position: relative;
`;

function TimeKeeper() {
  const { time, setTime, timerOn, setTimerOn, todos } = useTotals();

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Timer</ModuleName>
      </HeaderDiv>
      <TimerBackground>
        <TimerBox>
          <TimerDiv>
            <TimerSpan>
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </TimerSpan>
            <TimerSpan>
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
            </TimerSpan>
            <TimerSpan>{("0" + ((time / 10) % 100)).slice(-2)}</TimerSpan>
          </TimerDiv>

          <div id="buttons">
            {!timerOn && time === 0 && (
              <TimerButtons onClick={() => setTimerOn(true)}>
                Start
              </TimerButtons>
            )}
            {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
            {!timerOn && time > 0 && (
              <TimerButtons onClick={() => setTime(0)}>Reset</TimerButtons>
            )}
            {!timerOn && time > 0 && (
              <TimerButtons onClick={() => setTimerOn(true)}>
                Resume
              </TimerButtons>
            )}
          </div>
        </TimerBox>
      </TimerBackground>
      <h2>Todos</h2>
      <TodoList>
        {todos.map((todo) => (
          <TodoListBar key={todo.id}>
            {todo.title}
            <TodoButton onClick={() => deleteTodo(todo.id)}>Del</TodoButton>
          </TodoListBar>
        ))}
      </TodoList>
    </div>
  );
}

export default TimeKeeper;
