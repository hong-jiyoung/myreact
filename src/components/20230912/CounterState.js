import styled from "styled-components";
import { useState } from "react";
const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    color: blue;
    font-size: 2rem;
  }
`;

export function CounterState() {
  console.log("CounterState called!!!!");

  const [count, setCount] = useState(0);
  //   let count = 0;
  function minus() {
    setCount(count - 1);

    console.log("minus");
  }
  function plus() {
    setCount(count + 1);
    console.log("plus");
  }

  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
      </Container>
    </>
  );
}
