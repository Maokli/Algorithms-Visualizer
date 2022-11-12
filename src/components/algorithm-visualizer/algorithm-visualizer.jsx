import { AlgorithmWrapper } from "../../utils/algorithm-wrapper";
import VisualizationBoard from "../visualization-board/visualization-board";
import { useState, useEffect } from 'react';

/* eslint-disable no-undef */
const AlgorithmVisualizer = ({array, algorithmFunction, start, colorFactor}) => {
    //Stores a snapshot of each operation done on the array
    const [executionDone, setExecutionDone] = useState(false);
    //Stores a snapshot of each operation done on the array
    const [sequences, setSequences] = useState([]);
    useEffect(() => {
        if(start){
            const algorithmWrapper = new AlgorithmWrapper(array, sequences, setSequences, algorithmFunction, setExecutionDone);
            algorithmWrapper.executeAlgorithm();
        }
    }, [start, array, algorithmFunction, sequences])
    
    
    return ( 
        <>
            { start && executionDone &&
                sequences.map((el,index) => <VisualizationBoard count={sequences.length} colorFactor={colorFactor} key={index} array={el} startIndex={index}/>)
            }
            {
                !start && <VisualizationBoard count={sequences.length} colorFactor={colorFactor} array={array} startIndex={array.length-1}/>
            }
        </>
     );
}
 
export default AlgorithmVisualizer;