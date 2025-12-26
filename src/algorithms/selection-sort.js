export const SelectionSort = (array, algorithmWrapper) => {
    let startIndex = 0;
    while(startIndex !== array.length)
    {   
        let minIndex = startIndex;
        for(let j=startIndex;j<array.length;j++)
        {
            if( algorithmWrapper.getElement(j)<algorithmWrapper.getElement(minIndex)) minIndex = j;
        }
        let temp = algorithmWrapper.getElement(startIndex);
        algorithmWrapper.setElement(startIndex, algorithmWrapper.getElement(minIndex));
        algorithmWrapper.setElement(minIndex, temp);
        startIndex++;
    }
}