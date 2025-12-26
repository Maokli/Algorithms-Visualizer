export class AlgorithmWrapper
{
    constructor(array, sequences, setSequences, algorithmFunction, setExecutionDone)
    {
        this.array = array;
        this.sequences = sequences;
        this.setSequences = setSequences;
        this.algorithmFunction = algorithmFunction;
        this.setExecutionDone = setExecutionDone;

        //We empty previously stored sequences
        this.setSequences([]);
        this.setExecutionDone(false);
    }

    getElement(index){
        return this.array[index];
    }

    //Sets the element in the array and captures a snapshot of the array
    setElement(index, value) {
        // We change the value
        this.array[index] = value;

        // We store a snapshot of the array
        this.sequences.push([...this.array]);
        this.setSequences(this.sequences);
    }

    executeAlgorithm()
    {
        this.algorithmFunction(this.array, this);
        this.setExecutionDone(true);
    }
}