function alternatingSums(arr) {
    return arr.reduce((acc, val, i) =>  {
      acc[i % 2] = acc[i % 2] + val;
      return acc
    }, [0, 0]);
  }
  
  console.log(alternatingSums([1,2,3,4,5,6]))
  
  function alternatingSums2(arr) {
      
      if ( arr.length === 0 ){ return []; }
      
      let oddSum= 0, evenSum=  0;
   
      for (let i = 0; i < arr.length; i++) {
          i % 2 === 0 ? oddSum += arr[i] : evenSum += arr[i];
      }
      
      return [oddSum, evenSum];
  }
   
   
  console.log(alternatingSums2([50,60,60,45,70, 80]));