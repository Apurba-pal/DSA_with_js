// leetcode 121


const maxProfit = prices => {
    let minValue = prices[0];
    let maxProfit = 0

    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - minValue)
        }
    }
    return maxProfit
};



// const prices = [7, 1, 5, 3, 6, 4];
const prices = [2, 4,1];
console.log(maxProfit(prices));