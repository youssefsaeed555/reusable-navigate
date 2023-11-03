import React, { useReducer, useState } from "react";
import Buttons from "./Buttons";
import Banel from "./Banel";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_VALUE = "SET_VALUE";
const ADD_VALUE = "ADD_VALUE";

function reducerFn(state, action) {
  console.log(state, action, state.count + state.valueToAdd);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload.count };
    case DECREMENT:
      return { ...state, count: state.count - action.payload.count };
    case SET_VALUE:
      return { ...state, valueToAdd: action.payload.valueToAdd };
    case ADD_VALUE:
      return {
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };
    default:
      return { ...state };
  }
}
function Reducer() {
  const [state, dispatch] = useReducer(reducerFn, { count: 0, valueToAdd: 0 });
  const onChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    dispatch({ type: SET_VALUE, payload: { valueToAdd: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE });
  };
  return (
    <Banel className="m-3">
      <div className="flex">
        <Buttons
          primary
          onClick={() => dispatch({ type: INCREMENT, payload: { count: 2 } })}
        >
          Increment
        </Buttons>
        {state.count}{" "}
        <Buttons
          primary
          onClick={() => dispatch({ type: DECREMENT, payload: { count: 2 } })}
        >
          Decrement
        </Buttons>
      </div>
      <form onSubmit={handleSubmit}>
        <label> add a lot</label>
        <input
          type="number"
          className="p-1 bg-gray-300 border border-gray-300"
          value={state.valueToAdd || ""}
          onChange={onChange}
        />
      </form>
      <Buttons primary>add it</Buttons>
    </Banel>
  );
}

export default Reducer;
