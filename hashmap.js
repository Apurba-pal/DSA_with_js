
var containsDuplicate = function(nums) {
    freq = {};
    for (let num of nums){
        if(num in freq){
            freq[num]+=1;
        }else{
            freq[num] = 1
        }
        if (freq[num]>1){
            return true;
        }
    }
    return false;
};