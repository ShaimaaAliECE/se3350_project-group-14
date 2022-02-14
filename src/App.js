import L1 from "./L1/level";
import L2 from "./L2/";
import L3 from "./L3/";
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/L1" element={<L1/>}/>
          <Route path="/L2" element={<L2/>}/>
          <Route path="/L3" element={<L3/>}/>
        </Routes>
    </div>
  );
}

export default App;
