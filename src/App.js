import L1 from "./L1";
import L2 from "./L2";
import L3 from "./L3";
import L4 from "./L4";
import Body from "./components/Body/Body";
import LevelSelect from "./components/SelectPages/LevelSelect";
import AlgorithmSelect from './components/SelectPages/AlgorithmSelect'
import MergeSortPage from './components/AlgoPages/MergeSortPage'
import QuickSortPage from './components/AlgoPages/QuickSortPage'
import BubbleSortPage from './components/AlgoPages/BubbleSortPage'
import Analytics from "./Admin/Analytics";
import Login from "./Admin/Login";
import { Routes, Route} from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element = {<Body />}/>
          <Route path = "/Levels" element = {<LevelSelect />}/>
          <Route path="/L1" element={<L1 />}/>
          <Route path="/L2" element={<L2 />}/>
          <Route path="/L3" element={<L3 />}/>
          <Route path="/L4" element={<L4 />}/>
          <Route path="/Algorithms" element={<AlgorithmSelect />}/>
          <Route path="/MergeSort" element={<MergeSortPage />}/>
          <Route path="/QuickSort" element={<QuickSortPage />} />
          <Route path="/BubbleSort" element={<BubbleSortPage />} />
          <Route path="/admin" element={<Login/>} />
          <Route path="/admin/analytics" element={<Analytics/>}/>
        </Routes>
    </div>
  );
}

export default App;
