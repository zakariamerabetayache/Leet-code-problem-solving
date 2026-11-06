
// 1 Two sum  // with simple loop

function twoSum(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                return [i, j];
            }
        }
    }
}
// 1 Two sum  // with hashmap
function twoSumHM(nums, target) {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        needed = target - nums[i];
        if (seen.has(needed)) {
            return [seen.get(needed), i];
        } else {
            seen.set(nums[i], i);
        }
    }

}
const twoSumElement = document.getElementById("twosum");
// twoSumElement.innerHTML = twoSumHM([2, 7, 4], 9);

// 2 Best Time to Buy and Sell Stock 


// the used method called gready algorithem 

function maxProfit(prices) {
    let minPrice = Infinity
    let maxprofit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        let profit = prices[i] - minPrice
        if (profit > maxprofit) {
            maxprofit = profit

        }
    }
    return maxprofit


}
console.log(maxProfit([2, 4, 1]))
const maxProfitElement = document.getElementById("maxProfit");
maxProfitElement.textContent = maxProfit([7, 1, 5, 3, 6, 4]);

