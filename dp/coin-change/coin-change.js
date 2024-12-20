function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    for (let i = 1; i <= amount; i++) {
      for (const coin of coins) {
        if (i - coin >= 0) {
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Test cases
console.log(coinChange([1, 2, 5], 11)); // Output: 3
console.log(coinChange([2], 3)); // Output: -1
console.log(coinChange([1, 2, 5], 0)); // Output: 0
console.log(coinChange([1, 5, 10, 25], 30)); // Output: 2

// Time Complexity: O(amount * number of coins) - The outer loop iterates up to amount, and the inner loop iterates through the coins array.
// Space Complexity: O(amount) - We use an array dp of size amount + 1.
