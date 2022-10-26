import React, { useEffect, useReducer, useRef } from "react";
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

const TimerDisplay = styled.p`
  size: 1em;
`;

//REDUCER
// const initialState = {
//   time: 0,
//   running: false,
// };

// function timeReducer(state, action) {
//   switch (action.type) {
//     case "start":
//       return { ...state, running: true };
//     case "stop":
//       return { ...state, running: false };
//     case "reset":
//       return { ...state, time: 0 };
//     case "tick":
//       return { ...state, time: state.time + 1 };
//     default:
//       throw new Error();
//   }
// }

function TimeKeeper() {
  // const [state, dispatch] = useReducer(timeReducer, initialState);
  // const intervalRef = useRef();
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  // useEffect(() => {
  //   if (!state.running) return;
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
  //   intervalRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
  //   return () => {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   };
  // }, [state.running]);

  return (
    <div>
      <HeaderDiv>
        <ModuleName>Timer</ModuleName>
      </HeaderDiv>
      <section>
        {/* <TimerDisplay>{state.time}</TimerDisplay> */}
        {/* <button onClick={() => dispatch({ type: "start" })}>start</button>
        <button onClick={() => dispatch({ type: "stop" })}>stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button> */}
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume</button>
          )}
        </div>
      </section>
    </div>
  );
}

export default TimeKeeper;
