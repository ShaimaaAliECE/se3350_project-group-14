import L1 from "./L1/level";
import {Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/L1" element={<L1/>}/>
        <Route path="/levelSelect/L1" element={<levelSelect/>} />
      </Routes>
    </div>
  );
}

export default App;
