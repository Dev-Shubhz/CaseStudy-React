import React, { useEffect, useState } from "react";

function Useeffect1() {
  let [counter, setcounter] = useState(0);
  let [count, setcount] = useState(0);

  useEffect(() => {
    setcount(count + 1);
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setcounter(++counter);
        }}>
        add
      </button>
      <button
        onClick={() => {
          setcounter(--counter);
        }}>
        subtract
      </button>
      <h1>the  page is rendered {count} times</h1>
    </div>
  );
}

export default Useeffect1;
