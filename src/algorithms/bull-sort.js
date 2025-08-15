export const BullSort = (array, algorithmWrapper) => {
  let nbChanges = 1;
  while(nbChanges != 0)
  {   
      nbChanges = 0;
      for(let i = 1; i < array.length; i++)
      {
        if(algorithmWrapper.getElement(i) < algorithmWrapper.getElement(i-1))
        {
          nbChanges++;
          let x = algorithmWrapper.getElement(i);
          algorithmWrapper.setElement(i, algorithmWrapper.getElement(i-1));
          algorithmWrapper.setElement(i-1, x);
        }
      }
  }
}