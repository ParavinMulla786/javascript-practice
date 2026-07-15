function linearSearch(arr,target){
    for(let i = 0; i < arr.length;i++){
        if(arr[i]=== target){
            return i;
        }
    }
     return -1;
}
const arr = [13, 45,67,23,89];
const target = 67;

const result = linearSearch(arr,target);
console.log(result);
