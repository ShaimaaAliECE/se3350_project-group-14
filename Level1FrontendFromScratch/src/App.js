import L1 from "./L1/level";
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/L1" element={<L1/>}/>
        </Routes>
    </div>
  );
}

export default App;
