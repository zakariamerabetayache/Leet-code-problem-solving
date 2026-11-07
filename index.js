
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

// 2 // 121. Best Time to Buy and Sell Stock


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

// 3 // 20. Valid Parentheses  

function isValid(s) {
    let open = ["(", "{", "["]
    let closed = [")", "}", "]"]

    let openCount = 0
    let closedCount = 0
    let arr = s.split("");
    if (closed.includes(arr[0]) || open.includes(arr[arr.length - 1])) {
        return false
    }
    let type1 = ["(", ")"]
    let type2 = ["[", "]"]
    let type3 = ["{", "}"]
    let type1count = 0
    let type2count = 0
    let type3count = 0
    for (let i = 0; i < arr.length; i++) {
        if (type1.includes(arr[i])) {
            return true
        }
        else if (type2.includes(arr[i])) {
            type1count = type1count + 1
        }
        else if (type3.includes(arr[i])) {
            type2count = type2count + 1
        }
        else {
            type3count = type3count + 1
        }
        if (open.includes(arr[i])) {
            openCount = openCount + 1
        } else {
            closedCount = closedCount + 1
        }
    }
    if (openCount != closedCount) {
        return false
    }
    if ((type1count != type2count)(type1count != type3count)) {
        return false

    }
    function isTheSameType(s_one, s_two) {
        let type1 = ["(", ")"]
        let type2 = ["[", "]"]
        let type3 = ["{", "}"]
        if (type1.includes(s_one) && type1.includes(s_two)) {
            return true
        }
        else if (type2.includes(s_one) && type2.includes(s_two)) {
            return true
        }
        else if (type3.includes(s_one) && type3.includes(s_two)) {
            return true
        }
        else {
            return false
        }




    }
    for (let i = 0; i < arr.length; i++) {

        if (open.includes(arr[i]) && closed.includes(arr[i + 1]) && !isTheSameType(arr[i], arr[i + 1])) {
            return false
        }

    }
    return true





    console.log("openCount", openCount)
    console.log("closedCount", closedCount)

}

console.log(isValid("([{}]{})"))

