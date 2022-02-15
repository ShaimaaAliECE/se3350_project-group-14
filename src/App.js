import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import L1 from "./L1/level";
import L3 from "./L3/Level";
import Body from "./components/Body/Body";
import Error from "./components/ErrorPage/Error";

function App() {
  return (
    <div className="App">
      <Body/>
    </div>
  );
}

export default App;
