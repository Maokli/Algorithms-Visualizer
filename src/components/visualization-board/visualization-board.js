import ArrayElement from '../array-element/array-element';
import styles from './visualization-board.module.css'
import { useState } from 'react';

const VisualizationBoard = ({array, count, startIndex, colorFactor}) => {
    const index = count - startIndex;
    const [display, setDisplay] = useState("flex")
    
    setTimeout(()=> {
        setDisplay(startIndex === count-1 ? "flex": "none");
    },startIndex*200)

    return ( 
        <div className={styles.board} style={{display: display, zIndex: index}}>
            {array.map((el,index) => {
                //Converts the current element to a value between 10 and 70 and that is relative to the other elements
                const relativeVal = 60*( (el-Math.min(...array)) / (Math.max(...array)-Math.min(...array))) +10;

                //Renders lines accroding to that value
                return <ArrayElement key={index} colorFactor={colorFactor} value={relativeVal}/>
            })}
        </div>
     );
}
 
export default VisualizationBoard;