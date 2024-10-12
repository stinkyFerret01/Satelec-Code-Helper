import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import CodeSearcher from "./components/CodeSearcher";

const workTime = {
  code: "    ",
  name: "Heures de travail",
  price: "51.00",
  quantity: 0,
};

function App() {
  const [estimate, setEstimate] = useState([workTime]);

  return (
    <div className="App">
      <Header estimate={estimate} setEstimate={setEstimate}></Header>
      <CodeSearcher
        estimate={estimate}
        setEstimate={setEstimate}
      ></CodeSearcher>
    </div>
  );
}

export default App;
