import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :>");
    return () => console.log("bye :<");
  }, []);
  /* 위와 같은 코드임. 단지 위가 더 짧으니 위를 사용한다.
  useEffect(function() {
    console.log("hi :>");
    return function() {
      console.log("bye :<");
    }
  }, []);
  */
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
