const common = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const result = [];
    for (const num of arr2) {
        if (set1.has(num)) {
            result.push(num);
        }
    }
    return result;
}

console.log(common([2,1,4,6,3],[1,7,8,3,2]))


// const common = (arr1,arr2) =>{
//     let result = []
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 result.push(arr1[i])
//             }
//         }
//     }
//     return result
// }

// console.log(common([2,1,4,6,3],[1,7,8,3,2]))



// const common = (arr1,arr2) =>{
//     arr1.sort((a,b)=>a-b)
//     arr2.sort((a,b)=>a-b)
//     let i = 0
//     let j = 0
//     let result = []
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] === arr2[j]){
//             result.push(arr1[i])
//             i++
//             j++
//         }else if(arr1[i]>arr2[j]){
//             j++
//         }else{
//             i++
//         }
//     }
//     return result
// }

// console.log(common([2,1,4,6,3],[1,7,8,3,2]))