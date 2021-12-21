import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { decreament, increament } from "./testReducer";

export default function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector(state=>state.test.data);

  return (
    <>
      <h1>Testing 123</h1>
      <h3>The data is: {data}</h3>
      <Button onClick={()=>dispatch(increament(20))} content='Increament' color="green"/>
      <Button onClick={()=>dispatch(decreament(10))} content='Decreament' color="red"/>
    </>
  );
}
