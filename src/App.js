import './App.css';
import {SelectionSort} from './algorithms/selection-sort';
import { useState } from 'react';
import AlgorithmVisualizer from './components/algorithm-visualizer/algorithm-visualizer';

function App() {
  const [colorFactor, setColorFactor] = useState(Math.random());

  const [array, setArray] = useState([]);
  const [start, setStart] = useState(false);

  const genData = () => {
    setStart(false);
    const data = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
    setArray(data);
    setColorFactor(Math.random());
  }
  const startVisualization = () => {
    setStart(!start);
  }
  

  return (
    <div>
      <button onClick={genData}>GenerateData</button>
      <button onClick={startVisualization}>Start</button>
      <AlgorithmVisualizer array={array} algorithmFunction={SelectionSort} start={start} colorFactor={colorFactor}/>
    </div>
  );
}

export default App;
