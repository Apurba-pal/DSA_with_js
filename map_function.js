var containsDuplicate = function(nums) {
    const map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            return true; // duplicate found
        }
        map.set(num, 1);
    }

    return false; // no duplicates
};



// to add an array into a hashmap 

    // const map = new Map();
    // for( num of nums){
    //     map.set(num, (map.get(num) || 0) + 1);
    // }