const chunk = (arr,size)=>{
let new_arr = []

for(let i = 0;i<arr.length;i+=size){
    const chunked_arr = arr.slice(i,i+size)
    new_arr.push(chunked_arr)
}
return new_arr
}

console.log(chunk([1,2,3,4,5],2))