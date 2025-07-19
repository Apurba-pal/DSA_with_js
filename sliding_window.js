// find the  minimum sum of k consecutive elements in a array

let arr = [-2, 10, 1, 3, 2, -1, 4, 5];
const k = 3;
let sum = 0;


for(let i = 0;i<k;i++){
    sum+=arr[i];
}

let min = sum;

console.log(sum);
for(let i = k;i<arr.length;i++){
    sum= arr[i-1] + arr[i+k-1];
    if(sum<min){
        min = Math.min(sum, min);
    }
}