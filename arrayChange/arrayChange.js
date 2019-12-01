
function arrayChange1(arr){
 
    let count = 0;
   
    for (let i = 0; i < arr.length; i++){
      
        if (arr[i] >= arr[i+1]){
            const difference = (arr[i]+ 1) - arr[i+1];
            arr[i + 1] = arr[i] +1;
            count += difference; 
        }
    }
    return count;
   }
   
   console.log(arrayChange1([1,1,1]));
   console.log(arrayChange1([1,2,2]));
   console.log(arrayChange1([9, 1, 1]))