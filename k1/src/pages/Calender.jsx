import React, { useState, useEffect } from "react";
import { useTotals } from "../contexts/Total";

import DatePicker from "react-datepicker";
import Calendar from "react-calendar";

import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const HeaderDiv = styled.header`
  /* position: fixed; */
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

const CalenderStyle = styled.section`
  margin-top: -7em;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  margin-bottom: -21em;
  overflow: scroll;
  width: 19em;
  height: 19em;
`;

function Calender() {
  const {
    todos,
    setTodos,
    getTodos,
    deleteTodo,
    startDate,
    setStartDate,
    date,
    setDate,
  } = useTotals();

  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Kalender</ModuleName>
      </HeaderDiv>
      <CalenderStyle>
        <Calendar onChange={onChange} value={date} />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </CalenderStyle>
      <section>
        <TodoList>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </TodoList>
      </section>
    </div>
  );
}

export default Calender;
