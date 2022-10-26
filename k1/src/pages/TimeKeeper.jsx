import React, { useEffect } from "react";
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

const TimerDiv = styled.div`
  width: 370px;
  margin: 0 auto;
  text-align: center;
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

const TimerSpan = styled.button`
  font-size: 1.7em;
`;

function TimeKeeper() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

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
      <section>
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
            <TimerButtons onClick={() => setTimerOn(true)}>Start</TimerButtons>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <TimerButtons onClick={() => setTime(0)}>Reset</TimerButtons>
          )}
          {!timerOn && time > 0 && (
            <TimerButtons onClick={() => setTimerOn(true)}>Resume</TimerButtons>
          )}
        </div>
      </section>
    </div>
  );
}

export default TimeKeeper;
