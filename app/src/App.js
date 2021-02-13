import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [messege, setMessege] = useState("");
  useEffect(async () => {
    await fetch("/check-server")
      .then((r) => r.json())
      .then((data) => {
        setMessege(data.messege);
      });
  }, []);
  return (
    <div className="App">
      <h1>this is from react</h1>
      <h1>{messege}</h1>
    </div>
  );
}

export default App;
