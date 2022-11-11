import VisualizationBoard from "../visualization-board/visualization-board";

const SelectionSort = ({array, startIndex, colorFactor}) => {
    let minIndex = startIndex;
    for(let j=startIndex;j<array.length;j++)
    {
        if( array[j]<array[minIndex]) minIndex = j;
    }
    let temp = array[startIndex];
    array[startIndex] = array[minIndex];
    array[minIndex] = temp;
    return ( 
            <VisualizationBoard array={array} colorFactor={colorFactor} startIndex={startIndex}/>
     );
}
 
export default SelectionSort;