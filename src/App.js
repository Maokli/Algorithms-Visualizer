import './App.css';
import SelectionSort from './components/selection-sort/selection-sort';
import { useState } from 'react';

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
      { start && array.length > 0 &&
        array.map((el,index) => <SelectionSort colorFactor={colorFactor} key={index} array={array} startIndex={index}/>)
      }
      {
        !start && <SelectionSort colorFactor={colorFactor} array={array} startIndex={array.length-1}/>
      }
    </div>
  );
}

export default App;
