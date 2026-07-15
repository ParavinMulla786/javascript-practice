function minimumEle(arr){
  let min = arr[0];
  for(let i =1; i< arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
  }
  return min;
}

const arr = [4, 12, 78, 3, 90,25];
console.log(minimumEle(arr));