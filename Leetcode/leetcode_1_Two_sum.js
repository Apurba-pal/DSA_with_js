var twoSum = (arr,target)=>{
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum([2,7,11,13],9))


// better solution using hashmap

var twoSum = function(nums, target) {
    const freq = {};

    // First pass: store num → index
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = i;
    }

    // Second pass: check for complement
    for (let i = 0; i < nums.length; i++) {
        const remainder = target - nums[i];

        if (remainder in freq && freq[remainder] !== i) {
            return [i, freq[remainder]];
        }
    }

    return []; // in case no solution (though problem says there will be one)
};