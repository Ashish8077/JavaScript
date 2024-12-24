// function findMinMax(arr) {
//     if(arr.length === 0){
//       return {max:null, min:null}
//     }
//     let max = arr[0];
//     let min = arr[0];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return {max, min}
//   }
//   const arr = [500, 10, -1, 30000, 30, 50, 1000];
  
//   console.log(findMinMax(arr).max);
//   console.log(findMinMax(arr).min);


// Reduce method 

  function findMinMax(arr) {
    if(arr.length === 0){
        return {max:null, min:null}
    }

    return arr.reduce((acc, curr)=>{
       if(curr > acc.max){
        acc.max = curr
       }
       if(curr < acc.min){
        acc.min = curr
       }
       return acc
    }, {max:arr[0], min:arr[0]})
  }
  const arr = [500, 10, -1, 30000, 30, 50, 1000];

  console.log(findMinMax(arr))
  

//apply method

const arr1 = [500, 10, -1, 30000, 30, 50, 1000]

console.log(Math.max.apply(null, arr))
console.log(Math.min.apply(null, arr))
