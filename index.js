
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
twoSumElement.innerHTML = twoSumHM([2, 7, 4], 9);

// 2 Best Time to Buy and Sell Stock 

function maxProfit(prices) {

    let oldprices = [...prices]
    let sortprices = prices.sort((a, b) => a - b);
    let min = sortprices[0]

    while (oldprices.indexOf(min) == oldprices.length - 1) {
        oldprices = oldprices.slice(0, -1)
        sortprices = prices.sort((a, b) => a - b)
        min = sortprices[0 + 1]
    }


    let minrealindex = oldprices.indexOf(min)

    let whatLeft = oldprices.slice(minrealindex)
    let sortwhatLeft = whatLeft.sort((a, b) => b - a);

    console.log(sortprices)


    if (whatLeft.lenght == 0) {
        return 0
    } else {
        return sortwhatLeft[0] - min
    }



}
console.log(maxProfit([2, 4, 1]))
const maxProfitElement = document.getElementById("maxProfit");
// maxProfitElement.innerHTML = maxProfit([7, 1, 5, 3, 6, 4])

