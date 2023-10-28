import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import { useCounter } from "../hooks/UseCounter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);
  return (
    <>
      <h1>count is {count}</h1>
      <Buttons primary onClick={increment}>
        Increment
      </Buttons>
    </>
  );
}

export default CounterPage;
